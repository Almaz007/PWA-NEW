// features/context-menu/lib/hooks/use-change-handles.ts
import { useCallback } from "react";
import { useReactFlow, useUpdateNodeInternals } from "@xyflow/react";

export const useChangeHandles = (nodeId: string) => {
    const { updateNodeData, getEdges, setEdges } = useReactFlow();
    const updateNodeInternals = useUpdateNodeInternals();

    const items = [...new Array(10)].reduce((acc, _, index) => {
        acc.push({ value: index + 1 });
        return acc;
    }, []);

    const changeHandles = useCallback(
        (count: number | string) => {
            updateNodeData(nodeId, { inputHandlesCount: count });
            updateNodeInternals(nodeId);

            const edges = getEdges();
            const newEdges = edges.filter(
                (edge) =>
                    !(
                        edge.target === nodeId &&
                        edge.targetHandle &&
                        +edge.targetHandle > +count
                    )
            );

            setEdges(newEdges);
        },
        [nodeId, updateNodeData, updateNodeInternals, getEdges, setEdges]
    );

    return { changeHandles, items };
};
