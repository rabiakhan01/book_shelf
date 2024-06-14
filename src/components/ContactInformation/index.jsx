import React, { useContext, useState } from "react";
import { Button, CheckoutLayout, InputField } from "../Shared";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../Shared/ContextProvider";

const ContactInformation = () => {
    const validationPattern = /(\+\d{2}[ ]\d{10})$/g;
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
            }))
            setCustomerInfo((prev) => ({
                ...prev,
                [name]: value
            }));

        }

        if (name === 'mobileNo') {
            const alphabet = /[A-Za-z---*\\/]$/g;
            if (value.match(alphabet) == null && value.length < 15) {
                const validNumber = value.match(validationPattern);

                if (validNumber) {
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


        }


    }

    const handelCustomerInfo = (event) => {

        const mobileValidation = customerInfo.mobileNo.match(validationPattern);

        if (customerInfo.customerName === '') {
            setErrorMessage((error) => ({ ...error, customerNameError: 'username is required' }));
        }
        if (customerInfo.mobileNo === '' || !mobileValidation) {
            setErrorMessage((error) => ({ ...error, mobileNoError: 'mobile number is required' }));
        }

        if (customerInfo.customerName !== '' && customerInfo.mobileNo !== '' && mobileValidation) {
            const contactData =
            {
                ...context.orderSummary,
                orderId: Math.floor(Math.random() * 100),
                customerName: customerInfo.customerName,
                customerNumber: customerInfo.mobileNo,
            };
            context.setOrderSummary(contactData);
            context.setStep(2);
        }
        event.preventDefault();
    }
    return (

        <div className="flex flex-col gap-4">
            <div className="flex flex-col-reverse gap-2 small-tab:flex-row justify-between ">
                <h1 className="text-sm sm:text-base xl:text-xl uppercase">contact information</h1>

            </div>
            <div className="w-full ">
                <form className="flex flex-col gap-3">
                    <InputField
                        placeholder="Full Name"
                        type="text"
                        name="customerName"
                        value={customerInfo.customerName}
                        onChange={handelChange}
                        error={errorMessage.customerNameError} />
                    <InputField
                        placeholder="+92 1234567891"
                        name="mobileNo"
                        type="text"
                        value={customerInfo.mobileNo}
                        onChange={handelChange}
                        error={errorMessage.mobileNoError}
                    />
                    <Button variant="contained" size="extra-large" type="button" onClick={handelCustomerInfo}>continue to shipping method</Button>
                </form>
            </div>
        </div>
    )
}

export default ContactInformation;