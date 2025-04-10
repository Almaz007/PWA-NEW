import { NodeToolbar } from "@xyflow/react";
import { BasedNodeLogic } from "../../core/BasedNodeLogic/BasedNodeLogic";
import { IBuisnessComponentProps } from "@/entities/editor";

export const InputNode = ({ data }: IBuisnessComponentProps) => {
    const { type, dataType, handlesCount } = data;
    return (
        <>
            <NodeToolbar>
                <input type="text" defaultValue={"test"} />
            </NodeToolbar>
            <BasedNodeLogic
                type={type}
                dataType={dataType}
                inputHandlesCount={handlesCount}
                outputHandlesCount={1}
            />
        </>
    );
};
