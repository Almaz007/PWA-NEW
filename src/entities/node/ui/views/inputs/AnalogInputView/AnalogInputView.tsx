import { InputViewStructure } from "../InputViewStruture/InputViewStructure";
import { type Node } from "@xyflow/react";
import { TNodeData } from "../../../../model/types";

export const AnalogInputView = ({ width = 0, height = 0 }: Node<TNodeData>) => {
    return <InputViewStructure width={width} height={height} />;
};
