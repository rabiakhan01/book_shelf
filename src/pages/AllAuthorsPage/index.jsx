import React from "react";
import { Headline } from '../../components/Shared';
import AuthorsListing from "../../components/AllAuthorPage/AuthorsListing";
const AllAuthorPage = () => {
    return (
        <div>
            <Headline
                headlineData="all authors"
            />
            <AuthorsListing />
        </div>
    )
}

export default AllAuthorPage;