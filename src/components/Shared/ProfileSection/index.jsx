import React from "react";


const ProfileSection = ({ heading, children, src, alt }) => {

    return (
        <div className="flex mb-2 w-auto gap-5 h-20 items-center">
            <div>
                <img src={src} alt={alt} className="w-6 h-6 md:h-8 md:w-8" />
            </div>
            <div className="flex flex-col">
                <p className="text-base md:text-lg text-gray-400">{heading}</p>
                {children}
            </div>
        </div>
    )
}

export default ProfileSection;