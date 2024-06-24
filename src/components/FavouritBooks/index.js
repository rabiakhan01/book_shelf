import React, { useContext } from "react";
import { ProductCard } from "../Shared";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../Shared/ContextProvider";

const FavouritBooks = () => {
    const context = useContext(bookListingContext);
    const navigate = useNavigate();
    const navigateToDetailPage = (bookId) => {
        navigate(`/all-books/book-detail/${bookId}`);
    }

    return (
        <div className={`flex bg-secondaryColor min-h-[58vh] w-full flex-wrap gap-4 justify-center items-center h-[70vh] overflow-auto`} id="cards">

            {
                context.favouritBookContext.favouritBooks.length > 0 ?
                    context.favouritBookContext.favouritBookListing.map((book, index) => {
                        return (
                            <ProductCard
                                key={index}
                                id={book.id}
                                image={book.book_img}
                                name={book.book_name}
                                intro={book.author_name}
                                review={book.rating.reviews}
                                rate={book.rating.star}
                                views={book.rating.views}
                                old_price={book.old_price}
                                new_price={book.new_price}
                                onClick={() => navigateToDetailPage(book.id)}
                            />
                        )
                    })
                    :
                    <div className="flex flex-col w-full h-full justify-center items-center text-textLightWhiteColor">
                        <p className="text-xl font-medium">No favourit book</p>
                    </div>
            }
        </div>

    )
}

export default FavouritBooks;