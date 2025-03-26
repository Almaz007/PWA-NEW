import {
    TNodeInstructionsTypes,
    IPosition,
    nodeConfigurations,
} from "@/entities/node";
import { v4 as uuidv4 } from "uuid";
import { type Node } from "@xyflow/react";
import { TNodeData } from "@/entities/node";

export const generateNode = (
    type: TNodeInstructionsTypes,
    position: IPosition
): Node => {
    const id = uuidv4();

    if (!nodeConfigurations[type]) {
        throw new Error(`Unknown node type: ${type}`);
    }

    const { width, height, ...data } = nodeConfigurations[type];

    const resultNode: Node<TNodeData> = {
        id,
        type: type,
        position,
        width: width,
        height: height,
        data: { ...data },
    };
    return resultNode;
};
