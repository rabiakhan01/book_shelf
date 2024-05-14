import React, { useState } from "react";
import icons from "../../../assets/icons/icons";
import { Button } from '../index'
const Navbar = () => {

    const [drawer, setDrawer] = useState(false);
    const handelMenu = () => {
        setDrawer(!drawer);
    }
    return (
        <nav className="sticky top-0 right-0 w-full bg-primaryColor z-10">
            <div className={`relative top-3 flex justify-between lg:h-[80px] items-center w-full rounded-2xl bg-secondaryColor px-3 xs:px-4 py-4`}>
                <div className="flex gap-2 xs:gap-3 h-10 items-center">
                    <img src={icons.logo} alt="logo" className="h-6 w-6 small-tab:w-8 small-tab:h-10 sm:w-full sm:h-full" />
                    <h1 className="flex text-textSecondaryColor text-[13px] text-xs xs:text-sm xl:text-base font-medium uppercase">bookmooch</h1>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex gap-8 text-sm xl:text-base text-textLightWhiteColor">
                        <li>Books</li>
                        <li>Authors</li>
                        <li>Whats to Read</li>
                        <li>Gift Ideas</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 small-tab:gap-5 xl:gap-8 h-auto w-auto">
                    <div className="flex items-center gap-2 sm:gap-3 xl:gap-4">
                        <img src={icons.whiteSearch} alt="search" className=" hidden lg:flex" />
                        <img src={icons.bookmark} alt="bookmark" className="h-5 w-5 small-tab:h-full small-tab:w-full" />
                        <img src={icons.cart} alt="cart" className="h-5 w-5 small-tab:h-full small-tab:w-full" />
                    </div>
                    <div>
                        <Button

                            variant="filled"
                            size="small"

                        >
                            Login
                        </Button>
                    </div>
                    <div className="flex lg:hidden">
                        {
                            drawer ?
                                <img src={icons.cross} alt="cross" className=" h-2 w-2 small-tab:h-3 small-tab:w-3 sm:h-4 sm:w-4" onClick={handelMenu} />
                                :
                                <img src={icons.hamburger} alt="hamburger" className=" h-3 w-3 small-tab:h-4 small-tab:w-4 sm:h-5 sm:w-5" onClick={handelMenu} />
                        }
                    </div>
                </div>
                {
                    drawer &&
                    <div className={`flex xl:hidden right-0 top-14 absolute text-base text-textLightWhiteColor font-medium w-full transition-height duration-1000 ease-in-out`}>
                        <ul className="relative flex flex-col h-[90vh] w-full justify-center items-center bg-secondaryColor rounded-b-2xl">
                            <li>Books</li>
                            <li>Authors</li>
                            <li>Whats to Read</li>
                            <li>Gift Ideas</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;