import { TViewProps } from "@/entities/editor/model/types/types";
import styles from "./styles.module.css";

export const LogicViewStructure = ({ width, height, text }: TViewProps) => {
    return (
        <div
            className={styles["logic"]}
            style={{ width: width, height: height }}
        >
            <div className={styles["text"]}>{text}</div>
        </div>
    );
};
