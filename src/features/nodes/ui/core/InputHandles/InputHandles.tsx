import { Position } from "@xyflow/react";
import { CustomHandle } from "../CustomHandle/CustomHandle";
import styles from "./styles.module.css";
import { TDataType } from "@/shared/types";
import { useMemo } from "react";
import { generateHandles } from "@/features/nodes/lib/utils/genereteHandles";

interface Props {
    dataType: TDataType;
    inputHandlesCount: number;
}

export const InputHandles = ({ dataType, inputHandlesCount }: Props) => {
    const inputhHandlesValues = useMemo(() => {
        return generateHandles(inputHandlesCount);
    }, [inputHandlesCount]);

    return (
        <div className={styles["handles-column"]}>
            {Object.keys(inputhHandlesValues).map((key) => (
                <div className={styles["handle-wrap"]} key={key}>
                    <CustomHandle
                        id={key}
                        type={"target"}
                        position={Position.Left}
                        dataType={dataType}
                    />
                </div>
            ))}
        </div>
    );
};
