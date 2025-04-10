import { AnalogOutputIcon } from "./icons/AnalogOutputIcon";
import { DiscreteOutputIcon } from "./icons/DiscreteOutputIcon";
import { TViewComponents } from "@/entities/editor/model/types/types";
import { OutputViewStructure } from "./OutputViewStruture/OutputViewStructure";

export const outputViews: TViewComponents = {
    discreteOutput: {
        view: OutputViewStructure,
        width: 350,
        height: 50,
        text: "Дискретный выход",
        icon: <DiscreteOutputIcon />,
        name: "Дискретный выход",
    },

    analogOutput: {
        view: OutputViewStructure,
        width: 350,
        height: 50,
        text: "Аналоговый выход",
        icon: <AnalogOutputIcon />,
        name: "Аналоговый выход",
    },
};
