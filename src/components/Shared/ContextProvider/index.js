import React, { createContext, useState } from "react";
import { allBooksData } from "../../../utils/MockupData";

export const bookListingContext = createContext();

const ContextProvider = ({ children }) => {

    const [bookPageContext, setBookPageContext] = useState({
        bookFilters: [],
        bookListing: allBooksData,
    })
    const [favouritBookContext, setFavouritBookContext] = useState({
        favouritBooks: [],
        cartBooks: [],
    });
    const [customerInformation, setCustomerInformation] = useState({
        contactInformation: [],
        shippingInformation: []
    })
    return (
        <bookListingContext.Provider value={{ bookPageContext, setBookPageContext, favouritBookContext, setFavouritBookContext, customerInformation, setCustomerInformation }}>
            {children}
        </bookListingContext.Provider>
    )

}

export default ContextProvider;