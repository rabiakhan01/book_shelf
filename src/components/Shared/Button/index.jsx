import React from "react";

const Button = ({ children, variant, size, onClick, disabled }) => {
    if (size === "extra-small") {
        size = "h-6 w-12 small-tab:h-7 small-tab:w-12 sm:h-8 sm:w-16";
    }

    if (size === "small") {
        size = "h-7 w-12 small-tab:h-9 small-tab:w-14 sm:h-10 sm:w-20 lg:h-11 lg:w-20";
    }
    else if (size === "medium") {
        size = "h-10 w-28 sm:h-12 sm:w-32 sm:w-36 "
    }
    else if (size === "large") {
        size = " h-14 w-16 small-tab:h-20 small-tab:w-20 sm:h-24 sm:w-28"
    }
    if (variant === 'contained') {
        variant = "bg-btnPrimaryColor";
    }
    else if (variant === 'outlined') {
        variant = "bg-transparent border-2 border-btnPrimaryColor text-btnPrimaryColor";
    }
    return (
        <button
            className={`flex relative ${variant} ${size} rounded-lg sm:rounded-xl justify-center items-center text-xs sm:text-sm lg:text-base font-medium uppercase`} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;