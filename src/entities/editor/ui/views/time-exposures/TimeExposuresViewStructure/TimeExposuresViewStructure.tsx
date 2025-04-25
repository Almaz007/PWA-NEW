import styles from "./styles.module.css";
import { TViewProps } from "../../../../model/types/connection";

export const TimeExposuresViewStructure = ({ width, height }: TViewProps) => {
    return (
        <div
            className={styles["timer"]}
            style={{ width: width, height: height }}
        >
            <div>T</div>
            <div>DT</div>
            <div className={styles["sides-lines"]}>
                <div className={styles["line"]}></div>
            </div>
        </div>
    );
};
