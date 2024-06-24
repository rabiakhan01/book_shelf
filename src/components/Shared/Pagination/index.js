import React, { useState, useContext, useEffect } from "react";
import PaginationButton from "./PaginationButton";
import icons from '../../../assets/icons';
import { bookListingContext } from "../ContextProvider";
import { allAuthorsData, allBooksData } from "../../../utils/MockupData";

const Pagination = ({ maxRecordsPerPage, name, bookmark }) => {
    const context = useContext(bookListingContext);

    //calculate the number of maximum pages required in pagination
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
    // console.log("max", calculateMaxPage())
    const [maxPage, setMaxPage] = useState(calculateMaxPage());
    // console.log("🚀 ~ Pagination ~ maxPage:", maxPage)
    const [filterData, setFilterData] = useState([]);
    // console.log("🚀 ~ Pagination ~ filterData:", filterData)
    const [currentPage, setCurrentPage] = useState();
    const [prevButton, setPrevButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);
    const [pageArray, setPageArray] = useState([]);

    //create a an array of total pages required with active property
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

        const firstIndexOfPage = lastIndexOfPage - maxRecordsPerPage;

        // handel the page change for the books listing
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
        //handel the page change for author listing
        if (name === 'authors') {

            // when serahc is not applied 
            if (!context.searchTrigger) {

                //handle theb listing of author listing
                if (!bookmark) {
                    const currentPageData = allAuthorsData.slice(firstIndexOfPage, lastIndexOfPage);
                    context.setAuthorListing(currentPageData);
                }

                //handel the listing of author in bookmark page
                else {
                    const currentPageData = filterData.slice(firstIndexOfPage, lastIndexOfPage);
                    context.setAuthorContext({ ...context.authorContext, favouritAuthorListing: currentPageData });
                }
            }
            //handel the listing of author when search is applied
            else {
                const currentPageData = filterData.slice(firstIndexOfPage, lastIndexOfPage);
                context.setAuthorListing(currentPageData);
            }

            //when click on the page button 
            const element = document.getElementById('author-card');
            element.scroll({ top: 0, behavior: "smooth" });
        }

        window.scroll({
            top: 0,
            behavior: "smooth"
        })

    }

    //handel next page click
    const nextPage = () => {
        handelPageChange(currentPage + 1);
    }
    //handel the previous page click
    const prevPage = () => {
        handelPageChange(currentPage - 1);
    }
    //handel the pagination after the filters are applied
    useEffect(() => {

        //when the search is not applied and books listing are handeled
        if (!context.searchTrigger && name == 'books') {
            // if filters on the book listing are applied
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

            //if the filters on the book listing are not applied
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

    //handel the next and previous page diability when the current page changes
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

    //handel the max pages
    useEffect(() => {
        const newArray = totalPage.map((page, index) => {
            if (index == 0) {
                return { ...page, active: true }
            }
            else {
                return page;
            }
        })
        //console.log("🚀 ~ newArray ~ newArray:", newArray)
        setPageArray([...newArray])

    }, [maxPage])

    //handel the pahgination when the search is applied
    useEffect(() => {

        let pages;
        if (context.searchTrigger) {
            if (name === 'books') {
                const filteredListing = context.bookPageContext.bookListing;
                setFilterData([...filteredListing]);
                pages = Math.ceil(context.bookPageContext.bookListing.length / maxRecordsPerPage)
                setMaxPage(pages);
                const currentPageData = context.bookPageContext.bookListing.slice(0, maxRecordsPerPage)
                context.setBookPageContext({ ...context.bookPageContext, bookFilters: [], bookListing: currentPageData })
            }
            if (name === 'authors') {
                setFilterData(context.authorListing);
                pages = Math.ceil(context.authorListing.length / maxRecordsPerPage)
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
        }
    }, [context.searchTrigger]);

    //handel when the pagination is applied for the author and book in book mark page and author page
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

                context.setAuthorContext({ ...context.authorContext, favouritAuthorListing: currentPageData });
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

                const pages = Math.ceil(context.favouritBookContext.favouritBooks?.length / maxRecordsPerPage);
                setMaxPage(pages);
                const books = allBooksData.map((item) => {
                    const matchingBook = context.favouritBookContext.favouritBooks.find((books) => books === item.id);
                    return matchingBook ? item : undefined
                }).filter((item) => item !== undefined);

                setFilterData(books);
                const currentPageData = books.slice(0, maxRecordsPerPage);
                context.setFavouritBookContext({ ...context.favouritBookContext, favouritBookListing: currentPageData })
                if (pages <= 1) {
                    setNextButton(true);
                }
                else {
                    setNextButton(false)
                }
            }

        }
    }, [name]);

    //handle the pagination when any changes in the bookmarked authors happens
    useEffect(() => {

        if (bookmark && name === "authors") {

            const lastIndexOfPage = currentPage * maxRecordsPerPage;
            // console.log("🚀 ~ handelPageChange ~ lastIndexOfPage:", lastIndexOfPage)

            const firstIndexOfPage = lastIndexOfPage - maxRecordsPerPage;

            const authors = allAuthorsData.map((item) => {
                const matchingAuthor = context.authorContext.favouritAuthors.find((author) => author === item.id);
                return matchingAuthor ? item : undefined
            }).filter((item) => item !== undefined);

            const pages = Math.ceil(authors.length / maxRecordsPerPage);
            setMaxPage(pages);
            setFilterData(authors);
            if (currentPage > 1) {
                const currentPageData = authors.slice(firstIndexOfPage, lastIndexOfPage);
                if (currentPageData.length < 1) {
                    const currentPageData = authors.slice(0, maxRecordsPerPage);
                    context.setAuthorContext({ ...context.authorContext, favouritAuthorListing: currentPageData })

                }
                else {

                    context.setAuthorContext({ ...context.authorContext, favouritAuthorListing: currentPageData })
                }
            }

            if (pages < 1) {
                setNextButton(true);
            }
            else {
                setNextButton(false)
            }
        }
    }, [context.authorContext.favouritAuthors])

    useEffect(() => {

        if (bookmark && name === "books") {

            const lastIndexOfPage = currentPage * maxRecordsPerPage;
            const firstIndexOfPage = lastIndexOfPage - maxRecordsPerPage;

            const books = allBooksData.map((item) => {
                const matchingBook = context.favouritBookContext.favouritBooks.find((book) => book === item.id);
                return matchingBook ? item : undefined
            }).filter((item) => item !== undefined);

            const pages = Math.ceil(books.length / maxRecordsPerPage);
            //console.log("🚀 ~ useEffect 5 ~ pages:", pages)

            setMaxPage(pages);
            setFilterData(books);

            if (currentPage > 1) {
                const currentPageData = books.slice(firstIndexOfPage, lastIndexOfPage);
                if (currentPageData.length < 1) {
                    const currentPageData = books.slice(0, maxRecordsPerPage);
                    context.setFavouritBookContext({ ...context.favouritBookContext, favouritBookListing: currentPageData })
                }
                else {

                    context.setFavouritBookContext({ ...context.favouritBookContext, favouritBookListing: currentPageData })
                }
            }

            if (pages < 1) {
                setNextButton(true);
            }
            else {
                setNextButton(false)
            }
        }
    }, [context.favouritBookContext.favouritBooks])

    return (
        <div className="w-full flex items-center justify-center mt-6">
            {
                maxPage > 1 &&
                <div className="flex gap-2 justify-center items-center">
                    <div>
                        <PaginationButton
                            name="prev"
                            onChange={() => { }}
                            onClick={() => prevPage()}
                            isIcon={true}
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
                                        isIcon={false}
                                        onClick={() => handelPageChange(page.name)}
                                    />
                                )
                            })
                        }
                    </div>
                    <div>
                        <PaginationButton
                            name="next"
                            onChange={() => { }}
                            onClick={() => nextPage()}
                            isIcon={true}
                            disabled={nextButton}
                        />
                    </div>
                </div>
            }
        </div>

    )
}
export default Pagination;