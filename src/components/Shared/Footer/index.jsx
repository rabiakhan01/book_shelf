import React from "react";
import icons from "../../../assets/icons/icons";
const Footer = () => {
    return (
        <footer className="w-full bg-secondaryColor">
            <div className="flex flex-col">
                <div className="flex justify-between items-center px-3 xs:px-4 h-[4.5rem]">
                    <div className="flex gap-2 xs:gap-3 h-10 items-center">
                        <img src={icons.logo} alt="logo" className="h-6 w-6 small-tab:w-8 small-tab:h-10" />
                        <h1 className="flex text-textSecondaryColor text-xs small-tab:text-sm sm:text-base font-medium uppercase">bookmooch</h1>
                    </div>
                    <div className="flex gap-2 sm:gap-6">
                        <img src={icons.insta} alt="insta" className="object-scale-down" />
                        <img src={icons.facebook} alt="facebook" className="object-scale-down" />
                        <img src={icons.twitter} alt="twitter" className="object-scale-down" />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 h-auto text-xs sm:text-sm xl:text-base justify-between sm:items-center  bg-blackColor text-textSecondaryColor px-4 py-2 ">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                        <p>+441332 412251</p>
                        <p>support@bbookshelf.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;