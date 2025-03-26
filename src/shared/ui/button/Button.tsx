import React from "react";
import styles from "./styles.module.css";

interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  type: "button" | "submit" | "reset";
}

export const Button = ({ text, type = "button", ...props }: Props) => {
  return (
    <button type={type} className={styles["btn"]} {...props}>
      {text}
    </button>
  );
};
