import {
    type Node,
    type Edge,
    type OnEdgesChange,
    type OnConnect,
    NodeChange,
} from "@xyflow/react";

import { ComponentType, ReactNode } from "react";
import { SVGAttributes } from "react";
import { TNodeInstructionsTypes } from "../nodeInstructions";

export interface IPosition {
    x: number;
    y: number;
}
export type TDataType = "int" | "float" | "bool";

export type TNodeData = {
    dataType: TDataType;
    type: TNodeInstructionsTypes;
    inputHandlesCount: number;
    outputHandlesCount: number;
    name?: string;
};
export type TViewProps = {
    width: number;
    height: number;
    icon?: ReactNode;
    text?: string;
    name?: string;
} & SVGAttributes<SVGElement>;

export type TNodeConfigurations = Partial<
    Record<TNodeInstructionsTypes, TNodeData>
>;

type TColor = {
    clr: string;
    selectedClr: string;
};
export type TColorsType = Record<TDataType, TColor>;

type MarkerType = undefined | "circle" | "arrow-closed";
export type TMarkerTypes = Record<TDataType, MarkerType>;

export interface IBuisnessComponentProps {
    data: TNodeData;
}
export type TBuisnessComponents = Partial<
    Record<TNodeInstructionsTypes, ComponentType<IBuisnessComponentProps>>
>;

export type TViewComponents = Partial<
    Record<
        TNodeInstructionsTypes,
        TViewProps & { view: ComponentType<TViewProps> }
    >
>;

export interface EditorState {
    nodes: Node<TNodeData>[];
    edges: Edge[];
    onNodesChange: (changes: NodeChange<Node<TNodeData>>[]) => void;
    onEdgesChange: OnEdgesChange;
    addEdge: OnConnect;
    addNode: (newNode: Node<TNodeData>) => void;
}
