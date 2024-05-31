import React from "react";
import InputField from '../InputField';

const OrderSummary = () => {
    return (
        <div className="flex flex-col gap-4 text-textSecondaryColor w-1/2">
            <div className="flex flex-col gap-3 bg-lightBlackColor rounded-xl p-4">
                <div className="flex justify-between ">
                    <p className="uppercase text-xl">order summary</p>
                    <button className="border-y-transparent border-t-transparent border-b-2 border-b-primaryColor uppercase">edit</button>
                </div>
                <div className="flex justify-between">

                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between gap-2">
                        <p className="uppercase font-medium">books</p>
                        <p>Hello I am erik</p>
                        <p>Muscle</p>
                        <p className="font-medium">Subtotal</p>
                        <p className="font-medium">Shipping</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="uppercase font-medium">qty</p>
                        <p>1</p>
                        <p>1</p>
                        <p>2</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <p className="uppercase font-medium">price</p>
                        <p>$10</p>
                        <p>$22</p>
                        <p>$33</p>
                        <p className="uppercase">free</p>
                    </div>
                </div>
                <div className="flex justify-between text-xl font-medium">
                    <p className="uppercase">total</p>
                    <p>$33</p>
                </div>
            </div>
            <div className="flex gap-4">
                <InputField placeholder="Promo code" />
                <button className="uppercase px-6 rounded-xl py-2 bg-textLightGrayColor text-textPrimaryColor font-medium">Apply</button>
            </div>
        </div>
    )
}

export default OrderSummary;