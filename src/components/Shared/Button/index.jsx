import React from "react";

const Button = ({ ButtonName, Variant, PadHorizontal, PadVertical, SmPadHorizontal, SmPadVertical }) => {
    return (
        <button
            className={`
            ${Variant ? Variant === 'filled' ? 'bg-btnPrimaryColor' : 'bg-btnsecondaryColor border border-btnPrimaryColor' : 'bg-btnPrimaryColor'}
             flex justify-center items-center rounded-xl error: bg-yellowColor400 uppercase text-[10px] xs:text-xs sm:text-sm lg:text-base font-medium px-2 py-[6px] xs:py-2 ${SmPadHorizontal} ${SmPadVertical} ${PadHorizontal} ${PadVertical} `}>
            {ButtonName}
        </button>
    )
}

export default Button;