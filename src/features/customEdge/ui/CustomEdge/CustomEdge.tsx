import {
    BaseEdge,
    EdgeProps,
    getSmoothStepPath,
    Position,
    useReactFlow,
} from "@xyflow/react";
import { markerTypes, colorsByTypes } from "@/entities/editor";
import { TNodeData } from "@/entities/editor";
import { Node } from "@xyflow/react";
export const CustomEdge = ({
    id,
    source,
    sourceX,
    sourceY,
    targetX,
    targetY,
    selected,
    sourcePosition = Position.Right,
    targetPosition = Position.Left,
}: EdgeProps) => {
    const { getNode } = useReactFlow<Node<TNodeData>>();

    const [edgePath] = getSmoothStepPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        borderRadius: 8,
        offset: 17, // Увеличиваем отступ
    });
    const node = getNode(source);
    if (!node) return null;

    const dataType = node.data.dataType;
    const strokeColor = selected
        ? colorsByTypes[dataType]?.selectedClr
        : colorsByTypes[dataType]?.clr;

    const markerType = markerTypes[dataType];

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
                    <circle
                        cx="6"
                        cy="5"
                        r="3"
                        fill={colorsByTypes["int"]?.clr}
                    />
                </marker>

                {/* Маркер для float (стрелка) */}
                <marker
                    id="arrow-closed"
                    viewBox="0 0 10 10"
                    refX={10} // Увеличиваем для отступа
                    refY={5}
                    markerWidth={8}
                    markerHeight={8}
                    orient="auto-start-reverse"
                >
                    <path
                        d="M 0 0 L 10 5 L 0 10 Z"
                        fill={colorsByTypes["float"]?.clr}
                    />
                </marker>
            </defs>

            <BaseEdge
                id={id}
                path={edgePath}
                style={{
                    stroke: strokeColor,
                    strokeWidth: 3,
                }}
                markerEnd={markerType ? `url(#${markerType})` : undefined} // Подставляем нужный маркер
            />
        </>
    );
};
