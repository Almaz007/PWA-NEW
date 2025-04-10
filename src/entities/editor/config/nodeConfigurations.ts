import { TNodeConfigurations } from "../model/types/types";

export const nodeConfigurations: TNodeConfigurations = {
    discreteInput: {
        dataType: "int",
        type: "discreteInput",
        handlesCount: 0,
        name: "",
    },
    discreteOutput: {
        dataType: "int",
        type: "discreteOutput",
        handlesCount: 1,
        name: "",
    },

    analogInput: {
        dataType: "float",
        type: "analogInput",
        handlesCount: 0,
        name: "",
    },
    analogOutput: {
        dataType: "float",
        type: "analogOutput",
        handlesCount: 1,
        name: "",
    },
    xor: {
        dataType: "bool",
        type: "xor",
        handlesCount: 2,
    },
    and: {
        dataType: "bool",
        type: "and",
        handlesCount: 2,
    },
    or: {
        dataType: "bool",
        type: "or",
        handlesCount: 3,
    },
    nand: {
        dataType: "bool",
        type: "nand",
        handlesCount: 3,
    },
    nor: {
        dataType: "bool",
        type: "nor",
        handlesCount: 3,
    },
    notOperation: {
        dataType: "bool",
        type: "notOperation",
        handlesCount: 1,
    },
    sumInt: {
        dataType: "int",
        type: "sumInt",
        handlesCount: 2,
    },
    // sumFloat: {
    //     dataType: "float",
    // type:,
    // handlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    multInt: {
        dataType: "int",
        type: "multInt",
        handlesCount: 2,
    },
    // multFloat: {
    //     dataType: "float",
    // type:,
    // handlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    subInt: {
        dataType: "int",
        type: "subInt",
        handlesCount: 2,
    },
    // subFloat: {
    //     dataType: "float",
    // type:,
    // handlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    // outputInt: {
    //     name: "",
    //     width: 0,
    //     height: 0,
    //     dataType: "int",
    // type:,
    // handlesCount: 0,
    // },
    // outputBool: {
    //     name: "",
    //     width: 0,
    //     height: 0,
    //     dataType: "bool",
    // type:,
    // handlesCount: 0,
    // },
    // outputFloat: {
    //     name: "",
    //     width: 0,
    //     height: 0,
    //     dataType: "float",
    // type:,
    // handlesCount: 0,
    // },
    // muxBool: {
    //     dataType: "bool",
    // type:,
    // handlesCount: 3,
    //     width: 0,
    //     height: 0,
    // },
    // muxInt: {
    //     dataType: "int",
    // type:,
    // handlesCount: 3,
    //     width: 0,
    //     height: 0,
    // },
    equalsInt: {
        dataType: "int",
        type: "equalsInt",
        handlesCount: 2,
    },
    // equalsFloat: {
    //     dataType: "float",
    // type:,
    // handlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    lessInt: {
        dataType: "int",
        type: "lessInt",
        handlesCount: 2,
    },
    // lessFloat: {
    //     dataType: "float",
    // type:,
    // handlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    moreInt: {
        dataType: "int",
        type: "moreInt",
        handlesCount: 2,
    },
    // moreFloat: {
    //     dataType: "float",
    // type:,
    // handlesCount: 2,
    //     width: 0,
    //     height: 0,
    // },
    timerInt: {
        dataType: "int",
        type: "timerInt",
        name: "t",
        handlesCount: 0,
    },
    сonstInt: {
        dataType: "int",
        type: "сonstInt",
        name: "c",

        handlesCount: 0,
    },
    constBoolean: {
        dataType: "bool",
        type: "constBoolean",
        name: "c",

        handlesCount: 0,
    },
    dtrigger: {
        dataType: "bool",
        type: "dtrigger",

        handlesCount: 1,
    },
};
