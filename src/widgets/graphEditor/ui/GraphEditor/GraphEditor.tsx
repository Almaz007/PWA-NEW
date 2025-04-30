import {
    ReactFlow,
    ReactFlowProvider,
    Background,
    Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import styles from "./styles.module.css";
import { edgeTypes, nodeTypes, proOptions } from "../../config/constants";
import { ConnectionLine } from "@/features/connectionLine";
import { GraphPanel } from "../GraphPanel/GraphPanel";
import { SnackbarProvider } from "notistack";
import { useGraphEditor } from "../../hooks/useGraphEditor";

import { nodeInstructions } from "@/entities/editor";

const GraphEditorContent = () => {
    const {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        addEdge,
        onDragOver,
        onDrop,
        isValidConnection,
        onConnectEnd,
    } = useGraphEditor();

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
                isValidConnection={isValidConnection}
                onConnectEnd={onConnectEnd}
                fitView
            >
                <GraphPanel nodes={nodes} />
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export const GraphEditor = () => {
    return (
        <ReactFlowProvider>
            <SnackbarProvider maxSnack={3}>
                <GraphEditorContent />
            </SnackbarProvider>
        </ReactFlowProvider>
    );
};
