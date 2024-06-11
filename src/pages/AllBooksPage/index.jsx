import React, { useContext } from "react";
import BooksListing from "../../components/AllBooksPage/BooksListing";
import { Headline, SearchBar } from "../../components/Shared";
import { allBooksData } from "../../utils/MockupData";
import { bookListingContext } from "../../components/Shared/ContextProvider";

const AllBooksPage = () => {
    return (

        <div className="flex flex-col gap-4 mb-4">
            <SearchBar
                data={allBooksData}
            />
            <Headline
                headlineData="all books"
            />
            <BooksListing />
        </div>

    )
}

export default AllBooksPage;