import React, { useContext } from "react";
import { ProductCard } from "../../Shared";
import { bookListingContext } from "../../Shared/ContextProvider";

const AuthorsListing = () => {
    const context = useContext(bookListingContext)
    return (
        <div className="flex bg-secondaryColor w-full p-4 flex-wrap gap-2 justify-center items-center">
            {
                context.authorListing.map((author, index) => {
                    return (
                        <ProductCard
                            key={index}
                            book_id={author.id}
                            image={author.author_image}
                            name={author.author_name}
                            intro={author.category}
                            isAuthor={true}
                            language={author.language}
                            isIcon={true}
                        />
                    )
                })
            }

        </div>
    )
}
export default AuthorsListing;