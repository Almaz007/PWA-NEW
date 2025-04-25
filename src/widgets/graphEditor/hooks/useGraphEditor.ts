import { editorSelector, TNodeData, useEditorStore } from "@/entities/editor";
import { useDnd } from "@/features/dnd";
import {
    Connection,
    FinalConnectionState,
    getOutgoers,
    Node,
    useReactFlow,
} from "@xyflow/react";
import { useSnackbar } from "notistack";
import { shallow } from "zustand/shallow";
import { Edge } from "@xyflow/react";
export const useGraphEditor = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, addEdge } =
        useEditorStore(editorSelector, shallow);

    const { onDragOver, onDrop } = useDnd();
    const { getNodes, getEdges } = useReactFlow<Node<TNodeData>>();
    const { enqueueSnackbar } = useSnackbar();

    const isValidConnection: (connection: Edge | Connection) => boolean = (
        connection
    ) => {
        const nodes = getNodes();
        const edges = getEdges();

        // Защита от undefined
        const sourceId = connection.source ?? "";
        const targetId = connection.target ?? "";

        const source = nodes.find((node) => node.id === sourceId);
        const target = nodes.find((node) => node.id === targetId);

        if (!source || !target) return false;

        if (source.data.dataType !== target.data.dataType) return false;

        const hasCycle = (node: Node, visited = new Set<string>()) => {
            if (visited.has(node.id)) return false;
            visited.add(node.id);

            for (const outgoer of getOutgoers(node, nodes, edges)) {
                if (outgoer.id === sourceId) return true;
                if (hasCycle(outgoer, visited)) return true;
            }

            return false;
        };

        // Не допускаем самосвязи
        if (sourceId === targetId) return false;

        return !hasCycle(target);
    };

    const onConnectEnd = (
        _: MouseEvent | TouchEvent,
        connectionState: FinalConnectionState
    ) => {
        console.log(connectionState);
        const { fromNode, toNode, isValid } = connectionState;

        if (
            fromNode?.data.dataType !== toNode?.data.dataType &&
            isValid === false
        ) {
            enqueueSnackbar("Нерроектное соединение", { variant: "error" });
        }
    };

    return {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        addEdge,
        onDragOver,
        onDrop,
        isValidConnection,
        onConnectEnd,
    };
};
