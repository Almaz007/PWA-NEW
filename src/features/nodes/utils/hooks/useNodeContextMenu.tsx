// features/context-menu/lib/use-context-menu.ts
import { useCallback, useMemo } from "react";
import { useHandleData } from "./useHandleData";
import CustomSelect from "@/shared/ui/customSelect/CustomSelect";
import { TNodeData, TNodeInstructionsTypes } from "@/entities/editor";

type MenuAction = {
    key: string;
    label: string;
    element: React.ReactNode;
};

type NodeActions = {
    [key in TNodeInstructionsTypes]?: MenuAction[];
};

export const useNodeContextMenu = (nodeId: string, data: TNodeData) => {
    const { changeHandlesCount, items } = useHandleData(nodeId);
    const { type } = data;

    console.log(items);
    const getCommonActions = useMemo(() => {
        const baseActions: MenuAction[] = [
            {
                key: "duplicate",
                label: "Дублировать",
                element: (
                    <button onClick={() => console.log("Duplicate")}>
                        Дублировать
                    </button>
                ),
            },
            {
                key: "delete",
                label: "Удалить",
                element: (
                    <button onClick={() => console.log("Delete")}>
                        Удалить
                    </button>
                ),
            },
        ];
        return baseActions;
    }, []);

    const getTypeSpecificActions = useMemo(() => {
        const actions: Partial<NodeActions> = {
            xor: [
                {
                    key: "changeHandles",
                    label: "Изменить входы",
                    element: (
                        <CustomSelect
                            placeholder="кол-во входов"
                            value={data.inputHandlesCount}
                            options={items}
                            onChange={changeHandlesCount}
                        />
                    ),
                },
                {
                    key: "invert",
                    label: "Инвертировать",
                    element: (
                        <button
                            onClick={() => console.log("Invert XOR to XNOR")}
                        >
                            Инвертировать
                        </button>
                    ),
                },
            ],
            and: [
                {
                    key: "addInput",
                    label: "Добавить вход",
                    element: (
                        <button onClick={() => console.log("Add AND input")}>
                            Добавить вход
                        </button>
                    ),
                },
            ],
        };
        return actions[type] || [];
    }, [type, data.inputHandlesCount, items, changeHandlesCount]);

    return {
        actions: [...getTypeSpecificActions],
    };
};
