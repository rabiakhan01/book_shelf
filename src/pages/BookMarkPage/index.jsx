import React, { useContext, useState } from "react";
import { SearchBar } from "../../components/Shared";
import { Headline } from "../../components/Shared";
import AuthorsListing from "../../components/AllAuthorPage/AuthorsListing";
import { Pagination } from '../../components/Shared';
import FavouritAuthors from "../../components/FavouritAuthors";
import FavouritBooks from "../../components/FavouritBooks";

const BookMarkPage = () => {

    const [favouritAuthor, setFavouritAuthor] = useState(true);
    const [favouritBook, setFavouritBook] = useState(false);

    const handelChange = (event) => {
        const { value, checked } = event.target;
        if (value === 'author') {
            setFavouritBook(false);
            setFavouritAuthor(true)
        }
        else {
            setFavouritBook(true);
            setFavouritAuthor(false);
        }
    }
    return (
        <div>
            <div className="pb-4 pt-8">
                <Headline
                    headlineData="Book mark"
                />
            </div>
            <div className="flex flex-col p-4 bg-secondaryColor min-h-[58vh] w-full mb-4">
                <div className="flex justify-center items-center text-textSecondaryColor gap-4 w-full border-md bg-secondaryColor mb-4">
                    <div className="flex gap-1">
                        <input type="radio" name="favourit"
                            value="author"
                            checked={favouritAuthor}
                            onChange={handelChange}
                        />
                        <label>Favourit Authors</label>
                    </div>
                    <div className="flex gap-1">
                        <input type="radio" name="favourit"
                            onChange={handelChange}
                            value="books"
                            checked={favouritBook}
                        />
                        <label>Favourit Books</label>
                    </div>
                </div>
                {
                    favouritAuthor ?
                        <FavouritAuthors />
                        :
                        <FavouritBooks />
                }
                {
                    favouritAuthor ?
                        <Pagination
                            maxRecordsPerPage={8}
                            name="authors"
                            bookmark={true}
                        />
                        :
                        <Pagination
                            maxRecordsPerPage={6}
                            name="books"
                            bookmark={true}
                        />
                }
            </div>
        </div>
    )
}

export default BookMarkPage;