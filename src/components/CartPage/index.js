import React, { useContext, useEffect, useState } from "react";
import { bookListingContext } from "../Shared/ContextProvider";
import { BtnCartQuantity } from "../Shared";
import { allAuthorsData, allBooksData } from "../../utils/MockupData";
import { useParams } from "react-router-dom";
import { Button } from '../Shared';


const Cart = () => {

    const context = useContext(bookListingContext);
    const [totalPrice, setTotalPrice] = useState();
    const [subTotal, setSubTotal] = useState();

    const incrementQuantity = (book_id) => {
        const findBook = context.favouritBookContext.cartBooks.find((book) => book.bookID === +book_id);
        const updatedData = context.favouritBookContext.cartBooks.map((book) => {
            if (book.bookID == findBook.bookID) {
                return { ...book, quantity: book.quantity + 1 }
            }
            else {
                return book
            }
        })
        // console.log("🚀 ~ updatedData ~ updatedData:", updatedData)

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

        if (array.length < 1) {
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: array });
        }
    }

    //everytime when any change happens in the cart array
    useEffect(() => {
        const updatedPrice = context.favouritBookContext.cartBooks.map((item) => {
            const matchingBook = allBooksData.find((book) => book.id === +item.bookID);
            return matchingBook ? { bookID: item.bookID, price: item.quantity * matchingBook.new_price } : undefined
        })
        // console.log("🚀 ~ updatedPrice ~ updatedPrice:", updatedPrice);
        setTotalPrice([...updatedPrice]);
        const totalBill = updatedPrice.reduce((a, b) => (a + b.price), 0);
        setSubTotal(totalBill);
    }, [context.favouritBookContext.cartBooks]);


    // true when at least one item is present in the cart
    if (context.favouritBookContext.cartBooks.length > 0) {
        return (
            <div className="flex gap-2 w-full">
                <div className="flex flex-col w-4/5 gap-2">
                    {
                        allBooksData.map((book) => {
                            const matchingBook = context.favouritBookContext.cartBooks.find((item) => item.bookID == book.id);
                            return matchingBook ?
                                <div key={book.id} className="flex gap-4 bg-whiteColor w-full h-72 p-4">
                                    <div className="h-64 w-44">
                                        <img src={book.book_img} alt="book" className="object-cover w-full h-full rounded-2xl" />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="">
                                            <p>{book.book_name}</p>
                                            <p className="text-xl font-medium">{book.author_name}</p>
                                            <p>{ }</p>
                                            <p>{book.language}</p>
                                        </div>
                                        <div>
                                            <p>{book.description}</p>
                                        </div>
                                        <BtnCartQuantity
                                            quantity={
                                                context.favouritBookContext.cartBooks.map((item) => {
                                                    if (item.bookID == +book.id) {
                                                        return item.quantity
                                                    }
                                                })
                                            }
                                            incrementQuantity={() => incrementQuantity(book.id)}
                                            decrementQuantity={() => decrementQuantity(book.id)}
                                        />
                                        <div className="flex gap-2">
                                            <p className="font-medium">Total Price:</p>
                                            <p>${
                                                totalPrice?.map((item) => {
                                                    if (item.bookID === +book.id) {
                                                        return item.price;
                                                    }
                                                })
                                            }</p>
                                        </div>
                                    </div>
                                </div>
                                : undefined
                        }).filter((item) => item !== undefined)
                    }
                </div>
                <div className="flex flex-col justify-between bg-whiteColor h-40 w-1/5 p-4">

                    <div className="flex gap-6">
                        <div className="font-medium text-lg">
                            <p>Total Books :</p>
                            <p>SubTotal:</p>
                        </div>
                        <div className="text-lg">
                            <p>{totalPrice?.length}</p>
                            <p>${subTotal}</p>
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        size="extra-large"
                    >
                        Proceed To Checkout
                    </Button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="flex w-full justify-center items-center">
                <p>Empty Cart</p>
            </div>
        )
    }
}

export default Cart;