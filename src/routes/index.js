import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { publicRoutes, protectedRoutes } from './Config'


const Routing = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                {
                    publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                    })
                }
            </Route>
            <Route element={<ProtectedRoutes />}>
                {
                    protectedRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                    })
                }
            </Route>
        </Routes>
    );
}

export default Routing;