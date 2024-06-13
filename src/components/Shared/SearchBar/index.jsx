import React, { useContext, useEffect, useState } from "react";
import { Button } from '../../Shared';
import { bookListingContext } from "../ContextProvider";
import { allAuthorsData, allBooksData } from "../../../utils/MockupData";
import icons from "../../../assets/icons/icons";


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

    const clearSerach = () => {
        setSearch('');
        context.setAuthorListing(allAuthorsData);
    }
    document.addEventListener('keypress', (event) => {
        if (event.which === 13) {
            if (search === '') {
                context.setAuthorListing(allAuthorsData);
            }
            handelSearch();
        }
    })

    return (

        <div className="flex w-full relative">
            <input
                type="text"
                value={search}
                placeholder="Search"
                className="w-[70%] small-tab:w-[80%] mid-tab:w-[87%] lg:w-[92%] h-12 lg:h-14 border border-lightGrayColor focus:outline focus:outline-1 focus:outline-lightYellowColor rounded-s-xl pl-4 pr-10"
                onChange={handelChange}
            />
            {
                search &&
                <div className="absolute flex justify-center items-center right-28 top-4 w-6 h-6 border border-lightGrayColor rounded-full focus:bg-orange-400 cursor-pointer" onClick={clearSerach}>
                    <img src={icons.close} alt="cross-search-icon" className=" w-[10px] h-[10px] " />
                </div>
            }
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