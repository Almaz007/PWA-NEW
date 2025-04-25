import { TNodeData } from "@/entities/editor";
import { useActionFactory } from "../../model/hooks/useActionFactory";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import { useState } from "react";

export const ContextMenuFeature = ({
    nodeId,
    data,
    children,
}: {
    nodeId: string;
    data: TNodeData;
    children: React.ReactNode;
}) => {
    const [visible, setVisible] = useState<boolean>(false);
    const { actions } = useActionFactory(nodeId, data);

    console.log(actions);
    return (
        <div
            style={{
                position: "relative",
            }}
            onDoubleClick={() => setVisible((prev) => !prev)}
        >
            {children}
            <ContextMenu
                actions={actions}
                visible={visible}
                setVisible={setVisible}
            />
        </div>
    );
};
