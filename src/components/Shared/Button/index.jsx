import React from "react";

const Button = ({ ButtonName, Variant }) => {
    return (
        <button
            className={`
            ${Variant ? Variant === 'filled' ? 'bg-btnPrimaryColor' : 'bg-btnsecondaryColor border border-btnPrimaryColor' : 'bg-btnPrimaryColor'}
             flex justify-center items-center rounded-xl error: bg-yellowColor400 h-9 xl:h-[50px] w-[70px] xl:w-[90px] uppercase text-sm xl:text-base font-medium`}>
            {ButtonName}
        </button >
    )
}

export default Button;