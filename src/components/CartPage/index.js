import React, { useContext } from "react";
import { bookListingContext } from "../Shared/ContextProvider";
import { allAuthorsData, allBooksData } from "../../utils/MockupData";


const Cart = () => {
    const context = useContext(bookListingContext);

    if (context.favouritBookContext.cartBooks.length > 0) {
        return (
            <div className="flex flex-col w-11/12 gap-2">
                {
                    allBooksData.map((book) => {
                        const matchingBook = context.favouritBookContext.cartBooks.find((item) => item.bookID == book.id);
                        return matchingBook ?
                            <div key={book.id} className="flex gap-4 bg-whiteColor w-11/12 h-72 p-4">
                                <div className="h-64 w-44">
                                    <img src={book.book_img} alt="book" className="object-cover w-full h-full rounded-2xl" />
                                </div>
                                <div>
                                    <div>
                                        <p>{book.book_name}</p>
                                        <p>{book.author_name}</p>
                                    </div>
                                    <div>
                                        <p>${book.new_price}</p>
                                    </div>
                                </div>
                            </div>
                            : undefined
                    }).filter((item) => item !== undefined)
                }
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