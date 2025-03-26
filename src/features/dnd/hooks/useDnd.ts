import { useEditorStore } from "@/entities/editor";
import { useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { shallow } from "zustand/shallow";
import { DragEvent } from "react";
import { generateNode } from "../utils/utils";
import { TNodeInstructionsTypes } from "@/entities/node";

export const useDnd = () => {
    const addNode = useEditorStore((state) => state.addNode, shallow);
    const { screenToFlowPosition } = useReactFlow();

    const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
    }, []);

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const type = event.dataTransfer.getData("application/reactflow");

        const position = screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
        });

        const newNode = generateNode(type as TNodeInstructionsTypes, position);
        addNode(newNode);
    };

    return { onDragOver, onDrop };
};
