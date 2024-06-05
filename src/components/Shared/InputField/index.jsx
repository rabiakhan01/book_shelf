import React from "react";

const InputField = ({ placeholder, value, name, onChange, error, type }) => {
    return (
        <div className="flex flex-col gap-1 h-auto">
            <input
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                type={type}
                className={`w-full border-none rounded-lg bg-primaryColor outline-none h-[46px] px-3 placeholder:text-placeholderTextColor text-textPrimaryColor text-sm sm:text-base ${error ? 'bg-errorBgColor' : 'bg-primaryColor'}`}
            />
            {
                error ? <p className="text-errorColor text-base">{error}</p> : ''
            }

        </div>
    )
}

export default InputField;