import { InputViewStructure } from "../InputViewStruture/InputViewStructure";
import { NodeProps, type Node } from "@xyflow/react";
import { TNodeData } from "../../../../model/types";
import { SvgIcon } from "./SvgIcon";

type Props = NodeProps<Node<TNodeData>>;
export const DiscreteInputView = ({ width = 0, height = 0 }: Props) => {
    return (
        <InputViewStructure
            width={width}
            height={height}
            img={<SvgIcon />}
            text="Дискретный вход"
        />
    );
};
