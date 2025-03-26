import {
    ReactFlow,
    ReactFlowProvider,
    Background,
    Controls,
    ConnectionLineType,
    Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { shallow } from "zustand/shallow";

import {
    ConnectionLine,
    editorSelector,
    useEditorStore,
} from "@/entities/editor";
import styles from "./styles.module.css";
import {
    defaultEdgeOptions,
    edgeTypes,
    nodeTypes,
    proOptions,
} from "../../constants/constants";
import { useDnd } from "@/features/dnd";

const GraphEditorContent = () => {
    const { nodes, edges, onNodesChange, onEdgesChange, addEdge } =
        useEditorStore(editorSelector, shallow);
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
                // defaultEdgeOptions={defaultEdgeOptions}
                connectionLineType={ConnectionLineType.SmoothStep}
                onDragOver={onDragOver}
                onDrop={onDrop}
                connectionLineComponent={ConnectionLine}
                fitView
            >
                <Panel>
                    <div></div>
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
