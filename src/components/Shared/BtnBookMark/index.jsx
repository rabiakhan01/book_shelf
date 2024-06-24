import React, { useContext } from "react";
import { BlackBookmarkIcon, BookmarkIcon } from "../../../assets/icons";
import { bookListingContext } from "../ContextProvider";

const BtnBookMark = ({ onClick, id, isAuthor }) => {

    const context = useContext(bookListingContext);
    let isFavourit;

    if (isAuthor) {
        isFavourit = context?.authorContext.favouritAuthors?.find((author) => author == +id);
    }
    else {
        isFavourit = context?.favouritBookContext.favouritBooks?.find((book) => book == +id);
    }

    return (
        <div className={`flex justify-center items-center ${isFavourit ? 'bg-btnPrimaryColor' : 'bg-btnsecondaryColor'}  w-8 h-8 rounded-full`} onClick={onClick}>
            <button>

                {
                    isFavourit
                        ?
                        <BlackBookmarkIcon className="h-5 w-5" />
                        :
                        <BookmarkIcon className="h-5 w-5" />
                }
            </button>
        </div>
    )
}

export default BtnBookMark;