import { EditorState } from "./types";

export const editorSelector = (state: EditorState) => ({
    nodes: state.nodes,
    edges: state.edges,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    addEdge: state.addEdge,
});
