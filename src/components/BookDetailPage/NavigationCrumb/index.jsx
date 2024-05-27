import React from "react";
import { BreadCrumb } from "../../Shared";
import { useNavigate } from "react-router-dom";

const NavigationCrumb = () => {

    const navigate = useNavigate();
    const breadArray = [
        {
            id: 1,
            name: 'Home',
            path: '/',
            isActive: false,
        },
        {
            id: 2,
            name: 'All books',
            path: '/all-books',
            isActive: false,
        },
        {
            id: 3,
            name: 'Muscle, Alan Trotter',
            path: '/book-detail',
            isActive: true,
        },
    ];

    const handelNavigate = (path) => {
        navigate(`${path}`);
    }
    return (
        <div className="flex gap-2 pt-4 px-4">
            {
                breadArray.map((item) => {
                    return (
                        <BreadCrumb
                            key={item.id}
                            name={item.name}
                            onClick={() => handelNavigate(item.path)}
                            isActive={item.isActive}
                        />
                    )
                })
            }
        </div>
    )
}

export default NavigationCrumb;