import React, { createContext, useState } from "react";
import { FilteredChip, ProductCard, } from "../../Shared";
import { allBooksData } from '../../../utils/MockupData'
import FilterSection from "../../Shared/FilterSection";
import icons from "../../../assets/icons/icons";
export const filterContext = createContext();


const BooksListing = () => {

    const [choice, setChoice] = useState([]);

    // handel filter section opening and closing
    const [filters, setFilter] = useState(false);
    const handelFilters = () => {
        setFilter(!filters)
    }

    // when window is resized then remove the opened filter drawer
    window.addEventListener('resize', function (event) {
        if (window.innerWidth > 1024) {
            setFilter(false);
            event.preventDefault();
        }
    });



    return (
        <filterContext.Provider value={{ choice, setChoice }}>
            <div className="flex flex-col bg-secondaryColor p-6">
                <div className="flex flex-col lg:flex-row w-full gap-4 py-4 pl-0 extra-small:pl-4 small-tab:pl-0">
                    <div className="flex gap-1 w-full lg:w-[32.5%]">
                        <img src={icons.filterIcon} alt="" className="lg:hidden h-5 w-5 small-tab:h-6 small-tab:w-6" onClick={handelFilters} />
                        <p1 className="text-textSecondaryColor text-xl md:text-2xl uppercase">Filters</p1>
                    </div>
                    <div className="flex gap-2 w-full overflow-auto">
                        {
                            choice.map((item, index) => {
                                return (
                                    <FilteredChip
                                        name={item}
                                    />
                                )
                            })

                        }
                    </div>
                </div>
                <div className="flex gap-2 w-full">

                    <div className={` ${filters ? 'absolute flex z-10 pr-4' : 'hidden lg:flex'} flex-col w-auto extra-small:w-[81vw] small-tab:w-80 lg:w-[32.5%] rounded-xl h-[30.1rem] bg-primaryColor `}>
                        <FilterSection />
                    </div>

                    <div className={` ${filters ? 'brightness-50' : ''} flex justify-center items-center flex-wrap w-full h-lvh overflow-auto gap-2`}>
                        {
                            allBooksData.filter((book, index) => index < 12).map((book, index) => {
                                return (
                                    <ProductCard
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
        </filterContext.Provider>
    )
}

export default BooksListing;