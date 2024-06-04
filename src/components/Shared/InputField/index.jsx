import React from "react";

const InputField = ({ placeholder, value, name, onChange, errorMessage, type }) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            type={type}
            className={`w-full border-none rounded-xl bg-primaryColor outline-none h-12 px-3 placeholder:text-placeholderTextColor text-textPrimaryColor text-sm sm:text-base ${errorMessage ? 'bg-errorBgColor' : 'bg-primaryColor'}`}
        />
    )
}

export default InputField;