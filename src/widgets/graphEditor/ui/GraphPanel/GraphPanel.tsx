import { Button } from "@/shared/ui";
import { Panel, Node } from "@xyflow/react";
import { LibNodes } from "@/features/libNodes";
import { useSaveConfig } from "@/features/saveConfig";
import { useCopyPaste } from "@/features/nodes";
import { TNodeData } from "@/entities/editor";

export const GraphPanel = ({ nodes }: { nodes: Node<TNodeData>[] }) => {
    const { saveConfig } = useSaveConfig();
    const { cut, copy, paste, bufferedNodes } = useCopyPaste();

    const canCopy = nodes.some(({ selected }) => selected);
    const canPaste = bufferedNodes.length > 0;
    return (
        <>
            <Panel position="top-right">
                <LibNodes />
            </Panel>
            <Panel
                position="top-center"
                style={{ display: "flex", gap: "10px" }}
            >
                <Button
                    text="cut"
                    type="button"
                    onClick={() => cut()}
                    disabled={!canCopy}
                />
                <Button
                    text="copy"
                    type="button"
                    onClick={() => copy()}
                    disabled={!canCopy}
                />
                <Button
                    text="paste"
                    type="button"
                    onClick={() => paste()}
                    disabled={!canPaste}
                />
                <Button
                    text="Отправить"
                    type="button"
                    onClick={() => saveConfig()}
                />
            </Panel>
        </>
    );
};
