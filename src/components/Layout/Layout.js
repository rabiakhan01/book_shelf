import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <div className="mx-2 2xl:max-w-[1440px] 2xl:mx-auto my-2">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;