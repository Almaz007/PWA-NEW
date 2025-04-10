import { ConnectionLineType, EdgeTypes, NodeTypes } from "@xyflow/react";
import { CustomEdge } from "@/features/customEdge";
import { NodeComponent } from "@/features/nodes";

export const proOptions = { account: "paid-pro", hideAttribution: true };

export const defaultEdgeOptions = {
    type: ConnectionLineType.SmoothStep,
    style: { strokeWidth: 2 },
};

export const nodeTypes = {
    node: NodeComponent,
};

export const edgeTypes: EdgeTypes = {
    "custom-edge": CustomEdge,
};
