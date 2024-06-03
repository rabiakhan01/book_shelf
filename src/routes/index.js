import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { publicRoutes, protectedRoutes } from './Config'
import { bookListingContext } from "../components/Shared/ContextProvider";
import RedirectPage from "../pages/RedirectPage";

const Routing = () => {
    const context = useContext(bookListingContext);
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
                    context.favouritBookContext.cartBooks.length > 0 ?
                        protectedRoutes.map((route, index) => {
                            return <Route key={index} path={route.path} element={route.element} />
                        })
                        :
                        <Route path="*" element={<RedirectPage />} />
                }
            </Route>
        </Routes>
    );
}

export default Routing;