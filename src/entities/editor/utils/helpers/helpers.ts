import { v4 as uuidv4 } from "uuid";
import { type Node } from "@xyflow/react";
import { TNodeInstructionsTypes } from "../../model/nodeInstructions";
import { IPosition } from "../../model/types/types";
import { TNodeData } from "../../model/types/types";
import { nodeConfigurations } from "../../config/nodeConfigurations";

export const generateNode = (
    type: TNodeInstructionsTypes,
    position: IPosition
): Node<TNodeData> => {
    const id = uuidv4();
    const data = nodeConfigurations[type];
    if (!data) {
        throw new Error(`Unknown node type: ${type}`);
    }

    const resultNode: Node<TNodeData> = {
        id,
        type: "node",
        position,
        data: { ...data },
    };
    return resultNode;
};
