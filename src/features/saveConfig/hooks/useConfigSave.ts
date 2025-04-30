import { nodeInstructions, useEditorStore } from "@/entities/editor";
import { TScript } from "../model/type";
import { enqueueSnackbar } from "notistack";
import { Node } from "@xyflow/react";
import { TNodeData } from "@/entities/editor";
import { getDuplicatedIncomers } from "../helpers/getDublicatedIncomers";
import { TInstructionsBuffer } from "../model/type";
import { generateNewBufferData } from "../helpers/generateNewBufferData";
import { useSetpoints } from "@/entities/setpoint";

export const useSaveConfig = () => {
    const [nodes, edges] = useEditorStore((state) => [
        state.nodes,
        state.edges,
    ]);

    const { setpointsValues } = useSetpoints((state) => ({
        setpointsValues: state.setpointsValues,
    }));

    const saveConfig = async () => {
        const scripts: TScript[] = [];
        const visited = new Set<string>();

        const instructionsNames = Object.keys(nodeInstructions) as Array<
            keyof typeof nodeInstructions
        >;

        const instructionsBuffer: TInstructionsBuffer = {
            lastLength: 0,
            instructions: [],
            offsets: [],
            primitivesData: {},
        };

        const outputNodes = nodes.filter((node) => {
            return node?.data?.type.toLocaleLowerCase()?.includes("output");
        });

        if (!outputNodes.length) {
            enqueueSnackbar("нету выходных элементов", { variant: "error" });
        }

        const generateScript = (node: Node<TNodeData>) => {
            const type = node.data.type;
            const inputHandlesCount = node.data.inputHandlesCount;

            if (visited.has(node.id)) return false;
            visited.add(node.id);
            console.log("nor visited :" + node.id);

            // проверка на то, есть ли тип элемента в списках примитивов, и не добавлена ли она уже до этого в буффер
            //если все хорошо то в буффер добавляется инструкция конкретного примитива, и ифформация о смещении для нее
            if (
                instructionsNames.includes(type) &&
                !instructionsBuffer.primitivesData[type]?.[inputHandlesCount]
            ) {
                const nodeInstruction = nodeInstructions[type];

                // Приводим числовой ключ к строке и указываем тип

                // Проверяем существование инструкции
                if (nodeInstruction && nodeInstruction[inputHandlesCount]) {
                    instructionsBuffer.instructions.push(
                        ...nodeInstruction[inputHandlesCount].instruction
                    );

                    const { newOffset, newPrimitiveData, lastLength } =
                        generateNewBufferData(
                            nodeInstructions[type][inputHandlesCount],
                            instructionsBuffer.offsets,
                            instructionsBuffer.lastLength
                        );

                    instructionsBuffer.primitivesData[type] = {
                        ...instructionsBuffer.primitivesData[type],
                        [inputHandlesCount]: newPrimitiveData,
                    };

                    instructionsBuffer.offsets.push(newOffset);
                    instructionsBuffer.lastLength = lastLength;
                }
            }

            const incomers = getDuplicatedIncomers(node, nodes, edges);
            console.log("data: ", type, incomers);

            let obj1:
                | {
                      setpointOffset: number | null;
                  }
                | { sourcesOffset: number[] };

            if ("setpointOffset" in node.data) {
                obj1 = { setpointOffset: node.data.setpointOffset };
            } else {
                obj1 = { sourcesOffset: [0, 0, 0, 0, 0, 0, 0, 0] };
            }

            const scriptItem: TScript = {
                inType: nodeInstructions[type]?.[inputHandlesCount].in_type,
                instructionOffset:
                    instructionsBuffer.primitivesData[type]?.[inputHandlesCount]
                        .offset,
                resultOffset: node?.data?.resultOffset,
                ...obj1,
            };

            if ("sourcesOffset" in scriptItem) {
                incomers.forEach((incomer, index) => {
                    generateScript(incomer);
                    scriptItem["sourcesOffset"][index] =
                        incomer.data.resultOffset;
                });
            }
            console.log(scriptItem);
            scripts.push(scriptItem);
        };
        for (const outputNode of outputNodes) {
            generateScript(outputNode);
        }

        const resultScripts = scripts.map((script) => {
            const source = script["sourcesOffset"] ?? script["setpointOffset"];
            return [
                script["inType"],
                script["instructionOffset"],
                script["resultOffset"],
                ...source,
            ];
        });

        // console.log(resultScripts);
        // console.log(instructionsBuffer);

        const newObj = {
            scripts: [...resultScripts],
            functions: [...instructionsBuffer.instructions],
            ustavki: [...setpointsValues],
        };
        // const result = JSON.stringify(newObj);
        console.log(newObj);
        // const formattedScripts = formatArray(resultScripts, instructionsBuffer);
        // const formattedInstructionsBuffer = formatBuffer(instructionsBuffer);
        // const formattedUstavki = formatUstavki();
        // const formattedIndications = formatIndications();

        // saveFunc(
        //     formattedScripts,
        //     formattedInstructionsBuffer,
        //     formattedUstavki,
        //     formattedIndications
        // );
        // saveFunc(result);
    };
    return { saveConfig };
};
