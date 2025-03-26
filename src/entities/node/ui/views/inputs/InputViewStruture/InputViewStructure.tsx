import styles from "./styles.module.css";
import { TViewProps } from "@/entities/node/model/types";

export const InputViewStructure = ({
    width,
    height,
    text,
    img,
    ...svgAttributes
}: TViewProps) => {
    return (
        <div
            className={styles["input"]}
            style={{ width: width, height: height }}
        >
            <div className={styles["img"]}>{img}</div>
            <div className={styles["text"]}>{text}</div>
        </div>
    );
};
