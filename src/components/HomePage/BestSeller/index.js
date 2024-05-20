import React from "react";
import { allBooksData } from "../../../utils/MockupData";
import BtnBookMark from "../../Shared/BtnBookMark";
import icons from "../../../assets/icons/icons";


const BestSeller = () => {

    const sortedBooksData = allBooksData.sort((a, b) => b.rating.views - a.rating.views);
    return (
        <div className="flex flex-col bg-secondaryColor py-4">
            <div className="text-xl md:text-2xl xl:text-3xl font-medium px-4 py-2 uppercase text-textLightWhiteColor">
                <h1>bestsellers</h1>
            </div>
            <div className="flex flex-row-reverse flex-wrap justify-between gap-y-2 lg:gap-y-[13px] w-full p-3">
                {
                    sortedBooksData.filter((book, index) => index < 8).map((book, index) => {
                        return (
                            <div key={index} className="flex w-full sm:w-[49.47%] lg:w-[32.57%] h-[220px]  items-center bg-primaryColor rounded-xl p-3 gap-2 small-tab:gap-2">
                                <div className="h-48 w-[14rem] small-tab:w-48  md:w-56 xl:w-40 rounded-xl overflow-hidden">
                                    <img src={book.book_img} alt="book_cover" className="object-cover w-full h-full " />
                                </div>
                                <div className="flex flex-col h-48 w-[70vw] small-tab:w-full sm:w-[30vw] lg:w-[20vw] gap-2 ">
                                    <div className="flex justify-between w-full ">
                                        <div className="w-[38vw] small-tab:w-full sm:w-[20vw] lg:w-[12vw] xl:w-[14rem]">
                                            <p className="text-sm small-tab:text-[15px] md:text-base truncate">{book.author_name}</p>
                                            <p className="text-sm small-tab:text-[15px] md:text-base font-medium truncate">{book.book_name}</p>
                                        </div>
                                        <div className="flex justify-end w-8 h-10 ml-1">
                                            <BtnBookMark />
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-[15px] small-tab:text-base gap-2">
                                        <div className="flex justify-center items-center text-center  gap-2 border-secondaryColor border rounded-full w-14 h-7 md:w-[70px] md:h-9 px-2">
                                            <p className="">{book.rating.reviews}</p>
                                            <img src={icons.review} alt="review" className="object-scale-down " />
                                        </div>
                                        <div className="flex gap-2 justify-center items-center text-center   border-secondaryColor border rounded-full h-8 w-28 md:w-[105px] md:h-10">
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
                <button className="flex w-full sm:w-[49%] lg:w-[32%] h-56 justify-center items-center bg-btnPrimaryColor uppercase font-normal text-2xl rounded-xl gap-2 small-tab:gap-4">
                    See all
                </button>
            </div>
        </div >
    )
}

export default BestSeller;