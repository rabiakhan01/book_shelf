import React, { useContext, useState, useEffect } from "react";
import { Button, CheckoutLayout, InputField, PrevInformation } from "../Shared";
import { bookListingContext } from "../Shared/ContextProvider";
import { useNavigate } from "react-router-dom";
import { allBooksData } from "../../utils/MockupData";
const Checkout = () => {
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
            setPaymentOnDelivery(false);
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
        if (paymentOnDelivery) {
            navigate('/thank-you')
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: [] });
        }
        if (!paymentOnDelivery) {
            if (paymentdetail.cardNo !== '' && paymentdetail.expirationDate !== '' && paymentdetail.CVC !== '') {
                const formData = {
                    ...context.orderSummary,
                    cardDetail:
                        { ...paymentdetail }
                }
                context.setOrderSummary(formData);
                navigate('/thank-you');
                context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: [] });
            }
        }
        event.preventDefault();
    }

    const editInformation = (path) => {
        if (path == '/contact') {
            navigate(`${path}`, {
                state: {
                    id: 1,
                    isActive: true,
                }
            })
        }
        if (path == '/shipping') {
            navigate(`${path}`, {
                state: {
                    id: 2,
                    isActive: true
                }
            })
        }
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
        <CheckoutLayout>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <PrevInformation
                        heading="contact information"
                        key1="Name"
                        key2="Contact"
                        value1={context.orderSummary.customerName}
                        value2={context.orderSummary.customerNumber}
                        onClick={() => editInformation('/contact')}
                    />
                    <PrevInformation
                        heading="shipping method"
                        key1="Date"
                        key2="Adress"
                        value1={context.orderSummary.shippingMethod.date}
                        value2={context.orderSummary.shippingMethod.adress}
                        onClick={() => editInformation('/shipping')}
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

                            </div>
                            :
                            ''
                    }
                </div>
                <div>
                    <Button variant="contained" size="extra-large" onClick={handelFormSubmission}>pay ${subTotal}</Button>
                </div>
            </div>
        </CheckoutLayout>
    )
}

export default Checkout;