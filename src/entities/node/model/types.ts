import { ComponentType, ReactNode } from "react";
import { SVGAttributes } from "react";
import { TNodeInstructionsTypes } from "./nodeInstructions";

export interface IPosition {
    x: number;
    y: number;
}
export type TDataType = "int" | "float" | "bool";

export type TNodeData = {
    dataType: TDataType;
    type: TNodeInstructionsTypes;
    handlesCount: number;
    name?: string;
};
export type TViewProps = {
    width: number;
    height: number;
    img?: ReactNode;
    text?: string;
} & SVGAttributes<SVGElement>;

export type TNodeConfig = {
    width: number;
    height: number;
} & TNodeData;

export type TNodeConfigurations = Partial<
    Record<TNodeInstructionsTypes, TNodeConfig>
>;

export type TNodeComponents = Partial<
    Record<TNodeInstructionsTypes, ComponentType<any>>
>;
