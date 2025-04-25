import { useState, useCallback, useEffect, useRef } from "react";
import {
    Node,
    useKeyPress,
    useReactFlow,
    getConnectedEdges,
    KeyCode,
    Edge,
    XYPosition,
    useStore,
} from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";
import { TNodeData } from "@/entities/editor";
import { enqueueSnackbar } from "notistack";
import { addOffset, getOffset } from "@/entities/ofsset";
import { addSetpointOffset, getSetpointOffset } from "@/entities/setpoint";

export function useCopyPaste() {
    const mousePosRef = useRef<XYPosition>({ x: 0, y: 0 });
    const rfDomNode = useStore((state) => state.domNode);

    const { getNodes, setNodes, getEdges, setEdges, screenToFlowPosition } =
        useReactFlow<Node<TNodeData>>();

    // Set up the paste buffers to store the copied nodes and edges.
    const [bufferedNodes, setBufferedNodes] = useState([] as Node<TNodeData>[]);
    const [bufferedEdges, setBufferedEdges] = useState([] as Edge[]);

    // initialize the copy/paste hook
    // 1. remove native copy/paste/cut handlers
    // 2. add mouse move handler to keep track of the current mouse position

    useEffect(() => {
        const events = ["cut", "copy", "paste"];

        if (rfDomNode) {
            const preventDefault = (e: Event) => e.preventDefault();

            const onMouseMove = (event: MouseEvent) => {
                mousePosRef.current = {
                    x: event.clientX,
                    y: event.clientY,
                };
            };

            for (const event of events) {
                rfDomNode.addEventListener(event, preventDefault);
            }

            rfDomNode.addEventListener("mousemove", onMouseMove);

            return () => {
                for (const event of events) {
                    rfDomNode.removeEventListener(event, preventDefault);
                }

                rfDomNode.removeEventListener("mousemove", onMouseMove);
            };
        }
    }, [rfDomNode]);

    const copy = useCallback(() => {
        const selectedNodes = getNodes().filter((node) => node.selected);
        const selectedEdges = getConnectedEdges(
            selectedNodes,
            getEdges()
        ).filter((edge) => {
            const isExternalSource = selectedNodes.every(
                (n) => n.id !== edge.source
            );
            const isExternalTarget = selectedNodes.every(
                (n) => n.id !== edge.target
            );

            return !(isExternalSource || isExternalTarget);
        });

        setBufferedNodes(selectedNodes);
        setBufferedEdges(selectedEdges);
    }, [getNodes, getEdges]);

    const cut = useCallback(() => {
        const selectedNodes = getNodes().filter((node) => node.selected);
        const selectedEdges = getConnectedEdges(
            selectedNodes,
            getEdges()
        ).filter((edge) => {
            const isExternalSource = selectedNodes.every(
                (n) => n.id !== edge.source
            );
            const isExternalTarget = selectedNodes.every(
                (n) => n.id !== edge.target
            );

            return !(isExternalSource || isExternalTarget);
        });

        setBufferedNodes(selectedNodes);
        setBufferedEdges(selectedEdges);

        selectedNodes.forEach((node) => {
            if ("resultOffset" in node.data && node.data.resultOffset) {
                addOffset(node.data.dataType, node.data.resultOffset);
            }
            if ("setpointOffset" in node.data && node.data.setpointOffset) {
                addSetpointOffset(node.data.dataType, node.data.setpointOffset);
            }
        });
        // A cut action needs to remove the copied nodes and edges from the graph.
        const newNodes = getNodes().filter((node) => !node.selected);

        setNodes([...newNodes]);
        setEdges((edges) =>
            edges.filter((edge) => !selectedEdges.includes(edge))
        );
    }, [getNodes, setNodes, getEdges, setEdges]);

    const paste = useCallback(
        async (
            { x: pasteX, y: pasteY } = screenToFlowPosition({
                x: mousePosRef.current.x,
                y: mousePosRef.current.y,
            })
        ) => {
            try {
                const minX = Math.min(
                    ...bufferedNodes.map((s) => s.position.x)
                );
                const minY = Math.min(
                    ...bufferedNodes.map((s) => s.position.y)
                );

                // Генерируем новые узлы с обновленными offset
                const newNodes: Node<TNodeData>[] = await Promise.all(
                    bufferedNodes.map(
                        async (node): Promise<Node<TNodeData>> => {
                            const id = uuidv4();
                            const x = pasteX + (node.position.x - minX);
                            const y = pasteY + (node.position.y - minY);

                            // Определяем тип узла и получаем новый offset
                            let newOffset: number | undefined;
                            if ("resultOffset" in node.data) {
                                newOffset = getOffset(node.data.dataType);
                            } else if ("setpointOffset" in node.data) {
                                newOffset = getSetpointOffset(
                                    node.data.dataType
                                );
                            }

                            if (!newOffset) {
                                throw new Error(
                                    "Не удалось выделить память для узла"
                                );
                            }

                            return {
                                ...node,
                                id,
                                position: { x, y },
                                data: {
                                    ...node.data,
                                    ...("resultOffset" in node.data
                                        ? {
                                              resultOffset: newOffset,
                                              setpointOffset: undefined,
                                          }
                                        : {
                                              setpointOffset: newOffset,
                                              resultOffset: undefined,
                                          }),
                                },
                            };
                        }
                    )
                );

                // Обработка связей
                const nodeIdMap = newNodes.reduce<Record<string, string>>(
                    (acc, node, index) => ({
                        ...acc,
                        [bufferedNodes[index].id]: node.id,
                    }),
                    {}
                );

                const newEdges = bufferedEdges.map((edge) => ({
                    ...edge,
                    id: uuidv4(),
                    source: nodeIdMap[edge.source],
                    target: nodeIdMap[edge.target],
                }));

                // Обновляем состояние
                setNodes((nodes) => [
                    ...nodes.map((n) => ({ ...n, selected: false })),
                    ...newNodes,
                ]);
                setEdges((edges) => [
                    ...edges.map((e) => ({ ...e, selected: false })),
                    ...newEdges,
                ]);
            } catch (error) {
                enqueueSnackbar("ошбика при копировании", { variant: "error" });
            }
        },
        [bufferedNodes, bufferedEdges, screenToFlowPosition, setNodes, setEdges]
    );

    useShortcut(["Meta+x", "Control+x"], cut);
    useShortcut(["Meta+c", "Control+c"], copy);
    useShortcut(["Meta+v", "Control+v"], paste);

    return { cut, copy, paste, bufferedNodes, bufferedEdges };
}

function useShortcut(keyCode: KeyCode, callback: Function): void {
    const [didRun, setDidRun] = useState(false);
    const shouldRun = useKeyPress(keyCode);

    useEffect(() => {
        if (shouldRun && !didRun) {
            callback();
            setDidRun(true);
        } else {
            setDidRun(shouldRun);
        }
    }, [shouldRun, didRun, callback]);
}

export default useCopyPaste;
