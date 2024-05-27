import React from "react";
import { ProductCard } from "../../Shared";
import { allBooksData } from "../../../utils/MockupData";

const RecommendationSection = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="text-2xl uppercase font-medium">
                <h1>you may also like</h1>
            </div>
            <div className="flex gap-2 w-full">
                {
                    allBooksData.filter((book, index) => index < 6).map((book, index) => {

                        return (
                            <ProductCard
                                key={index}
                                image={book.book_img}
                                name={book.book_name}
                                intro={book.author_name}
                                isIcon={true}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecommendationSection;