import { TNodeConfigurations } from "../model/types/types";

export const nodeConfigurations: TNodeConfigurations = {
    discreteInput: {
        dataType: "int",
        type: "discreteInput",
        inputHandlesCount: 0,
        name: "",
    },
    discreteOutput: {
        dataType: "int",
        type: "discreteOutput",
        inputHandlesCount: 1,
        name: "",
    },

    analogInput: {
        dataType: "float",
        type: "analogInput",
        inputHandlesCount: 0,
        name: "",
    },
    analogOutput: {
        dataType: "float",
        type: "analogOutput",
        inputHandlesCount: 1,
        name: "",
    },
    xor: {
        dataType: "bool",
        type: "xor",
        inputHandlesCount: 2,
        outputHandlesCount: 1,
    },
    and: {
        dataType: "bool",
        type: "and",
        inputHandlesCount: 2,
    },
    or: {
        dataType: "bool",
        type: "or",
        inputHandlesCount: 3,
    },
    nand: {
        dataType: "bool",
        type: "nand",
        inputHandlesCount: 3,
    },
    nor: {
        dataType: "bool",
        type: "nor",
        inputHandlesCount: 3,
    },
    notOperation: {
        dataType: "bool",
        type: "notOperation",
        inputHandlesCount: 1,
    },
    sumInt: {
        dataType: "int",
        type: "sumInt",
        inputHandlesCount: 2,
    },
    // sumFloat: {
    //     dataType: "float",
    // type:,
    // inputHandlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    multInt: {
        dataType: "int",
        type: "multInt",
        inputHandlesCount: 2,
    },
    // multFloat: {
    //     dataType: "float",
    // type:,
    // inputHandlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    subInt: {
        dataType: "int",
        type: "subInt",
        inputHandlesCount: 2,
    },
    // subFloat: {
    //     dataType: "float",
    // type:,
    // inputHandlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    // outputInt: {
    //     name: "",
    //     width: 0,
    //     height: 0,
    //     dataType: "int",
    // type:,
    // inputHandlesCount: 0,
    // },
    // outputBool: {
    //     name: "",
    //     width: 0,
    //     height: 0,
    //     dataType: "bool",
    // type:,
    // inputHandlesCount: 0,
    // },
    // outputFloat: {
    //     name: "",
    //     width: 0,
    //     height: 0,
    //     dataType: "float",
    // type:,
    // inputHandlesCount: 0,
    // },
    // muxBool: {
    //     dataType: "bool",
    // type:,
    // inputHandlesCount: 3,
    //     width: 0,
    //     height: 0,
    // },
    // muxInt: {
    //     dataType: "int",
    // type:,
    // inputHandlesCount: 3,
    //     width: 0,
    //     height: 0,
    // },
    equalsInt: {
        dataType: "int",
        type: "equalsInt",
        inputHandlesCount: 2,
    },
    // equalsFloat: {
    //     dataType: "float",
    // type:,
    // inputHandlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    lessInt: {
        dataType: "int",
        type: "lessInt",
        inputHandlesCount: 2,
    },
    // lessFloat: {
    //     dataType: "float",
    // type:,
    // inputHandlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    moreInt: {
        dataType: "int",
        type: "moreInt",
        inputHandlesCount: 2,
    },
    // moreFloat: {
    //     dataType: "float",
    // type:,
    // inputHandlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    timerInt: {
        dataType: "int",
        type: "timerInt",
        name: "t",
        inputHandlesCount: 0,
    },
    сonstInt: {
        dataType: "int",
        type: "сonstInt",
        name: "c",

        inputHandlesCount: 0,
    },
    constBoolean: {
        dataType: "bool",
        type: "constBoolean",
        name: "c",

        inputHandlesCount: 0,
    },
    dtrigger: {
        dataType: "bool",
        type: "dtrigger",

        inputHandlesCount: 1,
    },
};
