import type { Node, NodeProps } from "@xyflow/react";
import { TNodeData } from "@/entities/editor";
import { NodeBuisnessLogics } from "../Node-types";

type Props = NodeProps<Node<TNodeData>>;

export const NodeComponent = ({ id, data }: Props) => {
    const { type } = data;

    const NodeComponent = NodeBuisnessLogics[type];

    if (!NodeComponent) {
        return null;
    }

    return <NodeComponent id={id} data={data} />;
};
