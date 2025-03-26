export const typeColors = {
    bool: {
        clr: "#00ff00",
        selectedClr: "#08d508",
    },
    int: {
        clr: "#368ff4",
        selectedClr: "#08d508",
    },
    float: {
        clr: "#cc0c0c",
        selectedClr: "#08d508",
    },
};
export const markerTypes = {
    bool: undefined, // без маркера
    int: "circle", // кружок
    float: "arrow-closed", // стрелка
} as const;
