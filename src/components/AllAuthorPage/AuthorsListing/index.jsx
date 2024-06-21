import React, { useContext, useEffect } from "react";
import { ProductCard } from "../../Shared";
import { bookListingContext } from "../../Shared/ContextProvider";
import { allAuthorsData } from "../../../utils/MockupData";

const AuthorsListing = () => {
    const context = useContext(bookListingContext);

    const clearFilters = () => {
        context.setAuthorListing(allAuthorsData);
    }

    useEffect(() => {
        if (!context.searchTrigger) {
            context.setAuthorListing(allAuthorsData);
        }
    }, [context.searchTrigger])
    return (
        <div className="flex bg-secondaryColor min-h-[58vh] w-full flex-wrap gap-4 justify-center items-center h-[70vh] overflow-auto" id="author-card">
            {
                context.authorListing.map((author, index) => {
                    return (
                        <ProductCard
                            key={index}
                            id={author.id}
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