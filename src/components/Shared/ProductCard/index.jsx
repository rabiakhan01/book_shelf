import React, { useContext, useEffect } from "react";
import BtnBookMark from "../BtnBookMark";
import icons from "../../../assets/icons/icons";
import { bookListingContext } from "../ContextProvider";
import { allAuthorsData, allBooksData } from "../../../utils/MockupData";

const ProductCard = ({ id, image, name, intro, review, rate, views, old_price, new_price, onClick, isIcon, isAuthor, language }) => {
    const totalBooks = allBooksData.filter((book) => book.author_id === id).length;
    const context = useContext(bookListingContext);
    //console.log("favourit authors", context.favouritBookContext.favouritAuthors);

    const handelFavouritBook = (event) => {
        event.stopPropagation();

        if (isAuthor) {
            const alreadyExists = context.authorContext.favouritAuthors?.find((author) => author == +id);
            if (!alreadyExists) {
                const favouritAuthor = [...context.authorContext.favouritAuthors, id];
                //console.log("🚀 ~ handelFavouritBook1 ~ favouritAuthor:", favouritAuthor)
                const newData = allAuthorsData.map((author) => {
                    const mathcingAuthor = favouritAuthor.find((item) => item === author.id);
                    return mathcingAuthor ? author : undefined
                }).filter((item) => item !== undefined);
                context.setAuthorContext({ ...context.authorContext, favouritAuthors: favouritAuthor, favouritAuthorListing: newData })
            }
            else {
                const favouritAuthor = context.authorContext.favouritAuthors.filter((author) => author !== +alreadyExists)
                const updatedAuthor = [...favouritAuthor];

                const newData = allAuthorsData.map((author) => {
                    const mathcingAuthor = favouritAuthor.find((item) => item === author.id);
                    return mathcingAuthor ? author : undefined
                }).filter((item) => item !== undefined);
                console.log("🚀 ~ newData ~ newData:", newData)

                context.setAuthorContext({ ...context.authorContext, favouritAuthors: updatedAuthor, favouritAuthorListing: newData })

            }
        }
        else {
            const alreadyExists = context.favouritBookContext.favouritBooks?.find((book) => book == +id);

            if (!alreadyExists) {
                const favouritBook = [...context.favouritBookContext.favouritBooks, id];
                const newdata = allBooksData.map((book) => {
                    const matchingBook = favouritBook.find((item) => item === book.id);
                    return matchingBook ? book : undefined
                }).filter((item) => item !== undefined);

                context.setFavouritBookContext({ ...context.favouritBookContext, favouritBookListing: newdata, favouritBooks: favouritBook });
            }
            else {
                const favouritBook = context.favouritBookContext.favouritBooks.filter((book) => book !== +alreadyExists)
                const updatedBook = [...favouritBook];
                const newdata = allBooksData.map((book) => {
                    const matchingBook = favouritBook.find((item) => item === book.id);
                    return matchingBook ? book : undefined
                }).filter((item) => item !== undefined);

                context.setFavouritBookContext({ ...context.favouritBookContext, favouritBookListing: newdata, favouritBooks: updatedBook });
            }
        }
    }
    return (
        <div className={`flex flex-col ${isAuthor ? 'w-full extra-small:w-72 small-tab:w-[48%] sm:w-64 mid-tab:w-[32%] md:w-[24%] xl:w-60 bg-whiteColor px-6 py-4' : isIcon ? 'w-full xl:w-52 bg-whiteColor p-4' : 'w-full extra-small:w-full h-[30.3rem] small-tab:w-[49%] md:w-[32.5%] bg-primaryColor p-6'}  rounded-xl gap-2  cursor-pointer`} onClick={onClick}>

            <div className="relative flex flex-col w-full justify-center items-center">
                <div className={`rounded-xl ${isIcon ? '!h-64' : '!h-72'} !w-full overflow-hidden`}>
                    <img src={image} alt="img" className="object-cover h-full w-full" />
                </div>
                <div className="absolute w-5 h-50 top-4 right-7 z-10">
                    <BtnBookMark
                        onClick={handelFavouritBook}
                        id={id}
                        isAuthor={isAuthor}
                    />
                </div>
            </div>

            <div className={`${isIcon ? 'pt-3' : ''} flex flex-col justify-between gap-4 w-full`}>
                <div className="flex flex-col">
                    <p className="text-base truncate">{name}</p>
                    <p className="font-medium text-xl truncate">{intro}</p>
                    {
                        isAuthor &&
                        <div>
                            <p>{language}</p>
                            <p className="font-medium">Total Books: {totalBooks}</p>
                        </div>
                    }
                </div>

                {
                    isIcon ?
                        false :
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2">
                                <div className="flex justify-center items-center gap-2 border border-secondaryColor  rounded-full h-7 p-3">
                                    <p>{review}</p>
                                    <img src={icons.review} alt="" className="object-scale-down" />
                                </div>
                                <div className="flex justify-center items-center gap-2 border border-secondaryColor  rounded-full h-7 p-3">
                                    <p>{rate}</p>
                                    <img src={icons.star} alt="" />
                                    <p>({views})</p>
                                </div>
                            </div>
                            <div className="flex gap-2 text-xl">
                                {
                                    old_price > 0
                                    && <p className="text-textGrayColor"><s>${old_price}</s></p>
                                }
                                <p>${new_price}</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default ProductCard;