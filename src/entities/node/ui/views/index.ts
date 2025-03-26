import { TNodeComponents } from "@/entities/node/model/types";
import { AnalogInputView } from "./inputs/AnalogInputView/AnalogInputView";
import { DiscreteInputView } from "./inputs/DiscreteInputView/DiscreteInputView";

export const NodeViews: TNodeComponents = {
    discreteInput: DiscreteInputView,
    discreteOutput: DiscreteInputView,

    // inputFloat: "",
    // inputInt: "",
    // xor: "",
    // and: "",
    // or: "",
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
