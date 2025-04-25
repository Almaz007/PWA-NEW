import { ComponentType } from "react";
import { TNodeData } from "../..";
import { TNodeInstructionsTypes } from "../nodeInstructions";

export type TNodeConfigurations = Partial<
    Record<TNodeInstructionsTypes, TNodeData>
>;
export interface IBuisnessComponentProps {
    data: TNodeData;
}
export type TBuisnessComponents = Partial<
    Record<TNodeInstructionsTypes, ComponentType<IBuisnessComponentProps>>
>;
