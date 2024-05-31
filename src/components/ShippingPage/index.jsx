import React from "react";
import { Button, PrevInformation } from '../Shared';
import { CheckoutLayout, InputField } from "../Shared";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
const Shipping = () => {
    const naviagte = useNavigate();

    const handelNavigate = () => {
        naviagte('/checkout', {
            state: {
                id: 3,
                isActive: true,
            }
        })
    }
    return (
        <CheckoutLayout
        >
            <div>
                <PrevInformation
                    heading="contact information"
                    key1="Name"
                    key2="Contact"
                    value1="Bahruz Akhundov"
                    value2="+994 51850 00 23"
                />
            </div>
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
                            <Button variant="contained" size="extra-large" onClick={handelNavigate}>continue to payment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}

export default Shipping;