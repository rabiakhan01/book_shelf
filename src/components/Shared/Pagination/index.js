import React, { useState, useContext, useEffect } from "react";
import PaginationButton from "./PaginationButton";
import icons from '../../../assets/icons/icons';
import { bookListingContext } from "../ContextProvider";
import { allBooksData } from "../../../utils/MockupData";

const Pagination = ({ maxRecordsPerPage }) => {
    const context = useContext(bookListingContext);

    const [maxPage, setMaxPage] = useState(Math.ceil(allBooksData.length / maxRecordsPerPage));
    const [filterData, setFilterData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [prevButton, setPrevButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);
    const [pageArray, setPageArray] = useState([]);

    const totalPage = [];
    for (let i = 0; i < maxPage; i++) {
        totalPage.push(
            {
                name: i + 1,
                active: false,
            }
        );
    }

    const handelPageChange = (pageNo) => {

        //change color of active button
        const newArray = pageArray.map((page, index) => {
            if (index + 1 === pageNo) {
                return { ...page, active: true }
            }
            else {
                return { ...page, active: false }
            }
        })
        setPageArray([...newArray]);

        setCurrentPage(pageNo);

        const lastIndexOfPage = pageNo * maxRecordsPerPage;
        console.log("🚀 ~ handelPageChange ~ lastIndexOfPage:", lastIndexOfPage)

        const firstIndexOfPage = lastIndexOfPage - maxRecordsPerPage;
        console.log("🚀 ~ handelPageChange ~ firstIndexOfPage:", firstIndexOfPage)

        if (context.bookPageContext.bookFilters.length > 0 || context.searchTrigger) {
            const currentPageData = filterData.slice(firstIndexOfPage, lastIndexOfPage);
            console.log("🚀 ~ handelPageChange ~ currentPageDat1:", currentPageData)
            context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
        }
        else {
            const currentPageData = allBooksData.slice(firstIndexOfPage, lastIndexOfPage);
            context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
            console.log("🚀 ~ handelPageChange ~ currentPageData2:", currentPageData)

        }
        // if (context.searchTrigger) {
        //     const currentPageData = context.bookPageContext.bookListing.slice(firstIndexOfPage, lastIndexOfPage);
        //     console.log("🚀 ~ handelPageChange ~ currentPageDat3:", currentPageData)
        //     context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
        // }

        window.scroll({
            top: 0,
            behavior: "smooth"
        })
        const element = document.getElementById('cards');
        element.scroll({
            top: 0,
            behavior: "smooth"
        })

    }

    const nextPage = () => {
        handelPageChange(currentPage + 1);
    }

    const prevPage = () => {
        handelPageChange(currentPage - 1);
    }

    useEffect(() => {
        if (!context.searchTrigger) {
            if (context.bookPageContext.bookFilters.length > 0) {

                //store the listing data after every time filter changes
                const filteredListing = context.bookPageContext.bookListing;
                setFilterData([...filteredListing]);

                //calculate number of pages required 
                const pages = Math.ceil(filteredListing.length / maxRecordsPerPage);
                setMaxPage(pages);

                const currentPageData = context.bookPageContext.bookListing.slice(0, maxRecordsPerPage)
                context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
                if (pages <= 1) {
                    setNextButton(true);
                }
                else {
                    setNextButton(false)
                }

            }
            else {

                //calculate number of pages required 
                const pages = Math.ceil(allBooksData.length / maxRecordsPerPage)
                console.log('hello from the world')
                setMaxPage(pages);
                const currentPageData = allBooksData.slice(0, maxRecordsPerPage)
                context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
                if (pages < 1) {
                    setNextButton(true);
                }
                else {
                    setNextButton(false)
                }
            }
        }
    }, [context.bookPageContext.bookFilters]);

    useEffect(() => {
        if (currentPage <= 1) {
            setPrevButton(true);
            setNextButton(false);
        }
        else if (currentPage == maxPage) {
            setPrevButton(false);
            setNextButton(true);
        }
        else {
            setPrevButton(false);
            setNextButton(false);
        }

    }, [currentPage])

    useEffect(() => {
        //console.log("maxpages", maxPage)
        const newArray = totalPage.map((page, index) => {
            if (index == 0) {
                return { ...page, active: true }
            }
            else {
                return page;
            }
        })
        setPageArray([...newArray])

    }, [maxPage])

    useEffect(() => {

        const filteredListing = context.bookPageContext.bookListing;
        setFilterData([...filteredListing]);
        if (context.searchTrigger) {

            const pages = Math.ceil(context.bookPageContext.bookListing.length / maxRecordsPerPage)
            //console.log("🚀 ~ useEffect ~ pages:", pages)
            setMaxPage(pages);
            const currentPageData = context.bookPageContext.bookListing.slice(0, maxRecordsPerPage)
            context.setBookPageContext({ ...context.bookPageContext, bookFilters: [], bookListing: currentPageData })
            if (pages < 1) {
                setNextButton(true);
            }
            else {
                setNextButton(false)
            }
            setCurrentPage(1);
            const newArray = pageArray.map((page, index) => {
                if (index + 1 === 1) {
                    return { ...page, active: true }
                }
                else {
                    return { ...page, active: false }
                }
            })
            setPageArray([...newArray]);
        }
    }, [context.searchTrigger]);

    return (
        <div className="w-full flex items-center justify-center mt-6">
            <div className="flex gap-2 justify-center items-center">
                <div>
                    <PaginationButton
                        name="prev"
                        Icon={icons.nextPageIcon}
                        onChange={() => { }}
                        onClick={() => prevPage()}
                        disabled={prevButton}
                    />
                </div>
                <div className="flex justify-center items-center gap-1">
                    {
                        pageArray.map((page, index) => {
                            return (
                                <PaginationButton
                                    key={index}
                                    name={page.name}
                                    activeButton={page.active}
                                    onClick={() => handelPageChange(page.name)}
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
                        onClick={() => nextPage()}
                        disabled={nextButton}
                    />
                </div>
            </div>
        </div>

    )
}
export default Pagination;