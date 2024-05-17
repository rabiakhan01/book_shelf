import React from "react";

const AllProductsLayout = ({ children }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 w-full">
            {children}
        </div>
    )
}

export default AllProductsLayout;