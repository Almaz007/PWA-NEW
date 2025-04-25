import { ChangeEvent, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;
export const Input = ({ value, placeholder, onChange }: InputProps) => {
    return (
        <input
            className={styles["input"]}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};
