import React from "react";
import { Button } from '../Shared';
import { CheckoutLayout, InputField } from "../Shared";
const Shipping = () => {
    return (
        <CheckoutLayout>
            <div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-2xl uppercase">Shipping method</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                            <InputField placeholder="Today" />
                            <InputField placeholder="Time" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <InputField placeholder="Address" />
                            <textarea placeholder="Note" className="bg-primaryColor h-24 rounded-xl pl-3 pt-2"></textarea>
                            <Button variant="contained" size="extra-large">continue to payment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}

export default Shipping;