import React from "react";

const AllProductsLayout = ({ children }) => {
    return (
        <div className="flex gap-2 w-full">
            {children}
        </div>
    )
}

export default AllProductsLayout;