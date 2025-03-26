import React, { useState } from "react";
import { CustomSelectProps } from "@/shared/types";
import styles from "./styles.module.css";
import cn from "classnames";

const CustomSelect: React.FC<CustomSelectProps> = ({
    options,
    value,
    onChange,
    label,
    placeholder,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleOptionClick = (
        event: React.MouseEvent<HTMLDivElement>,
        option: string
    ) => {
        event.stopPropagation();
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className={styles["custom-select"]}>
            {label && <label className={styles["select-label"]}>{label}</label>}
            <div className={styles["select-wrapper"]} onClick={toggleDropdown}>
                <div className={styles["selected-value"]}>
                    {value || placeholder}
                </div>
                <div
                    className={cn(styles["dropdown"], {
                        [styles["open"]]: isOpen,
                    })}
                >
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className={cn(styles["option"], {
                                [styles["selected"]]: option.value === value,
                            })}
                            onClick={(event) =>
                                handleOptionClick(event, option.value)
                            }
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSelect;
