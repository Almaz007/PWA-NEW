import { inputViews } from "./inputs";
import { TViewComponents } from "../../model/types/types";
import { logicViews } from "./logics";
import { comparisonsViews } from "./comparisons";
import { outputViews } from "./outputs";

export const NodeViews: TViewComponents = {
    ...inputViews,
    ...logicViews,
    ...comparisonsViews,
    ...outputViews,
    // nand: "",
    // nor: "",
    // notOperation: "",
    // sumInt: "",
    // sumFloat: "",
    // multInt: "",
    // multFloat: "",
    // subInt: "",
    // subFloat: "",
    // outputInt: "",
    // outputBool: "",
    // outputFloat: "",
    // muxBool: "",
    // muxInt: "",
    // equalsInt: "",
    // equalsFloat: "",
    // lessInt: "",
    // lessFloat: "",
    // moreInt: "",
    // moreFloat: "",
    // timerInt: "",
    // сonstInt: "",
    // constBoolean: "",
    // dtrigger: "",
};
