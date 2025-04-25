import { NodeViews, TNodeData } from "@/entities/editor";
import { NodeProps, Node, Position } from "@xyflow/react";
import styles from "./styles.module.css";
import { InputHandles } from "@/features/nodes/ui/core/InputHandles/InputHandles";
import { CustomHandle } from "@/features/nodes/ui/core/CustomHandle/CustomHandle";
import { applyFeatures } from "@/features/nodes/lib/utils/applyFeatures";
import { memo } from "react";

type Props = NodeProps<Node<TNodeData>>;

export const BasedNodeLogic = memo(({ id, data }: Props) => {
    const { inputHandlesCount, outputHandlesCount, type, dataType } = data;

    const viewInfo = NodeViews[type];

    if (!viewInfo) {
        return null;
    }
    console.log("render");
    const { view: ViewElement, ...props } = viewInfo;

    const baseNode = (
        <div className={styles["row"]}>
            <InputHandles
                inputHandlesCount={inputHandlesCount}
                dataType={dataType}
            />
            <ViewElement {...props} />
            {!!outputHandlesCount && (
                <CustomHandle
                    id="out"
                    type={"source"}
                    position={Position.Right}
                    dataType={dataType}
                />
            )}
        </div>
    );
    // return baseNode;
    return applyFeatures(id, data, baseNode);
});
