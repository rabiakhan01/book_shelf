import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <div className="mx-5 2xl:max-w-[1440px] 2xl:mx-auto my-5">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;