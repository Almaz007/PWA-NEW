import { Route, Routes } from "react-router";
import { pages } from "./routerConfig";
import { routes } from "@/shared/router";
import { Layout } from "@/app/layout/Layout";
import { Suspense } from "react";

export const AppRouter = () => {
    const Welcome = pages["welcome"];
    return (
        <Suspense fallback={<div>...Загрузка</div>}>
            <Routes>
                <Route index element={<Welcome />} />
                <Route element={<Layout />}>
                    {routes.map(({ id, path }) => {
                        const Element = pages[path as keyof typeof pages];
                        return Element ? (
                            <Route key={id} path={path} element={<Element />} />
                        ) : null;
                    })}
                </Route>
            </Routes>
        </Suspense>
    );
};
