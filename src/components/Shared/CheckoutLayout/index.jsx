import React from "react";
import CrumbNavigation from "../CrumbNavigation";
const CheckoutLayout = ({ children }) => {
    return (
        <div className="bg-secondaryColor min-h-[680px] rounded-2xl p-4 text-textSecondaryColor">
            <div className="py-6">
                <CrumbNavigation />
            </div>
            <div className="flex justify-between">
                <div className="w-[40%] flex flex-col gap-3 ">
                    {children}
                </div>
                <div className="flex w-[60%] justify-end">
                    order Summary
                </div>
            </div>
        </div>
    )
}

export default CheckoutLayout;