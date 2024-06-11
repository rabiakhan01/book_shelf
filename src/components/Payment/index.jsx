import React, { useContext, useState, useEffect } from "react";
import { Button, InputField, PrevInformation } from "../Shared";
import { bookListingContext } from "../Shared/ContextProvider";
import { useNavigate } from "react-router-dom";
import { allBooksData } from "../../utils/MockupData";

const Payment = () => {
    const cardValidationPattern = /(\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4})$/g;
    const alphabet = /[A-Za-z---*-+\\/]$/g;

    const navigate = useNavigate();
    const context = useContext(bookListingContext);
    const [subTotal, setSubTotal] = useState(0);
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
        if (checked === true && value === "PUD") {
            setPaymentOnDelivery(true);
        }
        else {
            if (name === 'cardNo') {
                if (value.match(alphabet) == null && value.length < 20) {
                    const validNumber = value.match(cardValidationPattern);
                    if (validNumber) {
                        setErrorMessage((prev) => ({
                            ...prev,
                            cardNoError: "",
                        }));
                    }
                    setPaymentDetail((prev) => ({
                        ...prev,
                        [name]: value
                    }));

                }
            }

            if (name === 'expirationDate') {
                setErrorMessage((prev) => ({
                    ...prev,
                    expirationDateError: "",
                }));
                setPaymentDetail((prev) => ({
                    ...prev,
                    [name]: value
                }));
            }
            if (name === 'CVC') {
                if (value.match(alphabet) === null && value.length < 4) {
                    setErrorMessage((prev) => ({
                        ...prev,
                        CVCError: "",
                    }));
                    setPaymentDetail((prev) => ({
                        ...prev,
                        [name]: value
                    }));
                }
            }
        }
        setPaymentOnDelivery(false);


    }
    const handelFormSubmission = (event) => {

        const cardNoValidation = paymentdetail.cardNo.match(cardValidationPattern);
        console.log("🚀 ~ handelFormSubmission ~ cardNoValidation:", cardNoValidation)

        if (paymentdetail.cardNo === '' || !cardNoValidation) {
            setErrorMessage((error) => ({ ...error, cardNoError: 'inValid card Number' }));
        }
        if (paymentdetail.expirationDate === '') {
            setErrorMessage((error) => ({ ...error, expirationDateError: 'expiration date is required' }));
        }
        if (paymentdetail.CVC === '' || paymentdetail.CVC.length < 4) {
            setErrorMessage((error) => ({ ...error, CVCError: 'Invalid CVC' }));
        }
        if (paymentOnDelivery) {
            navigate('/thank-you');
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: [] });
        }
        if (!paymentOnDelivery) {
            if (paymentdetail.cardNo !== '' && paymentdetail.expirationDate !== '' && paymentdetail.CVC !== '' && cardNoValidation && paymentdetail.CVC.length === 3) {
                const formData = {
                    ...context.orderSummary,
                    cardDetail:
                        { ...paymentdetail }
                }
                context.setOrderSummary(formData);
                context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: [] });
                navigate('/thank-you');

            }
        }
        event.preventDefault();
    }

    const editInformation = (step) => {
        context.setStep(step);
    }
    useEffect(() => {
        const priceArray = allBooksData.map((book) => {
            const matchingBook = context.favouritBookContext.cartBooks.find((item) => item.bookID === book.id);
            return matchingBook && book.new_price * matchingBook.quantity;
        }).filter((item) => item !== undefined)
        const totalPrice = priceArray.reduce((a, b) => (a + b), 0);
        setSubTotal(totalPrice);
    }, []);
    return (

        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <PrevInformation
                    heading="contact information"
                    key1="Name"
                    key2="Contact"
                    value1={context.orderSummary.customerName}
                    value2={context.orderSummary.customerNumber}
                    onClick={() => editInformation(1)}
                />
                <PrevInformation
                    heading="shipping method"
                    key1="Date"
                    key2="Adress"
                    value1={context.orderSummary.shippingMethod.date}
                    value2={context.orderSummary.shippingMethod.adress}
                    onClick={() => editInformation(2)}
                />
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                    <div> <h1 className="text-base lg:text-xl uppercase">payment</h1></div>
                    <div className="flex justify-center items-center gap-2 text-sm lg:text-base">
                        <input type="radio" name="paymentMethod" value="byCard" checked={!paymentOnDelivery} onChange={handelChange}></input>By card
                        <input type="radio" name="paymentMethod" value="PUD" onChange={handelChange}></input>Payment upon delivery
                    </div>
                </div>
                {
                    !paymentOnDelivery ?
                        <div className="flex flex-col gap-3">
                            <InputField
                                placeholder="Card Number"
                                type="text"
                                name="cardNo"
                                value={paymentdetail.cardNo}
                                error={errorMessage.cardNoError}
                                onChange={handelChange} />

                            <div className="flex gap-3 w-full">
                                <div className="w-1/2">
                                    <InputField
                                        placeholder="Expiration"
                                        type="date"
                                        name="expirationDate"
                                        value={paymentdetail.expirationDate}
                                        error={errorMessage.expirationDateError}
                                        onChange={handelChange} />
                                </div>
                                <div className="w-1/2">
                                    <InputField placeholder="CVV/CVC" type="text" name="CVC" value={paymentdetail.CVC} error={errorMessage.CVCError} onChange={handelChange} />
                                </div>
                            </div>
                        </div>
                        :
                        ''
                }
            </div>
            <div>
                <Button variant="contained" size="extra-large" onClick={handelFormSubmission}>pay ${subTotal}</Button>
            </div>
        </div>
    )
}

export default Payment;