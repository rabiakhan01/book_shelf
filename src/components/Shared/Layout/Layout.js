import React from "react";
import { Footer, Navbar } from '../index'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="mx-2 h-[100vh-96px] xs:mx-5 2xl:max-w-[1440px] 2xl:mx-auto">
                <Navbar />
                {children}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Layout;