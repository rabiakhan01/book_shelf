import React, { useState } from "react";
import icons from "../../../assets/icons/icons";
import { Button } from '../index'
const Navbar = () => {

    const calcWidth = () => {
        if (window.innerWidth < 1024) {
            return true;
        }
        else return false;
    }
    const [drawer, setDrawer] = useState(false);
    const [searchField, setSearchField] = useState(calcWidth());

    const showMenu = () => {
        setDrawer(false);
        setSearchField(true)
        document.body.classList.add('overflow-hidden');
    }
    const hideMenu = () => {
        setSearchField(false)
        setDrawer(true);
        document.body.classList.remove('overflow-hidden')
    }


    window.addEventListener('resize', function () {
        if (window.innerWidth > 1023) {
            setDrawer(false)
            return false;
        }
        if (window.innerWidth < 1023) {
            setSearchField(true)
        }

    });

    const handelSearchClick = () => {
        setSearchField(true);
    }
    return (
        <nav className="sticky top-0 right-0 w-full bg-primaryColor z-20">
            <div className={`relative top-3 flex justify-between lg:h-[80px] items-center w-full rounded-2xl bg-secondaryColor px-3 xs:px-4 py-4`}>
                <div className="flex gap-2 xs:gap-3 h-10 items-center">
                    <img src={icons.logo} alt="logo" className="h-6 w-6 small-tab:w-8 small-tab:h-10 sm:w-full sm:h-full" />
                    <h1 className="flex text-textSecondaryColor text-[13px] text-xs small-tab:text-base lg:text-lg font-medium uppercase">bookmooch</h1>
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
                        <button onClick={handelSearchClick} className="h-full w-full">
                            <img src={icons.whiteSearch} alt="search" className={`hidden ${searchField ? 'hidden' : 'lg:flex'}`} />
                        </button>
                        <img src={icons.bookmark} alt="bookmark" className="h-5 w-5 small-tab:h-full small-tab:w-full" />
                        <img src={icons.cart} alt="cart" className="h-5 w-5 small-tab:h-full small-tab:w-full" />
                    </div>
                    <div>
                        <Button

                            variant="contained"
                            size="small"
                        >
                            Login
                        </Button>
                    </div>
                    <div className="flex lg:hidden">
                        {
                            drawer ?
                                <img src={icons.cross} alt="cross" className="h-3 w-3 sm:h-4 sm:w-4" onClick={hideMenu} />
                                :
                                <img src={icons.hamburger} alt="hamburger" className="navbar h-4 w-4 sm:h-5 sm:w-5" onClick={showMenu} />
                        }
                    </div>
                </div>
                {
                    drawer &&
                    <div className={`flex lg:hidden right-0 top-14 absolute text-base text-textLightWhiteColor font-medium w-full transition-height duration-1000 ease-in-out`}>
                        <ul className="relative flex flex-col gap-4 h-[75vh] w-full pt-24 items-center bg-secondaryColor rounded-b-2xl">
                            <li>Books</li>
                            <li>Authors</li>
                            <li>Whats to Read</li>
                            <li>Gift Ideas</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                }
            </div>
            {
                searchField &&
                <div className="relative">
                    <input className="h-12 lg:h-14 w-full mt-5 rounded-xl border border-secondaryColor bg-primaryColor placeholder:text-xl pl-6" placeholder="Search" />
                    <button className="flex justify-center items-center absolute top-6 lg:top-7 right-4 w-10 h-10 hover:border focus:border">
                        <img src={icons.searchIcon} alt="" className="w-8 h-8" />
                    </button>
                </div>
            }
        </nav>
    )
}

export default Navbar;