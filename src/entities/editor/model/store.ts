import { applyNodeChanges, applyEdgeChanges, MarkerType } from "@xyflow/react";
import { createWithEqualityFn } from "zustand/traditional";
import { EditorState } from "./types";
import { v4 as uuidv4 } from "uuid";

export const useEditorStore = createWithEqualityFn<EditorState>((set, get) => ({
    nodes: [
        {
            id: "1",
            type: "shape",
            position: { x: 1, y: 1 },
            width: 350,
            height: 50,
            data: {
                dataType: "float",
                type: "discreteInput",
                handlesCount: 0,
                name: "test",
            },
        },
        {
            id: "2",
            type: "shape",
            position: { x: 1, y: 1 },
            width: 350,
            height: 50,
            data: {
                dataType: "float",
                type: "discreteOutput",
                handlesCount: 0,
                name: "test",
            },
        },
    ],
    edges: [],
    onNodesChange(changes) {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },

    onEdgesChange(changes) {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },

    addEdge(data) {
        console.log(data);
        const id = uuidv4();
        const edge = {
            id,
            ...data,
            type: "custom-edge",
            animated: false,
        };
        set({ edges: [edge, ...get().edges] });
    },

    addNode(newNode) {
        const { nodes } = get();
        const sortedNodes = [...nodes, newNode];
        set({ nodes: [...sortedNodes] });
    },
}));
