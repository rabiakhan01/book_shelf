import React, { useContext } from "react";
import BtnBookMark from "../BtnBookMark";
import icons from "../../../assets/icons/icons";
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";

const ProductCard = ({ id, image, name, intro, review, rate, views, old_price, new_price, onClick, isIcon, isAuthor, language }) => {
    const totalBooks = allBooksData.filter((book) => book.author_id === id).length;
    const context = useContext(bookListingContext);
    //console.log("favourit authors", context.favouritBookContext.favouritAuthors);
    const handelFavouritBook = (event) => {
        event.stopPropagation();
        if (isAuthor) {
            const alreadyExists = context.favouritBookContext.favouritAuthors?.find((author) => author == +id);

            if (!alreadyExists) {
                const favouritBook = [...context.favouritBookContext.favouritAuthors, id];
                context.setFavouritBookContext({ ...context.favouritBookContext, favouritAuthors: favouritBook });
            }
            else {
                const updatedBooks = context.favouritBookContext.favouritAuthors.filter((book) => book !== +alreadyExists)
                const favouritBook = [...updatedBooks];
                context.setFavouritBookContext({ ...context.favouritBookContext, favouritAuthors: favouritBook })
            }
        }
        else {
            const alreadyExists = context.favouritBookContext.favouritAuthors?.find((book) => book == +id);

            if (!alreadyExists) {
                const favouritAuthor = [...context.favouritBookContext.favouritAuthors, id];
                context.setFavouritBookContext({ ...context.favouritBookContext, favourit: favouritAuthor });
            }
            else {
                const updatedBooks = context.favouritBookContext.favouritAuthors.filter((book) => book !== +alreadyExists)
                const updateAuthor = [...updatedBooks];
                context.setFavouritBookContext({ ...context.favouritBookContext, favourit: updateAuthor })
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
                        isAuthor={true}
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