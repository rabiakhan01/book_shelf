import React from "react";
import icons from "../../../assets/icons/icons";
import { useLocation, useNavigate } from "react-router-dom";

const CrumbNavigation = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const navigationArray = [
        {
            id: 1,
            name: 'contact information',
            path: '/contact',

        },
        {
            id: 2,
            name: 'shipping method',
            path: '/shipping',

        },
        {
            id: 3,
            name: 'payment',
            path: '/checkout',

        },
    ];

    const handelNavigate = (path, id) => {
        navigate(`${path}`, {
            state: {
                id: id,
                isActive: true,
            }
        })
    }
    return (
        <div className="flex gap-2 items-center uppercase">
            <div>
                <img src={icons.prevPageIcon} alt="" />
            </div>
            <div className="flex gap-2">
                <div className="flex gap-2 items-center">
                    <p onClick={() => handelNavigate('/cart')} className="cursor-pointer hover:text-textYellowColor">Back</p>
                    <img src={icons.line} alt="" className="w-3 h-3" />
                </div>
                {
                    navigationArray.map((bread, index) => {
                        return (
                            <div className="flex gap-2 items-center" key={index}>
                                <p onClick={() => handelNavigate(bread.path, bread.id)} className={`cursor-pointer ${state.isActive === true && state.id === +bread.id ? 'text-textYellowColor' : 'text-textSecondaryColor'} hover:text-textYellowColor`}>{bread.name}</p>
                                <img src={icons.nextPageIcon} alt="" className="w-3 h-3" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CrumbNavigation;