import { TDataType } from "@/shared/types";
import {
    Edge,
    Node,
    NodeChange,
    OnConnect,
    OnEdgesChange,
} from "@xyflow/react";
import { TNodeInstructionsTypes } from "../nodeInstructions";

export type BaseNodeData = {
    dataType: TDataType;
    type: TNodeInstructionsTypes;
    inputHandlesCount: number;
    outputHandlesCount: number;
    name?: string;
    resultOffset: number | null;
};

export type SetpointNodeData = BaseNodeData & {
    setpointOffset: number | null;
};

export type TNodeData = SetpointNodeData | BaseNodeData;

export interface EditorState {
    nodes: Node<TNodeData>[];
    edges: Edge[];
    onNodesChange: (changes: NodeChange<Node<TNodeData>>[]) => void;
    onEdgesChange: OnEdgesChange;
    addEdge: OnConnect;
    addNode: (newNode: Node<TNodeData>) => void;
    updateEdges: () => void;
}
