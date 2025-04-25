import { actionConfig } from "../../config/action-config";
import { actionFactories } from "../../config/action-factories";
import { useChangeHandles } from "./useChangeHandles";
import { useInverseNode } from "./useInverseNode";
import { TNodeData } from "@/entities/editor";
import { ActionDependencies } from "../types";
import { updateSetpointValue } from "./updateSetpointValue";
import { TMenuAction } from "../types";

export const useActionFactory = (nodeId: string, data: TNodeData) => {
    const { type } = data;

    const dependencies: ActionDependencies = {
        useChangeHandles,
        useInverseNode,
        updateSetpointValue,
    };

    const actions = actionConfig[type]?.map((actionKey) => {
        const factory = actionFactories[actionKey];
        if (!factory) return null;

        const requiredDeps = factory.dependencies.reduce((acc, depKey) => {
            if (depKey in dependencies) {
                acc[depKey] = dependencies[depKey as keyof typeof dependencies];
            }
            return acc;
        }, {} as ActionDependencies);

        return {
            key: factory.key,
            label: factory.label,
            element: factory.createElement({
                nodeId,
                data,
                dependencies: requiredDeps,
            }),
        };
    }) as TMenuAction[];

    return { actions };
};
