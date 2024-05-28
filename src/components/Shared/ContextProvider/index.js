import React, { createContext, useState } from "react";
import { allBooksData } from "../../../utils/MockupData";

export const bookListingContext = createContext();

const ContextProvider = ({ children }) => {

    const [bookPageContext, setBookPageContext] = useState({
        bookFilters: [],
        bookListing: allBooksData,
    })
    const [favouritBookContext, setFavouritBookContext] = useState({
        favouritBooksIds: [],
        cartBooksIds: [],
    })


    return (
        <bookListingContext.Provider value={{ bookPageContext, setBookPageContext, favouritBookContext, setFavouritBookContext }}>
            {children}
        </bookListingContext.Provider>
    )

}

export default ContextProvider;