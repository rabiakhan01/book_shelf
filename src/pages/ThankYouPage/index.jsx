import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Shared";
import { bookListingContext } from "../../components/Shared/ContextProvider";
const ThankYouPage = () => {
    const context = useContext(bookListingContext);
    const naviagate = useNavigate();
    const moreShopping = () => {
        naviagate('/all-books')
    }
    useEffect(() => {
        context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: [] });
    }, [])
    return (
        <div className="flex flex-col h-lvh justify-center items-center">
            <p>Thank you for Choosing us. Your order is on the way.</p>
            <Button
                variant="contained"
                size="medium"
                onClick={moreShopping}
            >Shop more</Button>
        </div>
    )
}

export default ThankYouPage;