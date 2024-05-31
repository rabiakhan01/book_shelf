import React from "react";
import { Button, CheckoutLayout, InputField, PrevInformation } from "../Shared";

const Checkout = () => {
    return (
        <CheckoutLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <PrevInformation
                        heading="contact information"
                        key1="Name"
                        key2="Contact"
                        value1="Bahruz Akhundov"
                        value2="+994 51850 00 23"
                    />
                    <PrevInformation
                        heading="shipping method"
                        key1="Date"
                        key2="Adress"
                        value1="Today, 16:00"
                        value2="Baku, Nizami st. 165"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between">
                        <div> <h1 className="text-xl uppercase">payment</h1></div>
                        <div className="flex gap-2">
                            <input type="radio"></input>By card
                            <input type="radio"></input>Payment upon delivery
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <InputField placeholder="Card Number" />
                        </div>
                        <div className="flex gap-3">
                            <InputField placeholder="Expiration" />
                            <InputField placeholder="CVV/CVC" />
                        </div>
                        <div>
                            <Button variant="contained" size="extra-large">pay $33.0 </Button>
                        </div>
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}

export default Checkout;