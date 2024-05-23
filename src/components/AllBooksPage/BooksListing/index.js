import React, { useContext, useState } from "react";
import { FilteredChip, Pagination, ProductCard } from "../../Shared";
import FilterSection from "../../Shared/FilterSection";
import icons from "../../../assets/icons/icons";
import { bookListingContext } from "../../Shared/ContextProvider";

const BooksListing = () => {

    const context = useContext(bookListingContext);

    const [showFilterSection, setShowFilterSection] = useState(false);

    const handelFilters = () => {
        setShowFilterSection(!showFilterSection)
    }

    const resetAllFilters = () => {
        context.setBookPageContext({ ...context.bookPageContext, bookFilters: [] })
    }

    // when window is resized then remove the opened filter drawer
    window.addEventListener('resize', function (event) {
        if (window.innerWidth > 1024) {
            event.preventDefault();
        }
    });

    return (

        <div className="flex flex-col bg-secondaryColor p-4">
            <div className="flex flex-col lg:flex-row w-full gap-4 pb-1 lg:pb-4  ">
                <div className="flex justify-between w-full lg:w-[32.5%] ">

                    <div className="flex justify-center items-center gap-2 ">
                        <img src={icons.filterIcon} alt="" className="lg:hidden h-5 w-5 small-tab:h-6 small-tab:w-6" onClick={handelFilters} />
                        <p className="text-textSecondaryColor text-xl md:text-2xl uppercase">Filters</p>
                        <p className="text-textLightBlackColor">120 results</p>
                    </div>
                    <div className={`${context.bookPageContext.bookFilters.length > 0 ? 'flex' : 'hidden'}`}>
                        <button className="flex justify-center items-center p-2 sm:p-3 w-20 sm:w-24 bg-black rounded-full text-textLightWhiteColor text-sm" onClick={resetAllFilters}>Reset all</button>
                    </div>
                </div>
                <div className={`${context.bookPageContext.bookFilters.length > 0 ? 'flex' : 'hidden'} gap-2 w-full overflow-auto`}>
                    {
                        context.bookPageContext.bookFilters.map((item, index) => {
                            return (
                                <FilteredChip
                                    key={index}
                                    name={item.name}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="relative flex gap-2 w-full pb-4">

                <div className={` ${showFilterSection ? 'absolute flex z-10  pr-2' : 'hidden lg:flex'} flex-col w-full small-tab:w-80 lg:w-[32.5%] rounded-xl h-[30.1rem] bg-primaryColor `}>
                    <FilterSection />
                </div>
                <div className={` ${showFilterSection ? 'brightness-50' : ''} w-full flex flex-col`}>
                    <div className="flex flex-row-reverse pr-3 flex-wrap w-full h-lvh overflow-auto gap-2">
                        {
                            context.bookPageContext.bookListing.map((book, index) => {
                                return (
                                    <ProductCard
                                        key={index}
                                        image={book.book_img}
                                        name={book.book_name}
                                        intro={book.author_name}
                                        review={book.rating.reviews}
                                        rate={book.rating.star}
                                        views={book.rating.views}
                                        old_price={book.old_price}
                                        new_price={book.new_price}
                                    />
                                )
                            })
                        }
                    </div>
                    <Pagination
                        maxRecordsPerPage={4}
                    />
                </div>
            </div>
        </div>

    )
}

export default BooksListing;