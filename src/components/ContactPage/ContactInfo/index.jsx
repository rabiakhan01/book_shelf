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
    const [errorMessage, setErrorMessage] = useState({
        customerNameError: '',
        mobileNoError: '',
    });

    const handelChange = (event) => {
        const { value, name } = event.target;
        if (name === 'customerName') {
            setErrorMessage((prev) => ({
                ...prev,
                customerNameError: "",
            }));
        }

        if (name === 'mobileNo') {
            setErrorMessage((prev) => ({
                ...prev,
                mobileNoError: "",
            }));
        }

        setCustomerInfo((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    const handelCustomerInfo = (event) => {

        if (customerInfo.customerName === '') {
            setErrorMessage((error) => ({ ...error, customerNameError: 'username is required' }));
        }
        if (customerInfo.mobileNo === '') {
            setErrorMessage((error) => ({ ...error, mobileNoError: 'mobile number is required' }));
        }

        if (customerInfo.customerName !== '' && customerInfo.mobileNo !== '') {
            navigate('/shipping', {
                state: {
                    id: 2,
                    isActcive: true
                }
            });
        }
        event.preventDefault();
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
                <form className="flex flex-col gap-3">
                    <div className="flex flex-col h-auto gap-1">
                        <InputField placeholder="Name Surname" type="text" name="customerName" value={customerInfo.customerName} onChange={handelChange} errorMessage={errorMessage.customerNameError} />
                        {
                            errorMessage.customerNameError ? <p className="text-errorColor text-base">{errorMessage.customerNameError}</p> : ''
                        }
                    </div>
                    <div className="flex flex-col gap-1 h-auto">
                        <InputField placeholder="Mobile" name="mobileNo" type="number" value={customerInfo.mobileNo} onChange={handelChange} errorMessage={errorMessage.mobileNoError} />
                        {
                            errorMessage.mobileNoError ? <p className="text-errorColor text-base">{errorMessage.mobileNoError}</p> : ''
                        }
                    </div>
                    <Button variant="contained" size="extra-large" type="button" onClick={handelCustomerInfo}>continue to shipping method</Button>
                </form>
            </div>
        </CheckoutLayout>
    )
}

export default ContactInfo;