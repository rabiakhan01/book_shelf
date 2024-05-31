import React, { useContext, useState } from "react";
import { Button, CheckoutLayout, InputField } from "../../Shared";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../../Shared/ContextProvider";

const ContactInfo = () => {

    const navigate = useNavigate();
    const context = useContext(bookListingContext);
    const [customerInfo, setCustomerInfo] = useState({
        customerName: '',
        mobileNo: '',
    });

    const handelChange = (event) => {
        const { value, name } = event.target;
        setCustomerInfo((prev) => ({ ...prev, [name]: value }))
    }

    const handelCustomerInfo = () => {

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
                    <InputField placeholder="Name Surname" name="customerName" value={customerInfo.name} onChange={handelChange} />
                    <InputField placeholder="Mobile" name="mobileNo" value={customerInfo.mobileNo} onChange={handelChange} />
                    <Button variant="contained" size="extra-large" onClick={handelCustomerInfo}>continue to shipping method</Button>
                </form>
            </div>
        </CheckoutLayout>
    )
}

export default ContactInfo;