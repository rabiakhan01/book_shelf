import React from "react";
import { Headline, SearchBar, Pagination } from '../../components/Shared';
import AuthorsListing from "../../components/AllAuthorPage/AuthorsListing";

const AllAuthorPage = () => {
    return (
        <div>
            <div className="sticky top-[3.6rem] sm:top-[4.5rem] lg:top-20 z-20 pt-7 bg-primaryColor pb-3 sm:pb-4">
                <SearchBar
                    name="authors"
                />
            </div>
            <div className="pb-4">
                <Headline
                    headlineData="All Authors"
                />
            </div>
            <div className="flex flex-col p-4 bg-secondaryColor min-h-[58vh] w-full mb-4">
                <AuthorsListing />
                <Pagination
                    maxRecordsPerPage={8}
                    name="authors"
                />
            </div>
        </div>
    )
}

export default AllAuthorPage;