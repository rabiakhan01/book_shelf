import React, { useContext, useEffect, useState } from "react";
import { Button } from '../../Shared';
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";


const SearchBar = ({ data, name }) => {

    const context = useContext(bookListingContext);
    const [search, setSearch] = useState();

    const handelChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    }

    const handelSearch = () => {

        if (search) {
            if (name === 'author') {
                const searchedData = data.filter((item) => item.author_name.toLowerCase().includes(search) || item.category.toLowerCase().includes(search) || item.language.toLowerCase().includes(search));
                console.log("🚀 ~ handelSearch ~ searched:", searchedData);
                context.setAuthorListing(searchedData);


            }
            else {
                const searchedData = data.filter((item) => item.author_name.toLowerCase().includes(search) || item.book_name.toLowerCase().includes(search) || item.category.toLowerCase().includes(search) || item.language.toLowerCase().includes(search));
                const updatedData = { ...context.bookPageContext, bookListing: searchedData };
                //console.log("🚀 ~ handelSearch ~ updatedData:", updatedData)
                context.setBookPageContext({ ...updatedData });
                context.setSearchTrigger((...searchTrigger) => (searchTrigger + 1));
            }
        }
    }

    return (

        <div className="flex w-full">
            <input
                type="text"
                value={search}
                placeholder="Search"
                className="w-[70%] small-tab:w-[80%] mid-tab:w-[87%] lg:w-[92%] h-12 lg:h-14 border border-lightGrayColor focus:outline focus:outline-1 focus:outline-lightYellowColor rounded-s-xl pl-4"
                onChange={handelChange}
            />
            <div className={`flex justify-center items-center bg-whiteColor w-[30%] small-tab:w-[20%] mid-tab:w-[12%] lg:w-[8%] h-12 lg:h-14 border border-lightGrayColor rounded-e-xl`}>
                <button
                    className="bg-lightYellowColor px-2 py-1 rounded-md"
                    onClick={handelSearch}
                    disabled={search?.length > 0 ? false : true}
                >Search</button>
            </div>
        </div>
    )
}

export default SearchBar;