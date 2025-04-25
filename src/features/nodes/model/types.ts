import { TNodeData } from "@/entities/editor";
import { useChangeHandles } from "./hooks/useChangeHandles";
import { useInverseNode } from "./hooks/useInverseNode";
import { updateSetpointValue } from "./hooks/updateSetpointValue";

export type TMenuAction = {
    key: string;
    label: string;
    element: React.ReactNode;
};

export type ActionDependencies = {
    useChangeHandles?: typeof useChangeHandles;
    useInverseNode?: typeof useInverseNode;
    updateSetpointValue?: typeof updateSetpointValue;
};

export type ActionFactory = {
    key: string;
    label: string;
    dependencies: (keyof ActionDependencies)[];
    createElement: (params: {
        nodeId: string;
        data: TNodeData;
        dependencies: ActionDependencies;
    }) => React.ReactNode;
};
