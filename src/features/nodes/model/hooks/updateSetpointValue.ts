import {
    combineBytesToFloat,
    combineBytesToInt,
    splitFloatToBytes,
    splitIntToBytes,
} from "../../lib/utils/convertBytes";
import { TNodeData } from "@/entities/editor";
import { TDataType } from "@/shared/types";
import { ChangeEvent, useState } from "react";

import { useSetpoints } from "@/entities/setpoint";
import { getValueByOfffset } from "../../lib/utils/geeValueByOffset";

export const updateSetpointValue = (nodeId: string, data: TNodeData) => {
    const [inputValue, setInputValue] = useState<number | string>(() =>
        getValueByOfffset(data)
    );
    const [setpointsValues, setSetpoints] = useSetpoints((state) => [
        state.setpointsValues,
        state.setSetpoints,
    ]);
    const { setpointOffset: offset } = data;
    if (offset === null || offset === undefined) return null;

    const changeValueInt = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        // Разрешаем только числа
        if (/^-?\d*[]?\d*$/.test(value)) {
            const newSetpoints = [...setpointsValues];
            newSetpoints.splice(offset, 4, ...splitIntToBytes(+value));

            setInputValue(value);
            setSetpoints([...newSetpoints]);
        }
    };

    const changeValueFloat = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;

        // Разрешаем только числа и десятичные разделители
        if (/^-?\d*[,.]?\d*$/.test(value)) {
            if (value.includes(",")) {
                console.log(value);
                value = value.replace(",", ".");
            }

            const newSetpoints = [...setpointsValues];
            newSetpoints.splice(offset, 4, ...splitFloatToBytes(+value));

            setInputValue(value);
            setSetpoints([...newSetpoints]);
        }
    };
    const changeValueBool = (event: ChangeEvent<HTMLInputElement>) => {};

    const func: Record<
        TDataType,
        (event: ChangeEvent<HTMLInputElement>) => void
    > = {
        int: changeValueInt,
        float: changeValueFloat,
        bool: changeValueBool,
    };

    return { handleChange: func[data.dataType], inputValue };
};
