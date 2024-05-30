import React from "react";
import icons from "../../../assets/icons/icons";

const CrumbNavigation = () => {
    const navigationArray = [
        {
            name: 'contact information',
            path: '/contact',
            isActive: true
        },
        {
            name: 'shipping method',
            path: '/cart',
            isActive: false
        },
        {
            name: 'payment',
            path: '/cart',
            isActive: false
        },
    ];

    return (
        <div className="flex gap-2 items-center uppercase">
            <div>
                <img src={icons.prevPageIcon} alt="" />
            </div>
            <div className="flex gap-2">
                <div className="flex gap-2 items-center">
                    <p>Back</p>
                    <img src={icons.line} alt="" className="w-3 h-3" />
                </div>
                {
                    navigationArray.map((bread) => {
                        return (
                            <div className="flex gap-2 items-center">
                                <p>{bread.name}</p>
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