import {
    ReactFlow,
    ReactFlowProvider,
    Background,
    Controls,
    Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { shallow } from "zustand/shallow";

import { editorSelector, useEditorStore } from "@/entities/editor";
import styles from "./styles.module.css";
import { edgeTypes, nodeTypes, proOptions } from "../../config/constants";
import { ConnectionLine } from "@/features/connectionLine";
import { useDnd } from "@/features/dnd";
import { LibNodes } from "@/features/libNodes";
// import { ElementsPanel } from "@/features/nodes";

const GraphEditorContent = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, addEdge } =
        useEditorStore(editorSelector, shallow);
    console.log(nodes);
    const { onDragOver, onDrop } = useDnd();

    return (
        <div className={styles["graph-editor"]}>
            <ReactFlow
                proOptions={proOptions}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={addEdge}
                onDragOver={onDragOver}
                onDrop={onDrop}
                connectionLineComponent={ConnectionLine}
                fitView
            >
                <Panel position="top-center">
                    <LibNodes />
                </Panel>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export const GraphEditor = () => {
    return (
        <ReactFlowProvider>
            <GraphEditorContent />
        </ReactFlowProvider>
    );
};
