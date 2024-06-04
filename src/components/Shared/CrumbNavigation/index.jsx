import React, { useContext, useEffect, useState } from "react";
import icons from "../../../assets/icons/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { bookListingContext } from "../ContextProvider";

const CrumbNavigation = () => {
    const context = useContext(bookListingContext);
    const { state } = useLocation();
    const navigate = useNavigate();

    const [navigationArray, setNavigationArray] = useState([
        {
            id: 1,
            name: 'contact information',
            path: '/contact',
            disable: false,
        },
        {
            id: 2,
            name: 'shipping method',
            path: '/shipping',
            disable: false,
        },
        {
            id: 3,
            name: 'payment',
            path: '/checkout',
            disable: false,

        },
    ]);

    useEffect(() => {
        if (context.orderSummary.shippingMethod.date?.length > 0) {
            const updatedarray = navigationArray.slice(0, 3);
            setNavigationArray([...updatedarray]);
        }
        else if (state.id == 1) {
            const updatedarray = navigationArray.slice(0, 1);
            setNavigationArray([...updatedarray]);
        }
        else if (state.id == 2) {
            const updatedArray = navigationArray.slice(0, 2);
            setNavigationArray([...updatedArray]);
        }
        else if (state.id == 3) {
            const updatedArray = navigationArray.slice(0, 3);
            setNavigationArray([...updatedArray]);
        }
    }, [state.id])

    const handelNavigate = (path, id) => {
        navigate(`${path}`, {
            state: {
                id: id,
                isActive: true,
            }
        })

    }


    return (
        <div className="flex gap-2 items-center overflow-auto">
            <div>
                <img src={icons.prevPageIcon} alt="" className="w-3 h-3" />
            </div>
            <div className="flex gap-1 small-tab:gap-2">
                <div className="flex gap-1 small-tab:gap-2 items-center">
                    <button onClick={() => handelNavigate('/cart')} className="cursor-pointer hover:text-textYellowColor text-[10px] small-tab:text-xs sm:text-sm uppercase">Back</button>
                    <img src={icons.line} alt="" className="w-3 h-3" />
                </div>
                {
                    navigationArray.map((bread, index) => {
                        return (
                            <div className="flex gap-1 small-tab:gap-2 justify-center items-center" key={index}>
                                <button onClick={() => handelNavigate(bread.path, bread.id)} className={`cursor-pointer ${state.isActive == true && state.id == bread.id ? 'text-textYellowColor' : 'text-textSecondaryColor'} text-[10px] small-tab:text-xs sm:text-sm uppercase text-nowrap`}>{bread.name}</button>
                                <img src={icons.nextPageIcon} alt="" className="w-2 h-2 small-tab:w-3 small-tab:h-3" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CrumbNavigation;