import React, { useContext, useEffect, useState } from "react";
import { BtnBookMark, BtnCartQuantity, Button } from "../../Shared";
import icons from "../../../assets/icons/icons";
import NavigationCrumb from "../NavigationCrumb";
import { useNavigate, useParams } from "react-router-dom";
import { allBooksData } from "../../../utils/MockupData";
import { bookListingContext } from "../../Shared/ContextProvider";

const SingleBookDetail = () => {
    const navigate = useNavigate();
    const context = useContext(bookListingContext);
    const { bookId } = useParams();

    const [cartButton, setCartButton] = useState();
    const [quantity, setQuantity] = useState(0);

    const handelCart = (book_id) => {
        console.log("🚀 ~ handelCart ~ book_id:", book_id)

        const alreadyExists = context.favouritBookContext.cartBooks?.find((bookID) => bookID == +book_id);
        if (!alreadyExists) {
            const cartBooks = [...context.favouritBookContext.cartBooks, { bookID: book_id, quantity: 1 }];
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: cartBooks });
            setCartButton(true);
        }
    }

    const handelFavouritBook = (book_id) => {
        const alreadyExists = context.favouritBookContext.favouritBooks?.find((book) => book == +book_id);

        if (!alreadyExists) {
            const favouritBook = [...context.favouritBookContext.favouritBooks, book_id];
            context.setFavouritBookContext({ ...context.favouritBookContext, favouritBooks: favouritBook });
        }
        else {
            const updatedBooks = context.favouritBookContext.favouritBooks.filter((book) => book !== +alreadyExists)
            const favouritBook = [...updatedBooks];
            console.log("🚀 ~ handelFavouritBook ~ updatedBooks:", favouritBook)
            context.setFavouritBookContext({ ...context.favouritBookContext, favouritBooks: favouritBook })
        }

    }

    const incrementQuantity = (book_id) => {
        const findBook = context.favouritBookContext.cartBooks.find((book) => book.bookID === book_id);
        const updatedData = context.favouritBookContext.cartBooks.map((book) => {
            if (book.bookID == findBook.bookID) {
                return { ...book, quantity: quantity + 1 }
            }
            else {
                return book
            }
        })
        //console.log("🚀 ~ updatedData ~ updatedData:", updatedData)

        context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: updatedData })
    }
    const decrementQuantity = (book_id) => {
        const updatedArray = context.favouritBookContext.cartBooks.map((book) => {
            if (book.bookID == + book_id) {
                return { ...book, quantity: quantity - 1 }
            }
            else {
                return book;
            }
        })
        //console.log("🚀 ~ updatedArray ~ updatedArray:", updatedArray)
        context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: updatedArray });
        const array = updatedArray.filter((item) => item.quantity > 0);

        if (array.length < 1) {
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: array });
        }
    }

    // set the cart button show or hidden
    useEffect(() => {
        const data = context.favouritBookContext.cartBooks.find((book) => book.bookID == +bookId && book.quantity > 0);
        if (data) {
            setCartButton(true)
            setQuantity(data.quantity)
        }
        else {
            setCartButton(false);
        }
    }, [context.favouritBookContext.cartBooks]);

    useEffect(() => {
        const data = context.favouritBookContext.cartBooks.find((book) => book.bookID == +bookId && book.quantity > 0);
        if (data) {
            setCartButton(true)
        }
        else {
            setCartButton(false);
        }
    }, [bookId]);

    //handel buy the book directly
    const handelOrder = (book_id) => {
        const alreadyExists = context.favouritBookContext.cartBooks?.find((item) => item.bookID == +book_id);
        if (!alreadyExists) {
            const cartBooks = [...context.favouritBookContext.cartBooks, { bookID: book_id, quantity: 1 }];
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: cartBooks });
            setCartButton(true);
        }
        else {
            const updatedArray = context.favouritBookContext.cartBooks.map((book) => {
                if (book.bookID == + book_id) {
                    return { ...book, quantity: quantity + 1 }
                }
                else {
                    return book;
                }
            })
            //console.log("🚀 ~ updatedArray ~ updatedArray:", updatedArray)
            context.setFavouritBookContext({ ...context.favouritBookContext, cartBooks: updatedArray });
        }
        navigate('/cart', {
            state: {
                id: 1,
                isActive: true
            }
        })
    }

    return (
        <React.Fragment>
            {
                allBooksData.map((book) => {
                    if (book.id === +bookId) {
                        return (
                            <div key={book.id} className="flex flex-col text-textSecondaryColor gap-2 bg-secondaryColor w-full rounded-xl h-auto mt-4 lg:mt-10">
                                <NavigationCrumb
                                    author_name={book.author_name}
                                    book_name={book.book_name}
                                />
                                <div className="flex flex-col gap-4 md:flex-row lg:gap-0 p-4 justify-between">
                                    <div className="flex flex-col small-tab:flex-row gap-4 small-tab:gap-x-4 ">
                                        <div className="relative !h-80 lg:!h-96 w-full small-tab:w-48 lg:w-64 rounded-2xl ">
                                            <img src={book.book_img} alt="" className="object-cover rounded-2xl w-full h-full" />
                                            <div className="absolute top-4 right-4 z-10  h-8 w-8 rounded-full">
                                                <BtnBookMark
                                                    onClick={() => handelFavouritBook(book.id)}
                                                    bookID={book.id}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 small-tab:gap-0 justify-between">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-base lg:text-xl">{book.author_name}</p>
                                                <p className="uppercase text-lg sm:text-xl lg:text-2xl font-normal">{book.book_name}</p>
                                            </div>
                                            <div className="flex text-xs extra-small:text-sm gap-6 small-tab:gap-2 sm:gap-4">
                                                <div>
                                                    <ul>
                                                        <li className="flex mb-2">
                                                            <img src="" alt="" />
                                                            <p>{book.rating.star}</p>
                                                            <p className="pl-1">({book.rating.views})</p>
                                                        </li>
                                                        <li>Category</li>
                                                        <li>Publish date</li>
                                                        <li>Language</li>
                                                        <li>Pages</li>
                                                        <li>Read time</li>
                                                        <li>Type</li>
                                                        <li>Publisher</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <ul>
                                                        <li><button className="underline mb-2">{book.rating.reviews} reviews</button></li>
                                                        <li>{book.category}</li>
                                                        <li>{book.publish_date}</li>
                                                        <li>{book.language}</li>
                                                        <li>{book.pages}</li>
                                                        <li>{book.read_time}</li>
                                                        <li>{book.type}</li>
                                                        <li>{book.publisher}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 text-xl lg:text-2xl">
                                                {
                                                    book.old_price > 0 ? <s><p className="text-textLightGrayColor">${book.old_price}</p></s> : ''
                                                }
                                                <p>${book.new_price}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="medium"
                                                    variant="contained"
                                                    onClick={() => handelOrder(book.id)}
                                                >
                                                    buy now
                                                </Button>
                                                {
                                                    !cartButton
                                                        ?
                                                        <Button
                                                            size="medium"
                                                            variant="outlined"
                                                            onClick={() => handelCart(book.id)}
                                                        >
                                                            add to bag
                                                        </Button>
                                                        :
                                                        <BtnCartQuantity
                                                            quantity={quantity}
                                                            incrementQuantity={() => incrementQuantity(book.id)}
                                                            decrementQuantity={() => decrementQuantity(book.id)}
                                                        />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-textPrimaryColor">
                                        <div className="flex flex-col gap-2 lg:gap-0 w-full md:w-[34vw] lg:w-[22rem] bg-primaryColor rounded-xl h-auto p-4">
                                            <div className="flex justify-between pb-1">
                                                <h1 className="uppercase text-base lg:text-lg font-medium">plot summary</h1>
                                                <img src={icons.arrow} alt="" className="h-4 w-4 lg:w-5 lg:h-5 -rotate-45 cursor-pointer" />
                                            </div>
                                            <div className="w-full">
                                                <p className="line-clamp-[8] lg:line-clamp-[9] text-sm">{book.plot_summary}</p>
                                            </div>
                                            <div>
                                                <button className="flex uppercase text-xs sm:text-[15px] underline pt-1 font-medium">Read preview</button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between w-full lg:w-[22rem] h-auto lg:h-16 rounded-xl bg-primaryColor p-3 uppercase">
                                            <p className="font-medium text-sm small-tab:text-base">reception</p>
                                            <img src={icons.arrow} alt="" className="h-4 w-4 lg:w-5 lg:h-5 cursor-pointer" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </React.Fragment>
    )
}

export default SingleBookDetail;