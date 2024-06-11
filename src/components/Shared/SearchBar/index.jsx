import React, { useContext, useEffect, useState } from "react";
import { Button } from '../../Shared';
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";


const SearchBar = ({ data }) => {

    const context = useContext(bookListingContext);
    const [search, setSearch] = useState();

    const handelChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    }

    const handelSearch = () => {

        if (search) {
            const searchedData = data.filter((item) => item.author_name.toLowerCase().includes(search) || item.book_name.toLowerCase().includes(search) || item.category.toLowerCase().includes(search) || item.language.toLowerCase().includes(search));
            const updatedData = { ...context.bookPageContext, bookListing: searchedData };
            console.log("🚀 ~ handelSearch ~ updatedData:", updatedData)
            context.setBookPageContext({ ...updatedData });
            context.setSearchTrigger((...searchTrigger) => (searchTrigger + 1));
        }
    }

    return (

        <div className="relative mt-7 flex w-full">
            <input
                type="text"
                value={search}
                placeholder="Search"
                className="w-[92%] h-14 border border-lightGrayColor focus:outline focus:outline-1 focus:outline-lightYellowColor rounded-s-xl pl-4"
                onChange={handelChange}
            />
            <div className={`flex justify-center items-center h-14 bg-whiteColor w-[8%] border border-lightGrayColor rounded-e-xl`}>
                <Button
                    variant="contained"
                    size="small"
                    onClick={handelSearch}
                    disabled={search?.length > 0 ? false : true}
                >Search</Button>
            </div>
        </div>
    )
}

export default SearchBar;