// features/nodes/lib/apply-features.tsx

import { ReactNode } from "react";
import { ContextMenuFeature } from "../../ui/ContextMenuFeatrue/ContextMenuFeature";
// import { DynamicInputsFeature, ContextMenuFeature } from "./node-features";

const featureMap = {
    xor: [ContextMenuFeature],
};

export const applyFeatures = (
    nodeId: string,
    data: any,
    children: ReactNode
) => {
    const features = featureMap[data.type] || [];

    return features.reduce((acc, Feature) => {
        return (
            <Feature nodeId={nodeId} data={data}>
                {acc}
            </Feature>
        );
    }, children);
};
