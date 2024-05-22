import React, { createContext, useState } from "react";
import { allBooksData } from "../../../utils/MockupData";

export const filterContext = createContext();

const ContextProvider = ({ children }) => {

    const [bookPageContext, setBookPageContext] = useState({
        bookFilters: [],
        bookListing: [],
    })


    return (
        <filterContext.Provider value={{ bookPageContext, setBookPageContext }}>
            {children}
        </filterContext.Provider>
    )

}

export default ContextProvider;