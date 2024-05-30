import React from "react";

const InputField = ({ placeholder }) => {
    return (
        <input
            placeholder={placeholder}
            className="w-full border-none rounded-2xl bg-primaryColor outline-none h-12 pl-3 placeholder:text-placeholderTextColor"
        />
    )
}

export default InputField;