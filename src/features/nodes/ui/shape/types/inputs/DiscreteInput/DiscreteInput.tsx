import { NodeViews, TNodeData } from "@/entities/node";
import { Handle, Position } from "@xyflow/react";
import type { NodeProps, Node } from "@xyflow/react";
import styles from "./styles.module.css";
import { typeColors } from "@/entities/editor";

type Props = NodeProps<Node<TNodeData>>;

export const DiscreteInput = ({ width, height, data }: Props) => {
    const { type, dataType } = data;
    const ViewElement = NodeViews[type];

    if (!ViewElement) {
        return null;
    }
    return (
        <>
            <div className={styles["row"]}>
                <ViewElement width={width} height={height} />
                <div className={styles["handle-mask"]}></div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                id={`${dataType}`}
                style={{ backgroundColor: typeColors[dataType].clr }}
                className={styles["handle"]}
            />
        </>
    );
};
