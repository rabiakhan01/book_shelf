import React from "react";
import { Headline, SearchBar } from '../../components/Shared';
import AuthorsListing from "../../components/AllAuthorPage/AuthorsListing";
import { allAuthorsData } from "../../utils/MockupData";
const AllAuthorPage = () => {
    return (
        <div>
            <div className="sticky top-[3.6rem] sm:top-[4.5rem] lg:top-20 z-20 pt-7 bg-primaryColor pb-3 sm:pb-4">
                <SearchBar
                    name="author"
                />
            </div>
            <div className="pb-4">
                <Headline
                    headlineData="all authors"
                />
            </div>
            <AuthorsListing />
        </div>
    )
}

export default AllAuthorPage;