import { AnalogInputIcon } from "./Icons/AnalogInputIcon";
import { DiscreteInputIcon } from "./Icons/DiscreteInputIcon";
import { InputViewStructure } from "./InputViewStruture/InputViewStructure";
import { TViewComponents } from "@/entities/editor/model/types/types";

export const inputViews: TViewComponents = {
    discreteInput: {
        view: InputViewStructure,
        width: 350,
        height: 50,
        text: "Дискретный вход",
        icon: <DiscreteInputIcon />,
        name: "Дискретный вход",
    },

    analogInput: {
        view: InputViewStructure,
        width: 350,
        height: 50,
        text: "Аналоговый вход",
        icon: <AnalogInputIcon />,
        name: "Аналоговый вход",
    },
};
