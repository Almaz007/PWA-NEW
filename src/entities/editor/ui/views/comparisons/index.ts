import { TViewComponents } from "@/entities/editor/model/types/connection";
import { СomparisonViewStructure } from "./СomparisonViewStructure/СomparisonViewStructure";

export const comparisonsViews: TViewComponents = {
    equalsInt: {
        view: СomparisonViewStructure,
        width: 100,
        height: 100,
        text: "=",
        name: "Операция сравнения равно",
    },

    moreInt: {
        view: СomparisonViewStructure,
        width: 100,
        height: 100,
        text: ">",
        name: "Операция сравнения больше",
    },
    lessInt: {
        view: СomparisonViewStructure,
        width: 100,
        height: 100,
        text: "<",
        name: "Операция сравнения меньше",
    },
};
