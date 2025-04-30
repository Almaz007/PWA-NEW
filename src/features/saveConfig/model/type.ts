import { TNodeInstructionsTypes } from "@/entities/editor";

type TBaseScript = {
    inType: number;
    instructionOffset: number | undefined;
    resultOffset: number | null;
};

type TDefaultNodeScript = TBaseScript & {
    sourcesOffset: number[];
};
type TSetpointNodeScript = TBaseScript & {
    setpointOffset: number;
};

export type TScript = TDefaultNodeScript | TSetpointNodeScript;

export type TInstructionsBuffer = {
    lastLength: number;
    instructions: string[];
    offsets: number[];
    primitivesData: Partial<
        Record<
            TNodeInstructionsTypes,
            Record<number, { lengthInBytes: number; offset: number }>
        >
    >;
};
