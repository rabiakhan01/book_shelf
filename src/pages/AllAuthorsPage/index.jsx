import React from "react";
import { Headline, SearchBar } from '../../components/Shared';
import AuthorsListing from "../../components/AllAuthorPage/AuthorsListing";
import { allAuthorsData } from "../../utils/MockupData";
const AllAuthorPage = () => {
    return (
        <div>
            <div className="sticky top-[5rem] z-20 pt-7 bg-primaryColor pb-4">
                <SearchBar
                    data={allAuthorsData}
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