import { TDataType } from "@/shared/types";

export interface IOffsetData {
    offsetsByTypes: Record<TDataType, number[]>;
    setOffsets: (offsets: number[], type: TDataType) => void;
}
