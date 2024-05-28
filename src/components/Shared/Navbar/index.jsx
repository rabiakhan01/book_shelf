import React, { useContext, useState } from "react";
import icons from "../../../assets/icons/icons";
import { Button } from '../index'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { bookListingContext } from "../ContextProvider";
const Navbar = () => {
    const context = useContext(bookListingContext);
    const navigate = useNavigate();

    const [drawer, setDrawer] = useState(false);
    const [searchField, setSearchField] = useState(true);

    const showMenu = () => {
        setDrawer(true);
        setSearchField(false)
        document.body.classList.add('overflow-hidden');
    }
    const hideMenu = () => {
        setSearchField(true)
        setDrawer(false);
        document.body.classList.remove('overflow-hidden')
    }

    const handelSearchClick = () => {
        setSearchField(true);
    }

    const handelNavigate = (path) => {
        navigate(`${path}`)
    }
    return (
        <nav className="sticky top-0 right-0 w-full bg-primaryColor z-20">
            <div className={`relative top-3 flex justify-between lg:h-[80px] items-center w-full rounded-2xl bg-secondaryColor px-3 xs:px-4 py-3 sm:py-4`}>
                <div className="flex gap-2 xs:gap-3 h-10 items-center">
                    <img src={icons.logo} alt="logo" className="h-6 w-6 small-tab:w-8 small-tab:h-10 cursor-pointer" onClick={() => handelNavigate('/')} />
                    <h1 className="flex text-textSecondaryColor text-xs small-tab:text-sm sm:text-base font-medium uppercase">bookmooch</h1>
                </div>
                <div className="hidden lg:flex">
                    <ul className="flex gap-8 text-sm xl:text-base text-textLightWhiteColor">
                        <Link to="/all-books" onClick={hideMenu}><li>Books</li></Link>
                        <Link><li>Authors</li></Link>
                        <Link><li>Whats to Read</li></Link>
                        <Link><li>Gift Ideas</li></Link>
                        <Link><li>About Us</li></Link>
                    </ul>
                </div>
                <div className="relative flex items-center gap-2 small-tab:gap-5 xl:gap-8 h-auto w-auto">

                    <div className="flex items-center gap-2 sm:gap-3 xl:gap-4">
                        <div className="h-6 w-6 ">
                            <button onClick={handelSearchClick} className="h-full w-full">
                                <img src={icons.whiteSearch} alt="search" className={`hidden lg:flex`} />
                            </button>
                        </div>
                        <div className="relative h-6 w-6 ">
                            <img src={icons.bookmark} alt="bookmark" className="h-full w-full" />
                            <div className={`${context.favouritBookContext.favouritBooksIds.length > 0 ? 'flex justify-center items-center' : 'hidden'} absolute left-3 -top-2 bg-lightYellowColor h-5 w-5 rounded-full `}>
                                <p className={`text-blackColor font-semibold text-sm`}>{context.favouritBookContext.favouritBooksIds.length}</p>
                            </div>
                        </div>
                        <div className="relative h-6 w-6 ">
                            <img src={icons.cart} alt="cart" className="w-full h-full" />
                            <div className={`${context.favouritBookContext.cartBooksIds.length > 0 ? 'flex justify-center items-center' : 'hidden'} absolute left-3 -top-2 bg-lightYellowColor h-5 w-5 rounded-full `}>
                                <p className="text-blackColor font-semibold text-sm">{context.favouritBookContext.cartBooksIds.length}</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Button

                            variant="contained"
                            size="small"
                            onClick={() => handelNavigate('/login')}
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
                    <div className={`flex lg:hidden right-0 top-[50px] sm:top-14 absolute text-base text-textLightWhiteColor font-medium w-full `}>
                        <ul className="relative flex flex-col gap-4 h-[85vh] w-full pt-24 items-center bg-secondaryColor rounded-b-2xl">
                            <Link to="/all-books" onClick={hideMenu}><li>Books</li></Link>
                            <Link><li>Authors</li></Link>
                            <Link><li>Whats to Read</li></Link>
                            <Link><li>Gift Ideas</li></Link>
                            <Link><li>About Us</li></Link>
                        </ul>
                    </div>
                }
            </div >
            {
                searchField &&
                <div className="flex lg:hidden relative pb-2">
                    <input className="h-10 w-full mt-5 rounded-xl border border-secondaryColor bg-primaryColor pl-6" placeholder="Search" />
                    <button className="flex justify-center items-center absolute top-6 right-2 w-10 h-8 hover:border focus:border">
                        <img src={icons.searchIcon} alt="" className="w-6 h-6" />
                    </button>
                </div>
            }
        </nav >
    )
}

export default Navbar;