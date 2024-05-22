import React from "react";
import PaginationButton from "./PaginationButton";
import icons from '../../../assets/icons/icons';

const Pagination = () => {
    return (
        <div className="flex gap-2 justify-center items-center">
            <div>
                <PaginationButton
                    name="prev"
                    Icon={icons.prevPageIcon}
                    onClick={() => { console.log("previous") }}
                />
            </div>
            <div className="flex justify-center items-center gap-1">
                <PaginationButton
                    name="1"
                    onClick={() => { console.log("1") }}
                />
                <PaginationButton
                    name="2"
                    onClick={() => { console.log("2") }}
                />
                <PaginationButton
                    name="3"
                    onClick={() => { console.log("3") }}
                />
                <div className="flex ml-4 w-0.5 h-0.5 bg-primaryColor"></div>
                <div className="flex w-0.5 h-0.5 bg-primaryColor"></div>
                <div className="flex mr-4 w-0.5 h-0.5 bg-primaryColor"></div>
                <PaginationButton
                    name="9"
                    onClick={() => { console.log("9") }}
                />
                <PaginationButton
                    name="10"
                    onClick={() => { console.log("10") }}
                />
            </div>
            <div>
                <PaginationButton
                    name="next"
                    Icon={icons.nextPageIcon}
                    onClick={() => { console.log("next") }}
                />
            </div>
        </div>
    )
}
export default Pagination;