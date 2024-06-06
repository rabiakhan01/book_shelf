import React, { useContext, useState } from "react";
import { Button, PrevInformation } from '../Shared';
import { CheckoutLayout, InputField } from "../Shared";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../Shared/ContextProvider";
const Shipping = () => {
    const naviagte = useNavigate();
    const context = useContext(bookListingContext);
    const [shippingInfo, setShippingInfo] = useState({
        date: context.orderSummary.shippingMethod.date,
        time: context.orderSummary.shippingMethod.time,
        adress: context.orderSummary.shippingMethod.adress,
        note: context.orderSummary.shippingMethod.note,
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
            context.setStep(3);
        }
        event.preventDefault();
    }

    const editInformation = () => {
        context.setStep(1);
    }
    return (

        <div>
            <div>
                <PrevInformation
                    heading="contact information"
                    key1="Name"
                    key2="Contact"
                    value1={context.orderSummary.customerName}
                    value2={context.orderSummary.customerNumber}
                    onClick={editInformation}
                />
            </div>
            <div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-base lg:text-xl uppercase">Shipping method</h1>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col sm:flex-row w-full gap-3">
                            <div className="w-full sm:w-[50%]">
                                <InputField placeholder="Date" type="date" name="date" value={shippingInfo.date} onChange={handelChange} error={errorMessage.dateError} />

                            </div>
                            <div className="w-full sm:w-[50%]">
                                <InputField placeholder="Time" type="time" name="time" value={shippingInfo.time} onChange={handelChange} error={errorMessage.timeError} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <InputField placeholder="adress" type="text" name="adress" value={shippingInfo.adress} onChange={handelChange} error={errorMessage.adressError} />

                            <textarea placeholder="Note" className="bg-primaryColor text-blackColor h-24 rounded-xl pl-3 pt-2"></textarea>
                            <Button variant="contained" size="extra-large" type="button" onClick={handelShippingData}>continue to payment</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Shipping;