import React from "react";
import { Headline, SearchBar } from '../../components/Shared';
import AuthorsListing from "../../components/AllAuthorPage/AuthorsListing";
import { allAuthorsData } from "../../utils/MockupData";
const AllAuthorPage = () => {
    return (
        <div>
            <SearchBar
                data={allAuthorsData}
            />
            <Headline
                headlineData="all authors"
            />
            <AuthorsListing />
        </div>
    )
}

export default AllAuthorPage;