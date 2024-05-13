import React from "react";

const Button = ({ children, variant, size }) => {

    if (size === "small") {
        size = "h-8 w-14 xs:h-9 xs:w-14 sm:h-10 sm:w-20 lg:h-12 lg:w-20";
    }
    else if (size === "medium") {
        size = "h-8 w-20 xs:h-10 xs:w-24 sm:h-12 sm:w-28 lg:h-12 lg:w-32"
    }
    if (variant === 'filled') {
        variant = "bg-btnPrimaryColor";
    }
    else if (variant === 'outlined') {
        variant = "bg-btnsecondaryColor border-2 border-btnPrimaryColor text-btnPrimaryColor";
    }
    return (
        <button
            className={`${variant} ${size}  rounded-lg sm:rounded-xl text-xs xs:text-sm xl:text-base font-medium uppercase`}>
            {children}
        </button>
    )
}

export default Button;