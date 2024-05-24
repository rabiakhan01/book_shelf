import React, { createContext, useState } from "react";
import { allBooksData } from "../../../utils/MockupData";

export const bookListingContext = createContext();

const ContextProvider = ({ children }) => {

    const [bookPageContext, setBookPageContext] = useState({
        bookFilters: [],
        bookListing: allBooksData,
    })


    return (
        <bookListingContext.Provider value={{ bookPageContext, setBookPageContext }}>
            {children}
        </bookListingContext.Provider>
    )

}

export default ContextProvider;