import { applyNodeChanges, applyEdgeChanges, MarkerType } from "@xyflow/react";
import { createWithEqualityFn } from "zustand/traditional";
import { EditorState } from "../types/types";
import { v4 as uuidv4 } from "uuid";
export const useEditorStore = createWithEqualityFn<EditorState>((set, get) => ({
    nodes: [
        {
            id: "1",
            type: "node",
            position: { x: 1, y: 1 },
            data: {
                dataType: "bool",
                type: "discreteInput",
                handlesCount: 0,
                name: "test",
            },
        },
        {
            id: "2",
            type: "node",
            position: { x: 400, y: 1 },
            data: {
                dataType: "bool",
                type: "discreteOutput",
                handlesCount: 0,
                name: "test",
            },
        },
        {
            id: "3",
            type: "node",
            position: { x: 1, y: 300 },
            data: {
                dataType: "float",
                type: "analogInput",
                handlesCount: 0,
                name: "test",
            },
        },
        {
            id: "4",
            type: "node",
            position: { x: 400, y: 300 },
            data: {
                dataType: "float",
                type: "analogOutput",
                handlesCount: 1,
                name: "test",
            },
        },
        {
            id: "5",
            type: "node",
            position: { x: 1, y: 500 },
            data: {
                dataType: "bool",
                type: "and",
                handlesCount: 2,
                name: "test",
            },
        },
        {
            id: "6",
            type: "node",
            position: { x: 400, y: 500 },
            data: {
                dataType: "bool",
                type: "or",
                handlesCount: 2,
                name: "test",
            },
        },
        {
            id: "7",
            type: "node",
            position: { x: 400, y: 700 },
            data: {
                dataType: "bool",
                type: "xor",
                handlesCount: 2,
                name: "test",
            },
        },
        {
            id: "8",
            type: "node",
            position: { x: 400, y: 900 },
            data: {
                dataType: "int",
                type: "equalsInt",
                handlesCount: 2,
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
