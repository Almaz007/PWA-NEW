import { BasedNodeLogic } from "../../core/BasedNodeLogic/BasedNodeLogic";
import { IBuisnessComponentProps } from "@/entities/editor";

export const LogicNode = ({ data }: IBuisnessComponentProps) => {
    const { type, dataType, handlesCount } = data;
    return (
        <BasedNodeLogic
            type={type}
            dataType={dataType}
            inputHandlesCount={handlesCount}
            outputHandlesCount={1}
        />
    );
};
