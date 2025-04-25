import { TColorsType } from "../model/types/connection";
import { TMarkerTypes } from "../model/types/connection";
export const colorsByTypes: TColorsType = {
    bool: {
        clr: "#00ff00",
        selectedClr: "#08d508",
    },
    int: {
        clr: "#368ff4",
        selectedClr: "#2b79d2",
    },
    float: {
        clr: "#ffe417",
        selectedClr: "#ead219",
    },
};
export const markerTypes: TMarkerTypes = {
    bool: undefined,
    int: "circle",
    float: "arrow-closed",
};
