import React, { useContext, useEffect, useState } from "react";
import { Button } from '../../Shared';
import { bookListingContext } from "../ContextProvider";
import { allAuthorsData, allBooksData } from "../../../utils/MockupData";
import icons from "../../../assets/icons/icons";


const SearchBar = ({ name }) => {

    const context = useContext(bookListingContext);
    const [search, setSearch] = useState();

    const handelChange = (event) => {
        const { value } = event.target;
        setSearch(value);

    }

    const handelSearch = (event) => {

        if (search) {
            if (event.target.name === 'author') {
                const searchedData = allAuthorsData.filter((item) => item.author_name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()) || item.language.toLowerCase().includes(search.toLowerCase()));
                context.setAuthorListing(searchedData);
            }
            if (event.target.name === "books") {
                const searchedData = allBooksData.filter((item) => item.author_name.toLowerCase().includes(search.toLowerCase()) || item.book_name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()) || item.language.toLowerCase().includes(search.toLowerCase()));
                const updatedData = { ...context.bookPageContext, bookListing: searchedData };
                context.setBookPageContext({ ...updatedData });
                context.setSearchTrigger((prev) => (prev + 1))
            }
        }
        window.scroll({
            top: 0,
            behaviour: "smooth"
        })
    }

    const clearSerach = () => {
        setSearch('');
        if (name === 'author') {
            context.setAuthorListing(allAuthorsData);
        }
        if (name === 'books') {
            context.setBookPageContext({ ...context.bookPageContext, bookFilters: [], bookListing: allBooksData })
        }
        context.setSearchTrigger(0);
    }

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
                    value={search}
                    name={name}
                    disabled={search?.length > 0 ? false : true}
                >Search</button>
            </div>
        </div>
    )
}

export default SearchBar;