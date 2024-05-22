import React, { useContext, useEffect, useState } from "react";
import { FilteredChip, ProductCard, } from "../../Shared";
import FilterSection from "../../Shared/FilterSection";
import icons from "../../../assets/icons/icons";
import { filterContext } from "../../Shared/ContextProvider";
import { allBooksData } from "../../../utils/MockupData";

const BooksListing = () => {

    const context = useContext(filterContext);
    console.log(context.bookPageContext.bookFilters);
    const validListing = () => {
        if (context.bookPageContext.bookFilters.length > 0) {
            return context.bookPageContext.bookListing;
        }
        else {
            return allBooksData;
        }
    }

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

    useEffect(() => {
        setShowFilterSection(false);
    }, [context.bookPageContext.bookFilters])
    return (

        <div className="flex flex-col bg-secondaryColor p-4">
            <div className="flex flex-col lg:flex-row w-full gap-4 pb-1 lg:pb-4  ">
                <div className="flex justify-between w-full lg:w-[32.5%] ">

                    <div className={`flex justify-center items-center gap-2 ${context.bookPageContext.bookFilters.length > 0 ? 'pb-0' : 'pb-2 lg:pb-0'}`}>
                        <img src={icons.filterIcon} alt="" className="lg:hidden h-5 w-5" onClick={handelFilters} />
                        <p className="text-textSecondaryColor text-xl md:text-2xl uppercase">Filters</p>
                        <p className="text-grayColor text-xl">{validListing().length}</p>
                    </div>
                    <div className={`${context.bookPageContext.bookFilters.length > 0 ? 'flex' : 'hidden'}`}>
                        <button className="flex justify-center items-center p-2 sm:p-3 w-20 sm:w-24 bg-black rounded-full text-textLightWhiteColor text-sm" disabled={showFilterSection ? true : false} onClick={resetAllFilters}>Reset all</button>
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

                <div className={` ${showFilterSection ? 'absolute flex z-10  pr-2' : 'hidden lg:flex'} ${context.bookPageContext.bookFilters.length > 0 ? '-top-14 sm:-top-[68px]' : ''} flex-col w-full small-tab:w-80 lg:w-[32.5%] rounded-xl h-[30.1rem] bg-primaryColor `}>
                    <FilterSection />
                </div>

                <div className={` ${showFilterSection ? 'brightness-50' : ''} flex lg:pl-1 flex-wrap w-full h-lvh overflow-auto gap-2`}>
                    {
                        validListing().map((book) => {
                            return (
                                <ProductCard
                                    key={book.id}
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
            </div>
        </div>

    )
}

export default BooksListing;