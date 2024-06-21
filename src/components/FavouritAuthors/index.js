import React, { useContext, useEffect } from "react";
import { ProductCard } from "../Shared";
import { bookListingContext } from "../Shared/ContextProvider";
import { allAuthorsData } from "../../utils/MockupData";

const FavouritAuthors = () => {
    const context = useContext(bookListingContext);

    useEffect(() => {
        if (!context.searchTrigger) {
            context.setAuthorListing(allAuthorsData);
        }
    }, [context.searchTrigger]);


    return (
        <div className="flex bg-secondaryColor min-h-[58vh] w-full flex-wrap gap-4 justify-center items-center h-[70vh] overflow-auto" id="author-card">
            {
                context.authorContext.favouritAuthors.length > 0 ?
                    context.authorContext.favouritAuthorListing.map((author, index) => {
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
                                bookmark={true}
                            />
                        )
                    })
                    :
                    <div className="flex flex-col h-full w-full justify-center items-center text-textLightWhiteColor">
                        <p className="text-lg font-medium">No Favourit Author</p>
                    </div>
            }

        </div>
    )
}

export default FavouritAuthors;