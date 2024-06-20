import React, { useContext } from "react";
import { allAuthorsData } from "../../../utils/MockupData";
import BtnBookMark from "../../Shared/BtnBookMark";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../../Shared/ContextProvider";

const PopularAuthors = () => {
    const context = useContext(bookListingContext);
    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate('/all-authors')
    }
    //console.log("authors", context.favouritBookContext.favouritAuthors);
    const handelBookMark = (id) => {

        const alreadyExists = context.favouritBookContext.favouritAuthors?.find((book) => book == +id);

        if (!alreadyExists) {
            const favouritBook = [...context.favouritBookContext.favouritAuthors, id];
            context.setFavouritBookContext({ ...context.favouritBookContext, favouritAuthors: favouritBook });
        }
        else {
            const updatedAuthor = context.favouritBookContext.favouritAuthors.filter((author) => author !== +alreadyExists)
            const favouritAuthor = [...updatedAuthor];
            context.setFavouritBookContext({ ...context.favouritBookContext, favouritAuthors: favouritAuthor })
        }
    }

    return (
        <div className="bg-secondaryColor p-4">
            <div className="text-xl md:text-2xl xl:text-3xl font-medium uppercase text-textLightWhiteColor pb-5 pt-2">
                <h1>Popular authors</h1>
            </div>
            <div className="flex flex-wrap gap-2 pb-3">
                {
                    allAuthorsData.filter((author, index) => index < 7).map((author, index) => {
                        return (
                            <div key={index} className="flex bg-primaryColor w-full sm:w-[48%] md:w-[32.57%] lg:w-[24.38%] h-32 overflow-hidden rounded-xl">
                                <div className="w-40">
                                    <img src={author.author_image} alt="author" className="object-cover w-full h-full grayscale" />
                                </div>
                                <div className="flex flex-col gap-y-3 w-full p-4">
                                    <div className="flex w-full justify-between">
                                        <div>
                                            <p>{author.book_count} books</p>
                                        </div>
                                        <div className="flex justify-end w-8 h-2">
                                            <BtnBookMark
                                                id={author.id}
                                                onClick={() => handelBookMark(author.id)}
                                                isAuthor={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="font-medium text-xl">{author.author_name}</div>
                                </div>
                            </div>
                        )
                    })
                }
                <button className="flex justify-center items-center font-medium text-xl bg-btnPrimaryColor w-full sm:w-[48%] md:w-[32.57%] lg:w-[24.38%] h-32 rounded-xl uppercase" onClick={handelNavigate}>
                    See all
                </button>
            </div>
        </div>
    );
}

export default PopularAuthors;