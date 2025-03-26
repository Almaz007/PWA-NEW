import { NodeBuisnessLogics } from "./types";
import type { Node, NodeProps } from "@xyflow/react";
import { TNodeData } from "@/entities/node";

type Props = NodeProps<Node<TNodeData>>;

export const Shape = ({ id, data, width, height }: Props) => {
    const { type } = data;

    const NodeComponent = NodeBuisnessLogics[type];

    if (!NodeComponent || !width || !height) {
        return <></>;
    }

    return <NodeComponent id={id} width={width} height={height} data={data} />;
};
