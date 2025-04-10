import { TBuisnessComponents } from "@/entities/editor";

import { LogicNode } from "./logics/LogicNode";
import { ComparisonNode } from "./comparisons/ComparisonNode";
import { DiscreteInput } from "./inputs/DiscreteInput/DiscreteInput";
import { InputNode } from "./inputs/InputNode";
import { DiscreteOutput } from "./outputs/DiscreteOutput/DiscreteOutput";
import { OutputNode } from "./outputs/OutputNode";
import { BasedNodeLogic } from "../core/BasedNodeLogic/BasedNodeLogic";

export const NodeBuisnessLogics: TBuisnessComponents = {
    // discreteInput: DiscreteInput,
    // discreteOutput: DiscreteOutput,
    // analogInput: InputNode,
    // analogOutput: OutputNode,
    // and: LogicNode,
    // or: LogicNode,
    // xor: LogicNode,
    // equalsInt: ComparisonNode,
    // moreInt: ComparisonNode,
    // lessInt: ComparisonNode,
    or: BasedNodeLogic,
    xor: BasedNodeLogic,
};
