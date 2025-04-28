import CustomSelect from "@/shared/ui/customSelect/CustomSelect";
import { Button, Input } from "@/shared/ui";
import { ActionFactory } from "../model/types";

export type TActionName = "changeHandles" | "invert" | "updateSetpointValue";

export const actionFactories: Record<TActionName, ActionFactory> = {
    changeHandles: {
        key: "changeHandles",
        label: "Change Handles",
        dependencies: ["useChangeHandles"],
        createElement: ({ nodeId, dependencies, data }) => {
            const info = dependencies.useChangeHandles?.(nodeId);
            if (!info) return null;
            return (
                <CustomSelect
                    placeholder="кол-во входов"
                    value={data.inputHandlesCount}
                    options={info.items}
                    onChange={info.changeHandles}
                />
            );
        },
    },
    invert: {
        key: "invert",
        label: "Инвертировать",
        dependencies: ["useInverseNode"],
        createElement: ({ nodeId, data, dependencies }) => {
            const handleClick = dependencies.useInverseNode?.(
                nodeId,
                data.type
            );
            return (
                <Button
                    onClick={handleClick}
                    text="Инвертировать"
                    type="button"
                />
            );
        },
    },
    updateSetpointValue: {
        key: "updateSetpointValue",
        label: "Изменить значение",
        dependencies: ["updateSetpointValue"],
        createElement: ({ data, dependencies }) => {
            const info = dependencies.updateSetpointValue?.(data);

            if (!info) return null;
            const { handleChange, inputValue } = info;

            return (
                <div className="flex flex-col gap-2">
                    <Input
                        type="text"
                        inputMode="decimal"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Введите значение"
                    />
                </div>
            );
        },
    },
} satisfies Record<string, ActionFactory>;
