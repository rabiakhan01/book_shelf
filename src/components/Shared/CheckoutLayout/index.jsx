import React from "react";
import CrumbNavigation from "../CrumbNavigation";
import OrderSummary from "../OrderSummary";
const CheckoutLayout = ({ children }) => {
    return (
        <div className="bg-secondaryColor h-auto rounded-2xl p-4 text-textSecondaryColor">
            <div className="py-6">
                <CrumbNavigation />
            </div>
            <div className="flex justify-between p-10">
                <div className="w-[40%] flex flex-col gap-3 ">
                    {children}
                </div>
                <div className="flex w-[60%] justify-end">
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default CheckoutLayout;