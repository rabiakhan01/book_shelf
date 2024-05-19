import React, { createContext, useState } from "react";
import { FilteredChip, ProductCard, } from "../../Shared";
import { allBooksData } from '../../../utils/MockupData'
import FilterSection from "../../Shared/FilterSection";
import icons from "../../../assets/icons/icons";
export const filterContext = createContext();


const BooksListing = () => {
    const sortedBooksData = allBooksData.sort((a, b) => b.rating.views - a.rating.views);
    console.log("sorted data", sortedBooksData);

    console.log("hello")

    const [choice, setChoice] = useState([]);

    //Categories array where all types of category are defined
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Imaginative literature',
            check: false,
        },
        {
            id: 2,
            name: 'Scientific literature',
            check: false,
        },
        {
            id: 3,
            name: 'Business',
            check: false,
        },
        {
            id: 4,
            name: 'Educational',
            check: false,
        },
        {
            id: 5,
            name: 'Other',
            check: false,
        },
    ]);

    //define all the language in which books are availabe
    const [languages, setLanguages] = useState([
        {
            id: 1,
            name: 'English',
            check: false,
        },
        {
            id: 2,
            name: 'Urdu',
            check: false,
        },
        {
            id: 3,
            name: 'Korean',
            check: false,
        },
    ]);

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
        <filterContext.Provider value={{ choice, setChoice, categories, setCategories, languages, setLanguages }}>
            <div className="flex flex-col bg-secondaryColor p-4">
                <div className="flex flex-col lg:flex-row w-full gap-4 pb-1 lg:pb-4  pl-0 extra-small:pl-4 small-tab:pl-0 ">
                    <div className="flex justify-between w-[32.5%] ">

                        <div className="flex justify-center items-center gap-2 ">
                            <img src={icons.filterIcon} alt="" className="lg:hidden h-5 w-5 small-tab:h-6 small-tab:w-6" onClick={handelFilters} />
                            <p1 className="text-textSecondaryColor text-xl md:text-2xl uppercase">Filters</p1>
                            <p className="text-textLightBlackColor">120 results</p>
                        </div>
                        <div className="flex">
                            <button className="flex justify-center items-center p-3 w-24 bg-black rounded-full text-textLightWhiteColor">Reset all</button>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full overflow-auto">
                        {
                            choice.map((item, index) => {
                                return (
                                    <FilteredChip
                                        name={item.name}
                                    />
                                )
                            })

                        }
                    </div>
                </div>
                <div className="flex gap-2 w-full pb-4">

                    <div className={` ${filters ? 'absolute flex z-10 pr-4' : 'hidden lg:flex'} flex-col w-auto extra-small:w-[81vw] small-tab:w-80 lg:w-[32.5%] rounded-xl h-[30.1rem] bg-primaryColor `}>
                        <FilterSection />
                    </div>

                    <div className={` ${filters ? 'brightness-50' : ''} flex justify-center items-center flex-wrap w-full h-lvh overflow-auto gap-2`}>
                        {
                            sortedBooksData.filter((book, index) => index < 12).map((book, index) => {
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