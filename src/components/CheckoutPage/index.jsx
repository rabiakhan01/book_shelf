import React, { useContext, useState } from "react";
import { Button, CheckoutLayout, InputField, PrevInformation } from "../Shared";
import { bookListingContext } from "../Shared/ContextProvider";

const Checkout = () => {
    const context = useContext(bookListingContext);
    const [paymentdetail, setPaymentDetail] = useState({
        cardNo: '',
        expirationDate: '',
        CVC: '',
    });
    const [paymentOnDelivery, setPaymentOnDelivery] = useState();
    const [errorMessage, setErrorMessage] = useState({
        cardNoError: '',
        expirationDateError: '',
        CVCError: ''
    })

    const handelChange = (event) => {
        const { value, name, checked } = event.target;

        if (checked === true && value === "byCard") {
            if (name === 'cardNo') {
                setErrorMessage((prev) => ({
                    ...prev,
                    cardNoError: "",
                }));
            }

            if (name === 'expirationDate') {
                setErrorMessage((prev) => ({
                    ...prev,
                    expirationDateError: "",
                }));
            }
            if (name === 'CVC') {
                setErrorMessage((prev) => ({
                    ...prev,
                    CVCError: "",
                }));
            }

            setPaymentDetail((prev) => ({
                ...prev,
                [name]: value
            }));
            setPaymentOnDelivery(false)
        }
        if (checked === true && value === "PUD") {

            setPaymentOnDelivery(true);
        }
    }
    const handelFormSubmission = (event) => {
        if (paymentdetail.cardNo === '') {
            setErrorMessage((error) => ({ ...error, cardNoError: 'card number is required' }));
        }
        if (paymentdetail.expirationDate === '') {
            setErrorMessage((error) => ({ ...error, expirationDateError: 'expiration date is required' }));
        }
        if (paymentdetail.CVC === '') {
            setErrorMessage((error) => ({ ...error, CVCError: 'CVC/CVV is required' }));
        }

        if (paymentdetail.cardNo !== '' && paymentdetail.expirationDate !== '' && paymentdetail.CVC !== '') {
            const formData = {
                ...context.orderSummary,
                cardDetail:
                    { ...paymentdetail }
            }
            context.setOrderSummary(formData);
        }

        event.preventDefault();
    }
    console.log("formdata", context.orderSummary)
    return (
        <CheckoutLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <PrevInformation
                        heading="contact information"
                        key1="Name"
                        key2="Contact"
                        value1={context.orderSummary.customerName}
                        value2={context.orderSummary.customerNumber}
                    />
                    <PrevInformation
                        heading="shipping method"
                        key1="Date"
                        key2="Adress"
                        value1={context.orderSummary.shippingMethod.date}
                        value2={context.orderSummary.shippingMethod.adress}
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between">
                        <div> <h1 className="text-xl uppercase">payment</h1></div>
                        <div className="flex gap-2">
                            <input type="radio" name="paymentMethod" value="byCard" checked={!paymentOnDelivery} onChange={handelChange}></input>By card
                            <input type="radio" name="paymentMethod" value="PUD" onChange={handelChange}></input>Payment upon delivery
                        </div>
                    </div>
                    {
                        !paymentOnDelivery ?
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <InputField placeholder="Card Number" type="number" name="cardNo" value={paymentdetail.cardNo} errorMessage={errorMessage.cardNoError} onChange={handelChange} />
                                    {
                                        errorMessage.cardNoError ? <p className="text-errorColor text-base">{errorMessage.cardNoError}</p> : ''
                                    }
                                </div>
                                <div className="flex gap-3 w-full">
                                    <div className="flex flex-col gap-1 w-1/2">
                                        <InputField placeholder="Expiration" type="date" name="expirationDate" value={paymentdetail.expirationDate} errorMessage={errorMessage.expirationDateError} onChange={handelChange} />
                                        {
                                            errorMessage.expirationDateError ? <p className="text-errorColor text-base">{errorMessage.expirationDateError}</p> : ''
                                        }
                                    </div>
                                    <div className="flex flex-col gap-1 w-1/2">
                                        <InputField placeholder="CVV/CVC" type="text" name="CVC" value={paymentdetail.CVC} errorMessage={errorMessage.CVCError} onChange={handelChange} />
                                        {
                                            errorMessage.CVCError ? <p className="text-errorColor text-base">{errorMessage.CVCError}</p> : ''
                                        }
                                    </div>
                                </div>
                                <div>
                                    <Button variant="contained" size="extra-large" onClick={handelFormSubmission}>pay $33.0 </Button>
                                </div>
                            </div>
                            :
                            ''
                    }
                </div>
            </div>
        </CheckoutLayout>
    )
}

export default Checkout;