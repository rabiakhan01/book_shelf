import React from "react";
import Headline from "../../components/AllBooksPage/Headline";
import BooksListing from "../../components/AllBooksPage/BooksListing";

const AllBooksPage = () => {
    return (
        <div className="flex flex-col gap-4 mb-4">
            <Headline />
            <BooksListing />
        </div>
    )
}

export default AllBooksPage;