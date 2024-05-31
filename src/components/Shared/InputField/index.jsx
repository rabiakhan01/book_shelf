import React from "react";

const InputField = ({ placeholder, value, name, onChange }) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            className="w-full border-none rounded-xl bg-primaryColor outline-none h-12 pl-3 placeholder:text-placeholderTextColor text-textPrimaryColor"
        />
    )
}

export default InputField;