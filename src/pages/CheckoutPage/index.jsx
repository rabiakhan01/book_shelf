import React, { useContext, useEffect, useState } from "react";
import { OrderSummary, Layout } from "../../components/Shared";
import ContactInformation from "../../components/ContactInformation";
import Shipping from "../../components/Shipping";
import icons from "../../assets/icons/icons";
import Payment from "../../components/Payment";
import { bookListingContext } from "../../components/Shared/ContextProvider";
import { Navigate, useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const context = useContext(bookListingContext);
    const navigate = useNavigate();

    const [navigationArray, setNavigationArray] = useState([
        {
            id: 1,
            name: 'contact information',
            isActive: true,
            disable: false,
        },
        {
            id: 2,
            name: 'shipping method',
            isActive: false,
            disable: true,
        },
        {
            id: 3,
            name: 'payment',
            isActive: false,
            disable: true,

        },
    ]);

    const handelSteps = (id) => {
        if (id === 1) {
            context.setStep(1);
        }
        if (id === 2) {
            context.setStep(2);
        }
        if (id === 3) {
            context.setStep(3)
        }
    }

    const gotoCartPage = () => {
        navigate('/cart')
    }
    useEffect(() => {

        if (context.step === 2) {
            const newArray = navigationArray.map((item, index) => {
                if (index < 2) {
                    return { ...item, disable: false }
                }
                else {
                    return item
                }
            });
            setNavigationArray([...newArray]);
        }
        if (context.step === 3) {
            const newArray = navigationArray.map((item, index) => {
                if (index < 3) {
                    return { ...item, disable: false }
                }
                else {
                    return item
                }
            });
            setNavigationArray([...newArray]);
        }

    }, [context.step]);

    if (context.favouritBookContext.cartBooks?.length > 0) {
        return (
            <Layout>
                <div className="bg-secondaryColor mb-6 mt-8 h-auto rounded-2xl p-2 sm:p-4 text-textSecondaryColor">
                    <div className="py-4 sm:py-6">
                        <div className="flex gap-2 items-center overflow-auto">
                            <div>
                                <img src={icons.prevPageIcon} alt="" className="w-3 h-3" />
                            </div>
                            <div className="flex gap-1 small-tab:gap-2">
                                <div className="flex gap-1 small-tab:gap-2 items-center">
                                    <button className="cursor-pointer hover:text-textYellowColor text-[10px] small-tab:text-xs sm:text-sm uppercase" onClick={gotoCartPage}>Back</button>
                                    <img src={icons.line} alt="" className="w-3 h-3" />
                                </div>
                                {
                                    navigationArray.map((bread, index) => {
                                        return (
                                            <div className="flex gap-1 small-tab:gap-2 justify-center items-center" key={index}>
                                                <button disabled={bread.disable} onClick={() => handelSteps(bread.id)} className={`cursor-pointer ${bread.id === context.step ? 'text-textYellowColor' : bread.disable ? 'text-textLightGrayColor cursor-default' : 'text-textSecondaryColor'} text-[10px] small-tab:text-xs sm:text-sm uppercase text-nowrap`}>{bread.name}</button>
                                                <img src={icons.nextPageIcon} alt="" className="w-2 h-2 small-tab:w-3 small-tab:h-3" />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between md:p-6 w-full">
                        <div className="w-full lg:w-[50%] flex flex-col gap-3 ">
                            {
                                context.step === 1 ? <ContactInformation /> :
                                    context.step === 2 ? <Shipping /> :
                                        context.step === 3 ? <Payment /> :
                                            <ContactInformation />
                            }
                        </div>
                        <div className="flex w-full lg:w-[50%] lg:justify-end">
                            <OrderSummary />
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
    else {
        return <Navigate to='/' />
    }
}

export default CheckoutPage;