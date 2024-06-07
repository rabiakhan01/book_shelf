import React from "react";
import BooksListing from "../../components/AllBooksPage/BooksListing";
import { Headline } from "../../components/Shared";

const AllBooksPage = () => {
    const book = 'all books'
    return (

        <div className="flex flex-col gap-4 mb-4">
            <Headline
                headlineData="all books"
            />
            <BooksListing />
        </div>

    )
}

export default AllBooksPage;