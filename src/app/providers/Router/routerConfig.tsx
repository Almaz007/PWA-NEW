import { lazy } from "react";

const FlexibleLogic = lazy(() => import("@/pages/flexibleLogic"));
const Matrix = lazy(() => import("@/pages/matrix"));
const ModemParametrs = lazy(() => import("@/pages/modemParametrs"));
const Oscillograms = lazy(() => import("@/pages/oscillograms"));
const Terminal = lazy(() => import("@/pages/terminal"));
const Setpoints = lazy(() => import("@/pages/setpoints"));
const WelcomePage = lazy(() => import("@/pages/welcome"));

export const pages = {
    welcome: WelcomePage,
    terminal: Terminal,
    modemParametrs: ModemParametrs,
    flexibleLogic: FlexibleLogic,
    oscillograms: Oscillograms,
    matrix: Matrix,
    ustavki: Setpoints,
};
