// features/context-menu/ui/ContextMenuFeature.tsx
import { TNodeData } from "@/entities/editor";
import { useNodeContextMenu } from "../../utils/hooks/useNodeContextMenu";
import { ContextMenu } from "../ContextMenu/ContextMenu";

export const ContextMenuFeature = ({
    nodeId,
    data,
    children,
}: {
    nodeId: string;
    data: TNodeData;
    children: React.ReactNode;
}) => {
    const { actions } = useNodeContextMenu(nodeId, data);

    return (
        <div
            style={{
                position: "relative",
            }}
        >
            {children}
            <ContextMenu actions={actions} />
        </div>
    );
};
