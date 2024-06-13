import React, { useContext, useEffect, useState } from "react";
import icons from "../../../assets/icons/icons";
import { Button } from '../index'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../ContextProvider";
import { isAuthentication } from "../../../utils/utils";
import images from "../../../assets/images/images";
const Navbar = () => {
    const context = useContext(bookListingContext);
    const navigate = useNavigate();

    const [drawer, setDrawer] = useState(false);
    const [cartValue, setCartValue] = useState(0);


    const showMenu = () => {
        setDrawer(true);

        document.body.classList.add('overflow-hidden');
    }
    const hideMenu = () => {
        setDrawer(false);
        document.body.classList.remove('overflow-hidden')
    }

    const handelNavigate = (path) => {
        navigate(`${path}`)
    }

    const navigateToCart = () => {
        navigate('/cart')
    }
    const navigateToBookMark = () => {
        navigate('/cart')
    }

    const navigateToProfile = () => {
        navigate('/profile');
    }
    useEffect(() => {
        const cartQuantity = context?.favouritBookContext.cartBooks.reduce((book, initial) => (book + initial.quantity), 0);
        if (cartQuantity > 0) {
            setCartValue(cartQuantity)
        }
        else {
            setCartValue(0);
        }
    }, [context?.favouritBookContext.cartBooks])
    return (
        <nav className="sticky top-0 right-0 w-full bg-primaryColor z-20">
            <div className={`relative top-3 flex justify-between lg:h-[80px] items-center w-full rounded-2xl bg-secondaryColor px-3 xs:px-4 py-3 sm:py-4`}>
                <div className="flex gap-2 xs:gap-3 h-10 items-center cursor-pointer" onClick={() => handelNavigate('/')}>
                    <img src={icons.logo} alt="logo" className="w-8 h-10" />
                    <h1 className="flex text-textSecondaryColor text-sm sm:text-base font-medium uppercase">bookmooch</h1>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex gap-8 text-sm xl:text-base text-textLightWhiteColor">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-textYellowColor' : 'text-primaryColor'} onClick={hideMenu}><li>Home</li></NavLink>
                        <NavLink to="/all-books" className={({ isActive }) => isActive ? 'text-textYellowColor' : 'text-primaryColor'} onClick={hideMenu}><li>Books</li></NavLink>
                        <NavLink to="/all-authors" className={({ isActive }) => isActive ? 'text-textYellowColor' : 'text-primaryColor'} onClick={hideMenu}><li>Authors</li></NavLink>

                    </ul>
                </div>
                <div className="relative flex items-center gap-2 small-tab:gap-5 xl:gap-8 h-auto w-auto">

                    <div className="flex items-center gap-3 xl:gap-4 pr-2 md:pr-0">
                        <div className="relative h-6 w-6 cursor-pointer" onClick={navigateToBookMark}>
                            <img src={icons.bookmark} alt="bookmark" className="h-full w-full" />
                            <div className={`${context?.favouritBookContext.favouritBooks.length > 0 ? 'flex justify-center items-center' : 'hidden'} absolute left-3 -top-2 bg-lightYellowColor h-5 w-5 rounded-full `}>
                                <p className={`text-blackColor font-medium text-xs sm:text-sm`}>{context?.favouritBookContext.favouritBooks.length}</p>
                            </div>
                        </div>
                        <div className="relative h-6 w-6 cursor-pointer" onClick={navigateToCart}>
                            <img src={icons.cart} alt="cart" className="w-full h-full" />
                            <div className={`${cartValue > 0 ? 'flex justify-center items-center' : 'hidden'} absolute left-3 -top-2 bg-lightYellowColor h-5 w-5 rounded-full `}>
                                <p className="text-blackColor font-medium text-xs sm:text-sm">{cartValue}</p>
                            </div>
                        </div>

                    </div>

                    {
                        !isAuthentication() ?
                            <div className="hidden md:flex">
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() => handelNavigate('/login')}
                                >
                                    Login
                                </Button>
                            </div>
                            :
                            <button className="hidden md:flex" onClick={navigateToProfile}>
                                <img src={images.profileImg} alt="profile-img" className="w-5 h-5 sm:w-10 sm:h-10 rounded-full" />
                            </button>
                    }
                    <div className="flex lg:hidden">
                        {
                            drawer ?
                                <img src={icons.cross} alt="cross" className="h-3 w-3 sm:h-4 sm:w-4 cursor-pointer" onClick={hideMenu} />
                                :
                                <img src={icons.hamburger} alt="hamburger" className="navbar h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" onClick={showMenu} />
                        }
                    </div>
                </div>
                {
                    drawer &&
                    <div className={`flex lg:hidden right-0 top-[50px] sm:top-14 absolute text-base text-textLightWhiteColor font-medium w-full `}>
                        <ul className="relative flex flex-col gap-4 h-[85vh] w-full pt-24 items-center bg-secondaryColor rounded-b-2xl">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'text-textYellowColor' : 'text-primaryColor'} onClick={hideMenu}><li>Home</li></NavLink>
                            <NavLink to="/all-books" className={({ isActive }) => isActive ? 'text-textYellowColor' : 'text-primaryColor'} onClick={hideMenu}><li>Books</li></NavLink>
                            <NavLink to="/all-authors" className={({ isActive }) => isActive ? 'text-textYellowColor' : 'text-primaryColor'} onClick={hideMenu}><li>Authors</li></NavLink>

                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => handelNavigate('/login')}
                            >
                                Login
                            </Button>
                        </ul>

                    </div>
                }
            </div>

        </nav>
    )
}

export default Navbar;