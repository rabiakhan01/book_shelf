import React from "react";
import { allBooksData } from "../../../utils/MockupData";
import BtnBookMark from "../../Shared/BtnBookMark";
import icons from "../../../assets/icons/icons";


const BestSeller = () => {
    return (
        <div className="flex flex-col bg-secondaryColor">
            <div className="text-base sm:text-xl xl:text-2xl font-medium p-4 uppercase text-textLightWhiteColor">
                <h1>bestsellers</h1>
            </div>
            <div className="flex flex-row-reverse flex-wrap justify-center gap-2 w-full p-2">
                {
                    allBooksData.filter((book, index) => index < 8).map((book, index) => {
                        return (
                            <div key={index} className="flex w-full sm:w-[49%] lg:w-[32.5%] h-56  items-center bg-primaryColor rounded-xl p-3 gap-2 small-tab:gap-4 xl:gap-6">
                                <div className="h-48 w-[14rem] small-tab:w-48  md:w-56 ">
                                    <img src={book.book_img} alt="book_cover" className="object-cover w-full h-full rounded-xl" />
                                </div>
                                <div className="flex flex-col h-48 w-full  gap-2 ">
                                    <div className="flex justify-between">
                                        <div>
                                            <p className="text-[15px] md:text-base">{book.author_name}</p>
                                            <p className="text-[15px] md:text-base font-medium">{book.book_name}</p>
                                        </div>
                                        <div className="flex justify-end w-8 h-2">
                                            <BtnBookMark />
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-[15px] small-tab:text-base gap-2">
                                        <div className="flex justify-center items-center text-center  gap-2 border-secondaryColor border rounded-full w-12 h-7 md:w-16 md:h-9">
                                            <p className="">{book.rating.reviews}</p>
                                            <img src={icons.review} alt="review" className="object-scale-down " />
                                        </div>
                                        <div className="flex gap-2 justify-center items-center text-center   border-secondaryColor border rounded-full h-8 w-[6rem] md:w-24 md:h-10">
                                            <p>{book.rating.star}</p>
                                            <img src={icons.star} alt="star" />
                                            <p>({book.rating.views})</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 text-base small-tab:text-xl">
                                        {
                                            book.old_price !== 0 && <p className="text-textGrayColor"><s>${book.old_price}</s></p>
                                        }
                                        <p>${book.new_price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <button className="flex w-full sm:w-[49%] lg:w-[32%] h-56 xl justify-center items-center bg-btnPrimaryColor uppercase font-normal text-2xl rounded-xl p-4 gap-2 small-tab:gap-4">
                    See all
                </button>
            </div>
        </div >
    )
}

export default BestSeller;