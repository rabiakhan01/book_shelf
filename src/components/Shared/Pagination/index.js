import React, { useState, useContext, useEffect } from "react";
import PaginationButton from "./PaginationButton";
import icons from '../../../assets/icons/icons';
import { bookListingContext } from "../ContextProvider";
import { allAuthorsData, allBooksData } from "../../../utils/MockupData";

const Pagination = ({ maxRecordsPerPage, name, bookmark }) => {
    const context = useContext(bookListingContext);
    const calculateMaxPage = () => {
        if (name === 'books') {
            if (bookmark) {
                return Math.ceil(context.favouritBookContext.favouritBooks?.length / maxRecordsPerPage);
            }
            else {
                return Math.ceil(allBooksData.length / maxRecordsPerPage);
            }
        }
        else {
            if (bookmark) {
                return Math.ceil(context.authorContext.favouritAuthors.length / maxRecordsPerPage);
            }
            else {

            }
        }
    }
    console.log("maxpages", calculateMaxPage())
    const [maxPage, setMaxPage] = useState(calculateMaxPage());
    //console.log("🚀 ~ Pagination ~ maxPage:", maxPage)
    const [filterData, setFilterData] = useState([]);
    console.log("🚀 ~ Pagination ~ filterData:", filterData)
    const [currentPage, setCurrentPage] = useState(1);
    const [prevButton, setPrevButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);
    const [pageArray, setPageArray] = useState([]);
    // console.log("🚀 ~ Pagination ~ pageArray:", pageArray)

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
        // console.log("🚀 ~ handelPageChange ~ lastIndexOfPage:", lastIndexOfPage)

        const firstIndexOfPage = lastIndexOfPage - maxRecordsPerPage;
        // console.log("🚀 ~ handelPageChange ~ firstIndexOfPage:", firstIndexOfPage)

        if (name === 'books') {

            if (context.bookPageContext.bookFilters.length > 0 || context.searchTrigger) {
                const currentPageData = filterData.slice(firstIndexOfPage, lastIndexOfPage);
                context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
            }
            else {
                if (!bookmark) {

                    const currentPageData = allBooksData.slice(firstIndexOfPage, lastIndexOfPage);
                    context.setBookPageContext({ ...context.bookPageContext, bookListing: currentPageData })
                }
                else {
                    const currentPageData = filterData.slice(firstIndexOfPage, lastIndexOfPage);
                    context.setFavouritBookContext({ ...context.favouritBookContext, favouritBookListing: currentPageData })
                }
            }
            const element = document.getElementById('cards');
            element.scroll({
                top: 0,
                behavior: "smooth"
            })
        }
        if (name === 'authors') {
            if (!context.searchTrigger) {
                if (!bookmark) {
                    const currentPageData = allAuthorsData.slice(firstIndexOfPage, lastIndexOfPage);
                    context.setAuthorListing(currentPageData);
                }
                else {
                    const currentPageData = filterData.slice(firstIndexOfPage, lastIndexOfPage);
                    context.setAuthorContext({ ...context.authorContext, favouritAuthorListing: currentPageData });
                }
            }
            else {
                const currentPageData = filterData.slice(firstIndexOfPage, lastIndexOfPage);
                context.setAuthorListing(currentPageData);
            }
            const element = document.getElementById('author-card');
            element.scroll({ top: 0, behavior: "smooth" });
        }

        window.scroll({
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
        if (!context.searchTrigger && name == 'books') {
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

        let pages;
        if (context.searchTrigger) {
            if (name === 'books') {
                const filteredListing = context.bookPageContext.bookListing;
                setFilterData([...filteredListing]);
                pages = Math.ceil(context.bookPageContext.bookListing.length / maxRecordsPerPage)
                //console.log("🚀 ~ useEffect ~ pages:", pages)
                setMaxPage(pages);
                const currentPageData = context.bookPageContext.bookListing.slice(0, maxRecordsPerPage)
                context.setBookPageContext({ ...context.bookPageContext, bookFilters: [], bookListing: currentPageData })
            }
            if (name === 'authors') {
                setFilterData(context.authorListing);
                pages = Math.ceil(context.authorListing.length / maxRecordsPerPage)
                console.log("🚀 ~ useEffect ~ pages:", pages)
                setMaxPage(pages);
                const currentPageData = context.authorListing.slice(0, maxRecordsPerPage);
                context.setAuthorListing(currentPageData);
            }
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
        else {
            if (name === 'authors') {
                //calculate number of pages required 
                if (bookmark) {

                    const pages = Math.ceil(allAuthorsData.length / maxRecordsPerPage);
                    setMaxPage(pages);
                    const currentPageData = allAuthorsData.slice(0, maxRecordsPerPage)
                    context.setAuthorListing(currentPageData)
                    setFilterData(allAuthorsData);
                    if (pages <= 1) {
                        setNextButton(true);
                    }
                    else {
                        setNextButton(false)
                    }
                }
                else {
                    const pages = Math.ceil(context.authorContext.favouritAuthors.length / maxRecordsPerPage);
                    setMaxPage(pages);
                    setFilterData(context.authorContext.favouritAuthorListing);
                    const currentPageData = context.authorContext.favouritAuthorListing.slice(0, maxRecordsPerPage);

                    const newdata = { ...context.authorContext, favouritAuthorListing: currentPageData };
                    context.setAuthorContext(newdata)
                    if (pages <= 1) {
                        setNextButton(true);
                    }
                    else {
                        setNextButton(false)
                    }
                }
            }
        }
    }, [context.searchTrigger]);

    useEffect(() => {
        if (name === 'authors') {
            //calculate number of pages required 
            if (!bookmark) {
                const pages = Math.ceil(allAuthorsData.length / maxRecordsPerPage);
                setMaxPage(pages);
                const currentPageData = allAuthorsData.slice(0, maxRecordsPerPage)
                context.setAuthorListing(currentPageData)
                setFilterData(allAuthorsData);
                if (pages <= 1) {
                    setNextButton(true);
                }
                else {
                    setNextButton(false)
                }
            }
            else {
                const pages = Math.ceil(context.authorContext.favouritAuthors.length / maxRecordsPerPage);
                setMaxPage(pages);
                setFilterData(context.authorContext.favouritAuthorListing);
                const currentPageData = context.authorContext.favouritAuthorListing.slice(0, maxRecordsPerPage);
                const newdata = { ...context.authorContext, favouritAuthorListing: currentPageData };
                context.setAuthorContext(newdata)
                if (pages <= 1) {
                    setNextButton(true);
                }
                else {
                    setNextButton(false)
                }
            }

        }
        if (name === 'books') {
            if (bookmark) {

                const pages = Math.ceil(context.favouritBookContext.favouritBookListing?.length / maxRecordsPerPage);
                setMaxPage(pages);
                setFilterData(context.favouritBookContext.favouritBookListing);
                const currentPageData = context.favouritBookContext.favouritBookListing.slice(0, maxRecordsPerPage);
                const newdata = { ...context.favouritBookContext, favouritBookListing: currentPageData };
                context.setFavouritBookContext(newdata)
                if (pages <= 1) {
                    setNextButton(true);
                }
                else {
                    setNextButton(false)
                }
            }

        }
    }, [name])

    return (
        <div className="w-full flex items-center justify-center mt-6">
            {
                maxPage > 1 &&
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
            }
        </div>

    )
}
export default Pagination;