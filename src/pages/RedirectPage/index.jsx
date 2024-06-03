import React from "react";
import { useNavigate } from "react-router-dom";


const RedirectPage = () => {
    const navigate = useNavigate();
    const handelGoBack = () => {
        navigate('/');
    }
    return (
        <div className="flex flex-col w-full h-lvh justify-center items-center">
            <p>Something wents wrong please got back</p>
            <button onClick={handelGoBack} className="flex w-20 h-10 bg-blue-400 rounded-lg justify-center items-center">Go back</button>
        </div>
    )
}

export default RedirectPage;