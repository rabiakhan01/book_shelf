import React, { createContext, useState } from "react";
import { allBooksData } from "../../../utils/MockupData";

export const bookListingContext = createContext();

const ContextProvider = ({ children }) => {

    const [bookPageContext, setBookPageContext] = useState({
        bookFilters: [],
        bookListing: allBooksData,
    });

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
    return (
        <bookListingContext.Provider value={{ bookPageContext, setBookPageContext, favouritBookContext, setFavouritBookContext, orderSummary, setOrderSummary, step, setStep }}>
            {children}
        </bookListingContext.Provider>
    )

}

export default ContextProvider;