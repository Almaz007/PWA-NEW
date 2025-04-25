// features/context-menu/lib/action-config.ts
import { TNodeInstructionsTypes } from "@/entities/editor";
import { TActionName } from "./action-factories";

export const actionConfig: Partial<
    Record<TNodeInstructionsTypes, TActionName[]>
> = {
    analogInput: ["updateSetpointValue"],
    constInt: ["updateSetpointValue"],
    xor: ["changeHandles"],
    and: ["changeHandles", "invert"],
    or: ["changeHandles", "invert"],
    nand: ["changeHandles", "invert"],
    nor: ["changeHandles", "invert"],
    multInt: ["changeHandles"],
    sumInt: ["changeHandles"],
    subInt: ["changeHandles"],
};
