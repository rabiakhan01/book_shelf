import React from "react";
import { Footer, Navbar, Scroll } from '../index'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="flex flex-col justify-between mx-2 h-[100vh-96px] min-h-lvh xs:mx-5 2xl:max-w-[1300px] 2xl:mx-auto">
                <Navbar />
                {children}
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Layout;