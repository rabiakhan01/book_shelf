import React, { useContext, useEffect, useState } from "react";
import InputField from '../InputField';
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";
import { useNavigate } from "react-router-dom";
import BtnCartQuantity from "../BtnCartQuantity";
import Button from "../Button";
const OrderSummary = () => {

    const context = useContext(bookListingContext);

    const [totalquantity, setTotalQuantity] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [totalBill, setTotalBill] = useState();
    const [editOrder, setEditOrder] = useState(false);

    const [promoCodes, setPromoCodes] = useState(
        [{
            used: false,
            code: '123mbu123'
        },
        {
            used: false,
            code: 'wert23456'
        },
        {
            used: false,
            code: '45678dfgh'
        },
        ]);
    const [promoCode, setPromoCode] = useState('');
    //console.log("🚀 ~ OrderSummary ~ promoCode:", promoCodes)

    //navigate to the cart when edit is clicked
    const editSummary = () => {
        setEditOrder(true);
    }
    const handelChange = (event) => {
        if (event.target.value.length < 10) {
            setPromoCode(event.target.value)
        }
    }

    const incrementQuantity = (book_id) => {
        console.log(book_id)
        const findBook = context.favouritBookContext.cartBooks.find((book) => book.bookID === book_id);
        //console.log("🚀 ~ incrementQuantity ~ findBook:", findBook)
        const updatedData = context.favouritBookContext.cartBooks.map((book) => {
            console.log("🚀 ~ OrderSummary ~ promoCodes:", promoCodes)
            if (book.bookID === findBook.bookID) {
                return { ...book, quantity: book.quantity + 1 }
            }
            else {
                return book
            }
        })
        //console.log("🚀 ~ updatedData ~ updatedData:", updatedData)

        context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: updatedData })
    }
    const decrementQuantity = (book_id) => {
        const updatedArray = context.favouritBookContext.cartBooks.map((book) => {
            if (book.bookID == + book_id) {
                return { ...book, quantity: book.quantity - 1 }
            }
            else {
                return book;
            }
        })
        //console.log("🚀 ~ updatedArray ~ updatedArray:", updatedArray)
        context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: updatedArray });
        const array = updatedArray.filter((item) => item.quantity > 0);

        if (array.length > 0) {
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: array });
        }
        else {
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: [] })
        }
    }

    const handelDiscount = () => {
        const findPromoCode = promoCodes.find((item) => item.code === promoCode);
        //console.log("🚀 ~ handelDiscount ~ findPromoCode:", findPromoCode)
        const updatedPromoCodes = promoCodes.map((item) => {
            if (item.code === promoCode) {
                return { ...item, used: true }
            }
            else {
                return item
            }
        })
        setPromoCodes(updatedPromoCodes);
        if (findPromoCode && !findPromoCode?.used) {
            setSubTotal((prev) => (prev - (prev * 3 / 100)));
        }
    }

    const saveChanges = () => {
        setEditOrder(false)
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
        setTotalBill(totalPrice);
        setSubTotal(totalPrice);
        const updatedPromoCodes = promoCodes.map((item) => {
            return { ...item, used: false }
        });
        setPromoCodes(updatedPromoCodes);
    }, [context.favouritBookContext.cartBooks]);
    return (
        <div className="flex flex-col gap-4 text-textSecondaryColor w-full lg:w-[75%]">
            <div className="flex flex-col gap-3 bg-lightBlackColor rounded-xl p-4">
                <div className="flex justify-between ">
                    <p className="uppercase text-base lg:text-xl">order summary</p>
                    <button className="border-y-transparent border-t-transparent border-b-2 border-b-primaryColor uppercase text-sm sm:text-base" onClick={editSummary}>edit</button>
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

                                <div key={index} className="flex items-center justify-between w-full gap-1 text-sm">
                                    <p className="w-[33%] line-clamp-1">{book.book_name}</p>
                                    {
                                        editOrder ?
                                            <BtnCartQuantity
                                                quantity={matchingBook.quantity}
                                                incrementQuantity={() => incrementQuantity(book.id)}
                                                decrementQuantity={() => decrementQuantity(book.id)}
                                                size="small"
                                            />
                                            :
                                            <p className="w-[33%] text-center">{matchingBook.quantity}</p>
                                    }
                                    <p className="w-[33%] text-end">${matchingBook.quantity * book.new_price}</p>
                                </div>
                        })
                    }
                    <div className="flex justify-between w-full gap-1">
                        <p className="w-[33%] font-medium">Subtotal</p>

                        {
                            <p className="w-[33%] text-center">{totalquantity}</p>
                        }
                        <p className="w-[33%] text-end">${totalBill}</p>
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
                {
                    editOrder && <button className="flex underline uppercase text-textLightGrayColor justify-end" onClick={saveChanges}>save changes</button>
                }
            </div>
            <div className="flex gap-2 w-full ">
                <div className="w-full">
                    <InputField
                        value={promoCode}
                        name="promoCode"
                        placeholder="Promo code"
                        onChange={handelChange}
                    />
                </div>
                <button className="uppercase px-6 rounded-xl py-2 bg-textLightGrayColor text-textPrimaryColor font-medium" disabled={editOrder ? true : false} onClick={handelDiscount}>Apply</button>
            </div>
        </div>
    )
}

export default OrderSummary;