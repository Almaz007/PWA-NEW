import { TNodeData } from "@/entities/editor";
import { combineBytesToFloat, combineBytesToInt } from "./convertBytes";
import { useSetpoints } from "@/entities/setpoint";

export const getValueByOfffset = (data: TNodeData) => {
    const { setpointsValues } = useSetpoints.getState();

    const { dataType, setpointOffset: offset } = data;

    if (offset === null || offset === undefined) return 0;

    let value = 0;
    if (dataType === "int") {
        value = combineBytesToInt([
            ...setpointsValues.slice(offset, offset + 4),
        ]);
    }
    if (dataType === "float") {
        value = combineBytesToFloat([
            ...setpointsValues.slice(offset, offset + 4),
        ]);
    }
    if (dataType === "bool") {
        value = setpointsValues[offset];
    }

    return value;
};
