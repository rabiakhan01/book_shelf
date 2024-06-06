import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthentication } from "../utils/utils";
import { bookListingContext } from "../components/Shared/ContextProvider";

const ProtectedRoutes = () => {
    const context = useContext(bookListingContext);
    console.log(context.favouritBookContext.cartBooks?.length)
    return (
        <React.Fragment>
            {
                isAuthentication() && context.favouritBookContext.cartBooks?.length > 0 ? <Outlet /> : <Navigate to="/" />
            }
        </React.Fragment>
    );
}

export default ProtectedRoutes;