import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthentication } from "../utils/utils";

const ProtectedRoutes = () => {
    return (
        <React.Fragment>
            {
                isAuthentication() ? <Outlet /> : <Navigate to="/" />
            }
        </React.Fragment>
    );
}

export default ProtectedRoutes;