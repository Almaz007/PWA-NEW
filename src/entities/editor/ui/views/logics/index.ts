import { TViewComponents } from "@/entities/editor/model/types/types";
import { LogicViewStructure } from "./LogicViewStructure/LogicViewStructure";

export const logicViews: TViewComponents = {
    and: {
        view: LogicViewStructure,
        width: 100,
        height: 100,
        text: "&",
        name: "Логическая и",
    },

    xor: {
        view: LogicViewStructure,
        width: 100,
        height: 100,
        text: "=1",
        name: "Исключающее или",
    },

    or: {
        view: LogicViewStructure,
        width: 100,
        height: 100,
        text: "1",
        name: "Логическая или",
    },
};
