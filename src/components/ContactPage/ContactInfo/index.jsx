import React from "react";
import { Button, CheckoutLayout, InputField } from "../../Shared";
import { useNavigate } from "react-router-dom";

const ContactInfo = () => {

    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate('/shipping', {
            state: {
                id: 2,
                isActive: true
            }
        });
    }
    return (
        <CheckoutLayout>
            <div className="flex justify-between ">
                <h1 className="text-2xl uppercase">contact information</h1>
                <div className="flex items-center gap-1 text-sm">
                    <p className="text-textLightGrayColor">already have an account?</p>
                    <button>Sign in</button>
                </div>
            </div>
            <div className="">
                <form className="flex flex-col gap-4">
                    <InputField placeholder="Name Surname" />
                    <InputField placeholder="Mobile" />
                    <Button variant="contained" size="extra-large" onClick={handelNavigate}>continue to shipping method</Button>
                </form>
            </div>
        </CheckoutLayout>
    )
}

export default ContactInfo;