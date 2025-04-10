import { DropDownList, PopupMenu } from "@/shared/ui";
import { NodesList } from "../NodesList/NodesList";
import {
    logicViews,
    inputViews,
    comparisonsViews,
    outputViews,
} from "@/entities/editor";

export const LibNodes = () => {
    return (
        <div>
            <PopupMenu text={"Библиотека"}>
                <DropDownList name="Входы и выходы">
                    <NodesList views={{ ...inputViews, ...outputViews }} />
                </DropDownList>
                <DropDownList name="Логические элементы">
                    <NodesList views={logicViews} />
                </DropDownList>
                <DropDownList name="Алгебраические операции">
                    {/* <NodesList views={logicViews} /> */}
                    <div></div>
                </DropDownList>
                <DropDownList name="Операции сравнения">
                    <NodesList views={comparisonsViews} />
                </DropDownList>
            </PopupMenu>
        </div>
    );
};
