import React from "react";
import { isAuthentication } from "../utils/utils";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
    return (

        <React.Fragment>
            {
                isAuthentication() ? <Outlet /> : <Navigate to="/" />
            }
        </React.Fragment>


    );

}

export default PublicRoutes;