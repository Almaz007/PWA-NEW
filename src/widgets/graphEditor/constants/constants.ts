import { ConnectionLineType, EdgeTypes, NodeTypes } from "@xyflow/react";
import { Shape } from "@/features/nodes";
import { CustomEdge } from "@/entities/editor";

export const proOptions = { account: "paid-pro", hideAttribution: true };

export const defaultEdgeOptions = {
    type: ConnectionLineType.SmoothStep,
    style: { strokeWidth: 2 },
};

export const nodeTypes: NodeTypes = {
    shape: Shape,
};

export const edgeTypes: EdgeTypes = {
    "custom-edge": CustomEdge,
};
