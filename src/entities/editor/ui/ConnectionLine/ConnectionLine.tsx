import React from "react";
import { getSmoothStepPath, Position, useConnection } from "@xyflow/react";

import { ConnectionLineComponentProps } from "@xyflow/react";
import { typeColors } from "../../constants/constants";
export const ConnectionLine = ({
    fromX,
    fromY,
    toX,
    toY,
    fromPosition,
    toPosition,
}: ConnectionLineComponentProps) => {
    const { fromHandle } = useConnection();
    // Генерируем путь с помощью SmoothStepPath
    const [path, labelX, labelY] = getSmoothStepPath({
        sourceX: fromX,
        sourceY: fromY,
        targetX: toX,
        targetY: toY,
        offset: 20,
        sourcePosition: fromPosition,
        targetPosition: toPosition,
    });
    console.log(fromHandle);

    return (
        <g>
            <path
                fill="none"
                stroke={typeColors[fromHandle.id].clr}
                strokeWidth={2}
                // className="animated"
                d={path} // Используем SmoothStepPath
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
