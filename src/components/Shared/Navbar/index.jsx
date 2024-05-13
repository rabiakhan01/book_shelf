import React, { useState } from "react";
import icons from "../../../assets/icons/icons";
import { Button } from '../index'
const Navbar = () => {

    const [drawer, setDrawer] = useState(false);
    const handelMenu = () => {
        setDrawer(!drawer);
    }
    return (
        <nav className="sticky top-0 right-0 w-full bg-primaryColor ">
            <div className={`relative top-3 flex justify-between lg:h-[80px] items-center w-full rounded-2xl bg-secondaryColor px-3 xs:px-4 py-4`}>
                <div className="flex gap-2 xs:gap-3 h-10 items-center">
                    <img src={icons.logo} alt="logo" />
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
                <div className="flex items-center gap-3 sm:gap-5 xl:gap-8 h-auto w-auto">
                    <div className="flex items-center gap-2 sm:gap-3 xl:gap-4">
                        <img src={icons.search} alt="search" className="hidden lg:flex" />
                        <img src={icons.bookmark} alt="bookmark" />
                        <img src={icons.cart} alt="cart" />
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
                                <img src={icons.cross} alt="cross" className=" h-3 w-3 sm:h-4 sm:w-4" onClick={handelMenu} />
                                :
                                <img src={icons.hamburger} alt="hamburger" className="h-4 w-4 sm:h-5 sm:w-5" onClick={handelMenu} />
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