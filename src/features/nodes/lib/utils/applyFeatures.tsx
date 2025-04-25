import { ReactNode, ComponentType } from "react";
import { TNodeInstructionsTypes } from "@/entities/editor";
import { ContextMenuFeature } from "../../ui/ContextMenuFeatrue/ContextMenuFeature";

// 1. Определяем тип для Feature компонента
type NodeFeatureComponent = ComponentType<{
    nodeId: string;
    data: any;
    children: ReactNode;
}>;

// 2. Создаем тип для featureMap
type FeatureMap = {
    [key in TNodeInstructionsTypes]?: NodeFeatureComponent[];
};

// 3. Конкретная реализация featureMap с типизацией
const featureMap: FeatureMap = {
    analogInput: [ContextMenuFeature],
    constInt: [ContextMenuFeature],
    xor: [ContextMenuFeature],
    and: [ContextMenuFeature],
    or: [ContextMenuFeature],
    nand: [ContextMenuFeature],
    nor: [ContextMenuFeature],
    multInt: [ContextMenuFeature],
    sumInt: [ContextMenuFeature],
    subInt: [ContextMenuFeature],

    // ... другие типы нод
};

// 4. Типизируем параметры applyFeatures
export const applyFeatures = (
    nodeId: string,
    data: { type: TNodeInstructionsTypes },
    children: ReactNode
) => {
    const features = featureMap[data.type] || [];

    return features.reduce((acc, Feature, index) => {
        return (
            <Feature nodeId={nodeId} data={data} key={`feature-${index}`}>
                {acc}
            </Feature>
        );
    }, children);
};
