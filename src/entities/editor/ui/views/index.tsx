import { inputViews } from "./inputs";
import { TViewConfig } from "../../model/types/view";
import { logicViews } from "./logics";
import { comparisonsViews } from "./comparisons";
import { outputViews } from "./outputs";
import { algebraicViews } from "./algebraic";
import { timeExposuresViews } from "./time-exposures";

export const NodeViews: TViewConfig = {
    ...inputViews,
    ...logicViews,
    ...comparisonsViews,
    ...outputViews,
    ...algebraicViews,
    ...timeExposuresViews,
};
