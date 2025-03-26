interface props {
  value: string;
  placeholder?: string;
  onChange: () => void;
}
import styles from "./styles.module.css";

export const Input = ({ value, placeholder, onChange }: props) => {
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
