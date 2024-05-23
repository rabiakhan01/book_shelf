import React, { useState, useContext, useEffect } from "react";
import PaginationButton from "./PaginationButton";
import icons from '../../../assets/icons/icons';
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";

const Pagination = ({ maxRecordsPerPage }) => {
    const context = useContext(bookListingContext);

    const [maxPage, setMaxPage] = useState(Math.ceil(allBooksData.length / maxRecordsPerPage));
    const [filterData, setFilterData] = useState([]);


    const handelPagination = (pageNo) => {

        const lastIndexOfPage = pageNo * maxRecordsPerPage;
        const firstIndexOfPage = lastIndexOfPage - maxRecordsPerPage;

        if (context.bookPageContext.bookFilters.length > 0) {
            const currentPageData = filterData.slice(firstIndexOfPage, lastIndexOfPage);
            //console.log("in result of filters applied: ", currentPageData);
            context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
        }
        else {
            const currentPageData = allBooksData.slice(firstIndexOfPage, lastIndexOfPage);
            // console.log("in result of filter not applied: ", currentPageData);
            context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
        }

    }

    useEffect(() => {
        if (context.bookPageContext.bookFilters.length > 0) {
            //store the listing data after every time filter changes
            const filteredListing = context.bookPageContext.bookListing;
            setFilterData([...filteredListing]);
            // console.log("filter listing", filteredListing);

            //calculate number of pages required 
            setMaxPage(Math.ceil(filteredListing.length / maxRecordsPerPage));

            const currentPageData = context.bookPageContext.bookListing.slice(0, maxRecordsPerPage)
            console.log("currentPageData", currentPageData)
            context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
        }
        else {
            console.log("empty")
            //calculate number of pages required 
            setMaxPage(Math.ceil(allBooksData.length / maxRecordsPerPage));
            const currentPageData = allBooksData.slice(0, maxRecordsPerPage)
            console.log("currentPageData", currentPageData)
            context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
        }

    }, [context.bookPageContext.bookFilters]);


    const totalPaginationPage = [];
    for (let i = 0; i < maxPage; i++) {
        totalPaginationPage.push(i + 1);
    }

    return (
        <div className="w-full flex items-center justify-center mt-6">
            <div className="flex gap-2 justify-center items-center">
                <div>
                    <PaginationButton
                        name="prev"
                        Icon={icons.prevPageIcon}
                        onChange={() => { }}
                        onClick={() => { console.log("previous") }}
                    />
                </div>
                <div className="flex justify-center items-center gap-1">
                    {
                        totalPaginationPage.map((pageNo, index) => {
                            return (
                                <PaginationButton
                                    key={index}
                                    name={pageNo}
                                    onClick={() => handelPagination(pageNo)}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    <PaginationButton
                        name="next"
                        Icon={icons.nextPageIcon}
                        onChange={() => { }}
                        onClick={() => { console.log("next") }}
                    />
                </div>
            </div>
        </div>

    )
}
export default Pagination;