import React from "react";
import { allBooksData } from "../../../utils/MockupData";


const BestSeller = () => {
    return (
        <div className="flex flex-col bg-secondaryColor">
            <div className="text-base font-medium p-4 uppercase text-textLightWhiteColor">
                <h1>bestsellers</h1>
            </div>
            <div className="flex gap-4 flex-wrap">
                {
                    allBooksData.map((book, index) => {
                        return (
                            <div className="flex w-full h-auto bg-primaryColor rounded-xl p-4 mx-4 gap-4">
                                <div className="h-40">
                                    <img src={book.book_img} alt="book_cover" className="object-cover w-full h-full rounded-xl" />
                                </div>
                                <div className="flex flex-col">
                                    <div>
                                        <div>
                                            <p>{book.author}</p>
                                            <p>{book.book_name}</p>
                                        </div>
                                        <div className="flex justify-center items-center bg-secondaryColor w-4 h-4 rounded-full">
                                            <button>
                                                bookmark
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>{book.rating.reviews}</p>
                                        </div>
                                        <div className="flex">
                                            <p>{book.rating.star}</p>
                                            <p>{book.rating.views}</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <p>{book.old_price}</p>
                                        <p>{book.new_price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BestSeller;