import {
    BaseEdge,
    EdgeProps,
    getSmoothStepPath,
    Position,
    MarkerType,
} from "@xyflow/react";
import { typeColors, markerTypes } from "../../constants/constants";

export const CustomEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    selected,
    sourceHandleId,
    sourcePosition = Position.Right,
    targetPosition = Position.Left,
}: EdgeProps) => {
    const [edgePath] = getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        borderRadius: 10,
        offset: 20, // Увеличиваем отступ
    });

    const strokeColor = selected
        ? typeColors[sourceHandleId]?.selectedClr
        : typeColors[sourceHandleId]?.clr;

    // Определяем маркер в зависимости от типа
    const markerType = markerTypes[sourceHandleId as keyof typeof markerTypes];

    return (
        <>
            {/* Определяем маркеры в SVG (если нужны кастомные) */}
            <defs>
                {/* Маркер для int (кружок) */}
                <marker
                    id="circle"
                    viewBox="0 0 10 10"
                    refX={9} // Увеличиваем, чтобы отодвинуть от края
                    refY={5}
                    markerWidth={8}
                    markerHeight={8}
                    orient="auto-start-reverse"
                >
                    <circle cx="5" cy="5" r="4" fill={strokeColor} />
                </marker>

                {/* Маркер для float (стрелка) */}
                <marker
                    id="arrow-closed"
                    viewBox="0 0 10 10"
                    refX={9} // Увеличиваем для отступа
                    refY={5}
                    markerWidth={6}
                    markerHeight={6}
                    orient="auto-start-reverse"
                >
                    <path d="M 0 0 L 10 5 L 0 10 Z" fill={strokeColor} />
                </marker>
            </defs>

            <BaseEdge
                id={id}
                path={edgePath}
                style={{
                    stroke: strokeColor,
                    strokeWidth: 2,
                }}
                markerEnd={markerType ? `url(#${markerType})` : undefined} // Подставляем нужный маркер
            />
        </>
    );
};
