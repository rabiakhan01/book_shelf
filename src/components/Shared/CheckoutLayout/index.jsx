import React from "react";
import CrumbNavigation from "../CrumbNavigation";
import OrderSummary from "../OrderSummary";
const CheckoutLayout = ({ children }) => {
    return (
        <div className="bg-secondaryColor mb-6 mt-8 h-auto rounded-2xl p-2 sm:p-4 text-textSecondaryColor">
            <div className="py-4 sm:py-6">
                <CrumbNavigation
                />
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between md:p-6 w-full">
                <div className="w-full lg:w-[50%] flex flex-col gap-3 ">
                    {children}
                </div>
                <div className="flex w-full lg:w-[50%] lg:justify-end">
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default CheckoutLayout;