import React, { useState } from "react";
import images from '../../assets/images/images';
import icons from '../../assets/icons/icons';
import { Button } from "../Shared";
const Navbar = () => {

    const [drawer, setDrawer] = useState(false);
    const handelMenu = () => {
        setDrawer(!drawer);
    }
    return (
        <nav className="sticky top-0 right-0 w-full">
            <div className={`relative flex justify-between xl:h-24 items-center w-full rounded-2xl bg-secondaryColor px-4 py-4`}>
                <div className="flex gap-3 h-10 items-center">
                    <img src={images.logo} alt="logo" className="h-8 w-8" />
                    <h1 className="flex text-textSecondaryColor text-sm xl:text-base font-medium uppercase">bookmooch</h1>
                </div>
                <div className="hidden xl:flex">
                    <ul className="flex gap-8 text-sm xl:text-base text-textLightWhiteColor">
                        <li>Books</li>
                        <li>Authors</li>
                        <li>Whats to Read</li>
                        <li>Gift Ideas</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="flex items-center gap-5 xl:gap-8 h-auto w-auto">
                    <div className="flex items-center gap-3 xl:gap-4">
                        <img src={icons.search} alt="search" className="w-4 h-4 hidden xl:flex" />
                        <img src={icons.bookmark} alt="bookmark" className="w-6 h-6" />
                        <img src={icons.cart} alt="cart" className="w-4 h-4" />
                    </div>
                    <div>
                        <Button
                            ButtonName="Login"
                            Variant="outlined"
                        />
                    </div>
                    <div className="flex xl:hidden ">
                        {
                            drawer ?
                                <img src={icons.cross} alt="cross" className="h-4 w-4" onClick={handelMenu} />
                                :
                                <img src={icons.hamburger} alt="hamburger" className="h-5 w-5" onClick={handelMenu} />
                        }
                    </div>
                </div>
                {
                    drawer &&
                    <div className={`flex xl:hidden right-0 top-14 absolute text-base text-textLightWhiteColor font-medium w-full `}>
                        <ul className="relative flex flex-col h-[91.1lvh] w-full justify-center items-center bg-secondaryColor">
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