import { colorsByTypes, TDataType } from "@/entities/editor";
import { Position, Handle } from "@xyflow/react";
import styles from "./styles.module.css";

interface Props {
    id: string | number;
    type: "target" | "source";
    position: Position;
    dataType: TDataType;
}

export const CustomHandle = ({ id, type, position, dataType }: Props) => {
    const pos = {
        left: "translate(-100%, -50%)",
        right: "translate(100%, -50%)",
        top: "translate(translate(-50%, -100%))",
        bottom: "translate(translate(-50%, 100%))",
    };
    return (
        <Handle
            type={type}
            position={position}
            id={`${id}`}
            style={{
                backgroundColor: colorsByTypes[dataType].clr,
                transform: pos[position],
            }}
            className={styles["handle"]}
        />
    );
};
