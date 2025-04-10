import {
    NodeViews,
    TNodeInstructionsTypes,
    TDataType,
    TNodeData,
} from "@/entities/editor";
import { Position } from "@xyflow/react";
import styles from "./styles.module.css";
import { useMemo } from "react";

import { generateHandles } from "../../../utils/helpers/genereteHandles";
import { InputHandles } from "@/features/nodes/ui/core/InputHandles/InputHandles";
import { CustomHandle } from "@/features/nodes/ui/core/CustomHandle/CustomHandle";
import { applyFeatures } from "@/features/nodes/utils/helpers/applyFeatures";

interface Props {
    id: string;
    data: TNodeData;
}

export const BasedNodeLogic = ({ id, data }: Props) => {
    const { inputHandlesCount, outputHandlesCount, type, dataType } = data;
    console.log(inputHandlesCount);
    const viewInfo = NodeViews[type];

    if (!viewInfo) {
        return null;
    }

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

    return applyFeatures(id, data, baseNode);
};
