import React, { createContext, useState } from "react";
import { allAuthorsData, allBooksData } from "../../../utils/MockupData";

export const bookListingContext = createContext();

const ContextProvider = ({ children }) => {

    const [bookPageContext, setBookPageContext] = useState({
        bookFilters: [],
        bookListing: allBooksData,
    });
    const [authorListing, setAuthorListing] = useState(allAuthorsData);
    const [favouritBookContext, setFavouritBookContext] = useState({
        favouritBooks: [],
        cartBooks: [],
    });

    const [orderSummary, setOrderSummary] = useState({
        orderId: 0,
        customerName: '',
        customerNumber: '',
        shippingMethod:
        {
            date: '',
            time: '',
            adress: '',
            note: '',
        },
        cardDetail: {},

    });

    const [step, setStep] = useState(1);

    const [searchTrigger, setSearchTrigger] = useState(0)
    return (
        <bookListingContext.Provider value={{ bookPageContext, setBookPageContext, favouritBookContext, setFavouritBookContext, orderSummary, setOrderSummary, step, setStep, searchTrigger, setSearchTrigger }}>
            {children}
        </bookListingContext.Provider>
    )

}

export default ContextProvider;