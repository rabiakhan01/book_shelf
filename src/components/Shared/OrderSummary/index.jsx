import React, { useContext, useEffect, useState } from "react";
import InputField from '../InputField';
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";
import { useNavigate } from "react-router-dom";
const OrderSummary = () => {
    const context = useContext(bookListingContext);
    const navigate = useNavigate();
    const [totalquantity, setTotalQuantity] = useState(0);
    const [subTotal, setSubTotal] = useState(0);

    //navigate to the cart when edit is clicked
    const handelNavigate = () => {
        navigate('/cart');
    }
    // total the price and quantity every time any item is added in the cart
    useEffect(() => {
        const updatedQuantity = context.favouritBookContext.cartBooks.reduce((a, b) => (a + b.quantity), 0);

        const priceArray = allBooksData.map((book) => {
            const matchingBook = context.favouritBookContext.cartBooks.find((item) => item.bookID === book.id);
            return matchingBook && book.new_price * matchingBook.quantity;
        }).filter((item) => item !== undefined)
        const totalPrice = priceArray.reduce((a, b) => (a + b), 0);
        setTotalQuantity(updatedQuantity);
        setSubTotal(totalPrice);
    }, [context.favouritBookContext.cartBooks]);

    return (
        <div className="flex flex-col gap-4 text-textSecondaryColor w-full lg:w-[60%]">
            <div className="flex flex-col gap-3 bg-lightBlackColor rounded-xl p-4">
                <div className="flex justify-between ">
                    <p className="uppercase text-base lg:text-xl">order summary</p>
                    <button className="border-y-transparent border-t-transparent border-b-2 border-b-primaryColor uppercase text-sm sm:text-base" onClick={handelNavigate}>edit</button>
                </div>
                <div className="flex justify-between text-sm uppercase font-medium w-full gap-1">
                    <p className="w-[33%]">books</p>
                    <p className="w-[33%] text-center">qty</p>
                    <p className="w-[33%] text-end">price</p>
                </div>
                <div className="flex flex-col gap-3">
                    {
                        allBooksData.map((book, index) => {
                            const matchingBook = context.favouritBookContext.cartBooks.find((item) => item.bookID === book.id);
                            return matchingBook &&

                                <div key={index} className="flex justify-between w-full gap-1 text-sm">
                                    <p className="w-[33%] line-clamp-1">{book.book_name}</p>
                                    <p className="w-[33%] text-center">{matchingBook.quantity}</p>
                                    <p className="w-[33%] text-end">${matchingBook.quantity * book.new_price}</p>
                                </div>
                        })
                    }
                    <div className="flex justify-between w-full gap-1">
                        <p className="w-[33%] font-medium">Subtotal</p>
                        <p className="w-[33%] text-center">{totalquantity}</p>
                        <p className="w-[33%] text-end">${subTotal}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-medium">Shipping</p>
                        <p className="uppercase">Free</p>
                    </div>
                </div>
                <div className="flex justify-between text-base lg:text-xl font-medium">
                    <p className="uppercase">total</p>
                    <p>${subTotal}</p>
                </div>
            </div>
            <div className="flex gap-4">
                <InputField placeholder="Promo code" />
                <button className="uppercase px-6 rounded-xl py-2 bg-textLightGrayColor text-textPrimaryColor font-medium">Apply</button>
            </div>
        </div>
    )
}

export default OrderSummary;