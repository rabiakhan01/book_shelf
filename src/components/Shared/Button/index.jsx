import React from "react";

const Button = ({ children, variant, size }) => {

    if (size === "small") {
        size = "h-8 w-12 xs:h-9 xs:w-14 sm:h-10 sm:w-20 lg:h-12 lg:w-20";
    }
    if (variant === 'filled') {
        variant = "bg-btnPrimaryColor";
    }
    else {
        variant = "bg-btnsecondaryColor border border-btnPrimaryColor text-textSecondaryColor";
    }
    return (
        <button
            className={`${variant} ${size}  rounded-xl text-xs xs:text-sm xl:text-base font-medium uppercase`}>
            {children}
        </button>
    )
}

export default Button;