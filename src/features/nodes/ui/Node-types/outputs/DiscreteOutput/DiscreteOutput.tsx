import { NodeToolbar } from "@xyflow/react";
import { BasedNodeLogic } from "../../../core/BasedNodeLogic/BasedNodeLogic";
import { IBuisnessComponentProps } from "@/entities/editor";

export const DiscreteOutput = ({ data }: IBuisnessComponentProps) => {
    const { type, dataType } = data;
    return (
        <>
            <BasedNodeLogic
                type={type}
                dataType={dataType}
                inputHandlesCount={1}
                outputHandlesCount={0}
            />
        </>
    );
};
