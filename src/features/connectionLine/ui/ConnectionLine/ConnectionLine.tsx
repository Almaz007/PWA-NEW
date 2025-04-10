import { getSmoothStepPath, InternalNode, useConnection } from "@xyflow/react";
import { ConnectionLineComponentProps } from "@xyflow/react";
import { TNodeData } from "@/entities/editor";
import { Node } from "@xyflow/react";
import { colorsByTypes } from "@/entities/editor";

export const ConnectionLine = ({
    fromX,
    fromY,
    toX,
    toY,
    fromPosition,
    toPosition,
}: ConnectionLineComponentProps) => {
    const { fromNode } = useConnection<InternalNode<Node<TNodeData>>>();

    const [path] = getSmoothStepPath({
        sourceX: fromX,
        sourceY: fromY,
        targetX: toX,
        targetY: toY,
        offset: 16,
        sourcePosition: fromPosition,
        targetPosition: toPosition,
    });

    if (!fromNode) return null; // Проверяем, что узел существует

    const {
        data: { dataType },
    } = fromNode;

    return (
        <g>
            <path
                fill="none"
                stroke={colorsByTypes[dataType].clr}
                strokeWidth={2}
                d={path}
            />
            {/* <circle
                cx={toX}
                cy={toY}
                fill="#fff"
                r={4}
                stroke={typeColors[fromHandle.id].clr}
                strokeWidth={1.5}
            /> */}
        </g>
    );
};
