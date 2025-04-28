import { TDataType } from "@/shared/types";
import {
    Edge,
    Node,
    NodeChange,
    OnConnect,
    OnEdgesChange,
} from "@xyflow/react";
import { TNodeInstructionsTypes } from "../nodeInstructions";

type BaseNodeData = {
    dataType: TDataType;
    type: TNodeInstructionsTypes;
    inputHandlesCount: number;
    outputHandlesCount: number;
    name?: string;
};

export type DefaultNodeData = BaseNodeData & {
    resultOffset: number | null;
    setpointOffset?: never;
};

export type SetpointNodeData = BaseNodeData & {
    setpointOffset: number | null;
    resultOffset?: never;
};
export type TNodeData = SetpointNodeData | DefaultNodeData;

export interface EditorState {
    nodes: Node<TNodeData>[];
    edges: Edge[];
    onNodesChange: (changes: NodeChange<Node<TNodeData>>[]) => void;
    onEdgesChange: OnEdgesChange;
    addEdge: OnConnect;
    addNode: (newNode: Node<TNodeData>) => void;
    updateEdges: () => void;
}
