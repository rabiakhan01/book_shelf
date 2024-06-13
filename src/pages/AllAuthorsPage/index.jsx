import React from "react";
import { Headline, SearchBar } from '../../components/Shared';
import AuthorsListing from "../../components/AllAuthorPage/AuthorsListing";
import { allAuthorsData } from "../../utils/MockupData";
const AllAuthorPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <SearchBar
                    data={allAuthorsData}
                    name="author"
                />
            </div>
            <Headline
                headlineData="all authors"
            />
            <AuthorsListing />
        </div>
    )
}

export default AllAuthorPage;