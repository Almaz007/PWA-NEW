import { useReactFlow } from "@xyflow/react";
import { useMemo, useState } from "react";

export const useHandleData = (nodeId: string) => {
    const { updateNodeData } = useReactFlow();
    const items = [...new Array(10)].reduce((acc, index) => {
        acc.push(index + 1);
        return acc;
    }, []);
    const changeHandlesCount = (count: number | string) => {
        updateNodeData(nodeId, { inputHandlesCount: count });
    };

    return { changeHandlesCount, items };
};
