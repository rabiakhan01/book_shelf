import React from "react";
import { AllProductsLayout, ProductCard } from "../../Shared";
import { allBooksData } from '../../../utils/MockupData'

const BooksListing = () => {
    return (
        <div className="flex flex-col bg-secondaryColor p-4">
            <div className="py-4">
                <p1>Filters</p1>
            </div>
            <AllProductsLayout>
                <div className="hidden lg:flex flex-col w-[32.5%] rounded-md h-[30rem] bg-primaryColor">
                    filter
                </div>
                <div className="flex justify-center items-center flex-wrap w-full h-full gap-2">
                    {
                        allBooksData.filter((book, index) => index < 12).map((book, index) => {
                            return (
                                <ProductCard
                                    image={book.book_img}
                                    name={book.book_name}
                                    intro={book.author_name}
                                    review={book.rating.reviews}
                                    rate={book.rating.star}
                                    views={book.rating.views}
                                    old_price={book.old_price}
                                    new_price={book.new_price}
                                />
                            )
                        })
                    }
                </div>
            </AllProductsLayout>
        </div>
    )
}

export default BooksListing;