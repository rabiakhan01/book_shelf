import React, { useContext, useState } from "react";
import { Button, PrevInformation } from '../Shared';
import { CheckoutLayout, InputField } from "../Shared";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../Shared/ContextProvider";
const Shipping = () => {
    const naviagte = useNavigate();
    const context = useContext(bookListingContext);
    const [shippingInfo, setShippingInfo] = useState({
        date: '',
        time: '',
        adress: '',
        note: '',
    });
    const [errorMessage, setErrorMessage] = useState({
        dateError: '',
        timeError: '',
        adressError: '',
    });
    const handelChange = (event) => {
        const { value, name } = event.target;

        if (name === 'date') { setErrorMessage((prev) => ({ ...prev, dateError: '' })); }
        if (name === 'time') { setErrorMessage((prev) => ({ ...prev, timeError: '' })); }
        if (name === 'adress') { setErrorMessage((prev) => ({ ...prev, adressError: '' })); }

        setShippingInfo((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    const handelShippingData = (event) => {

        if (shippingInfo.time === '') {
            setErrorMessage((error) => ({ ...error, dateError: 'date is required' }));
        }
        if (shippingInfo.time === '') {
            setErrorMessage((error) => ({ ...error, timeError: 'time is required' }));

        }
        if (shippingInfo.adress === '') {
            setErrorMessage((error) => ({ ...error, adressError: 'adress is required' }));
        }

        if (shippingInfo.date !== '' && shippingInfo.time !== '' && shippingInfo.adress !== '') {
            const shippingData = {
                ...context.orderSummary,
                shippingMethod:
                {
                    ...shippingInfo
                }

            }
            context.setOrderSummary(shippingData);
            naviagte('/checkout', {
                state: {
                    id: 3,
                    isActcive: true
                }
            });
        }
        event.preventDefault();
    }
    console.log("order summary", context.orderSummary)
    return (
        <CheckoutLayout
        >
            <div>
                <PrevInformation
                    heading="contact information"
                    key1="Name"
                    key2="Contact"
                    value1={context.orderSummary.customerName}
                    value2={context.orderSummary.customerNumber}
                />
            </div>
            <div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-2xl uppercase">Shipping method</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex w-full gap-3">
                            <div className="flex flex-col gap-1 w-[50%]">
                                <InputField placeholder="Date" type="date" name="date" value={shippingInfo.date} onChange={handelChange} errorMessage={errorMessage.dateError} />
                                {
                                    errorMessage.dateError ? <p className="text-errorColor">{errorMessage.dateError}</p> : ''
                                }
                            </div>
                            <div className="flex flex-col gap-1 w-[50%]">
                                <InputField placeholder="Time" type="time" name="time" value={shippingInfo.time} onChange={handelChange} errorMessage={errorMessage.timeError} />
                                {
                                    errorMessage.timeError ? <p className="text-errorColor">{errorMessage.timeError}</p> : ''
                                }
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <InputField placeholder="adress" type="text" name="adress" value={shippingInfo.adress} onChange={handelChange} errorMessage={errorMessage.adressError} />
                                {
                                    errorMessage.adressError ? <p className="text-errorColor">{errorMessage.adressError}</p> : ''
                                }
                            </div>
                            <textarea placeholder="Note" className="bg-primaryColor text-blackColor h-24 rounded-xl pl-3 pt-2"></textarea>
                            <Button variant="contained" size="extra-large" type="button" onClick={handelShippingData}>continue to payment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </CheckoutLayout>
    )
}

export default Shipping;