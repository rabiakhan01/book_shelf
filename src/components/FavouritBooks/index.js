import React, { useContext } from "react";
import { ProductCard } from "../Shared";
import { useNavigate } from "react-router-dom";
import { Pagination } from '../Shared';
import { bookListingContext } from "../Shared/ContextProvider";

const FavouritBooks = () => {
    const context = useContext(bookListingContext);
    const navigate = useNavigate();
    const navigateToDetailPage = (bookId) => {
        navigate(`book-detail/${bookId}`);
    }

    return (
        <div className={`w-full flex flex-col pt-2 lg:pt-0`}>
            <div className={`flex pr-2 pl-1 flex-wrap w-full h-lvh overflow-auto gap-2`} id="cards">
                {
                    context.bookPageContext.bookListing.map((book, index) => {
                        return (
                            <ProductCard
                                key={index}
                                book_id={book.id}
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
                }
            </div>

        </div>
    )
}

export default FavouritBooks;