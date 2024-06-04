import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Shared";

const ThankYouPage = () => {
    const naviagate = useNavigate();
    const moreShopping = () => {
        naviagate('/all-books')
    }
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