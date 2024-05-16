import React from "react";

const AllProductsLayout = () => {
    return (
        <div className="flex gap-2 w-full">
            <div className="flex flex-col w-60 rounded-md h-60 bg-primaryColor">filters</div>
            <div className="flex h-60 w-full bg-primaryColor">cards</div>
        </div>
    )
}

export default AllProductsLayout;