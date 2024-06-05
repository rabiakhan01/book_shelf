import React, { useContext, useState } from "react";
import { Button, CheckoutLayout, InputField } from "../../Shared";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../../Shared/ContextProvider";

const ContactInfo = () => {

    const navigate = useNavigate();
    const context = useContext(bookListingContext);
    const [customerInfo, setCustomerInfo] = useState({
        customerId: 0,
        customerName: context.orderSummary.customerName,
        mobileNo: context.orderSummary.customerNumber,
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
            const contactData =
            {
                ...context.orderSummary,
                orderId: Math.floor(Math.random() * 100),
                customerName: customerInfo.customerName,
                customerNumber: customerInfo.mobileNo,
            };
            context.setOrderSummary(contactData);
            navigate('/shipping', {
                state: {
                    id: 2,
                    isActcive: true,
                }
            });
        }
        event.preventDefault();
    }
    // console.log("🚀 ~ handelCustomerInfo ~ context.orderSummary.contactInformation:", context.orderSummary)

    return (
        <CheckoutLayout>
            <div className="flex flex-col-reverse gap-2 small-tab:flex-row justify-between ">
                <h1 className="text-sm sm:text-base xl:text-xl uppercase">contact information</h1>
                <div className="flex items-center gap-1 text-sm ">
                    <p className="text-textLightGrayColor">already have an account?</p>
                    <button>Sign in</button>
                </div>
            </div>
            <div className="w-full ">
                <form className="flex flex-col gap-3">
                    <InputField
                        placeholder="Name Surname"
                        type="text"
                        name="customerName"
                        value={customerInfo.customerName}
                        onChange={handelChange}
                        error={errorMessage.customerNameError}
                    />
                    <InputField
                        placeholder="Mobile"
                        name="mobileNo"
                        type="number"
                        value={customerInfo.mobileNo}
                        onChange={handelChange}
                        error={errorMessage.mobileNoError}
                    />
                    <Button variant="contained" size="extra-large" type="button" onClick={handelCustomerInfo}>continue to shipping method</Button>
                </form>
            </div>
        </CheckoutLayout>
    )
}

export default ContactInfo;