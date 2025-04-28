import { v4 as uuidv4 } from "uuid";
import { type Node, XYPosition } from "@xyflow/react";

import {
    DefaultNodeData,
    SetpointNodeData,
    TNodeInstructionsTypes,
    TNodeData,
    nodeConfigurations,
} from "@/entities/editor";
import { getOffset } from "@/entities/ofsset";
import { getSetpointOffset } from "@/entities/setpoint";
import { enqueueSnackbar } from "notistack";

const generateData = (config: TNodeData): TNodeData | null => {
    if ("setpointOffset" in config) {
        const offset = getSetpointOffset(config.dataType);
        if (offset === undefined) return null;

        return {
            ...config,
            setpointOffset: offset,
            resultOffset: undefined
        } satisfies SetpointNodeData;
    }

    const offset = getOffset(config.dataType);
    if (offset === undefined) return null;

    return {
        ...config,
        resultOffset: offset,
    } satisfies DefaultNodeData;
};

export const generateNode = (
    type: TNodeInstructionsTypes,
    position: XYPosition
): Node<TNodeData> | null => {
    const config = nodeConfigurations[type];

    if (!config) {
        enqueueSnackbar(`Неизвестный тип узла: ${type}`, { variant: "error" });
        return null;
    }

    const data = generateData(config);

    if (!data) {
        enqueueSnackbar("Недостаточно памяти для узла", { variant: "error" });
        return null;
    }

    return {
        id: uuidv4(),
        type: "node",
        position,
        data,
    };
};
