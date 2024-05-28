import React from "react";
import images from "../../../assets/images/images";
import { Button } from "../../Shared";
import icons from "../../../assets/icons/icons";
import NavigationCrumb from "../NavigationCrumb";
import { useParams } from "react-router-dom";
import { allBooksData } from "../../../utils/MockupData";

const SingleBookDetail = () => {
    const { bookId } = useParams();

    return (
        <React.Fragment>
            {
                allBooksData.map((item) => {
                    if (item.id === +bookId) {
                        return (
                            <div className="flex flex-col text-textSecondaryColor gap-2 bg-secondaryColor w-full rounded-xl h-auto mt-10">
                                <NavigationCrumb
                                    author_name={item.author_name}
                                    book_name={item.book_name}
                                />
                                <div className="flex p-4 justify-between">
                                    <div className="flex gap-x-4 ">
                                        <div className="!h-96 w-64 rounded-2xl ">
                                            <img src={item.book_img} alt="" className="object-cover rounded-2xl w-full h-full" />
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <div className="flex flex-col gap-1">
                                                <p className="text-xl">{item.author_name}</p>
                                                <p className="uppercase text-2xl font-normal">{item.book_name}</p>
                                            </div>
                                            <div className="flex text-sm gap-4">
                                                <div>
                                                    <ul>
                                                        <li className="flex mb-2">
                                                            <img src="" alt="" />
                                                            <p>{item.rating.star}</p>
                                                            <p className="pl-1">({item.rating.views})</p>
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
                                                        <li><button className="underline mb-2">{item.rating.reviews} reviews</button></li>
                                                        <li>{item.category}</li>
                                                        <li>{item.publish_date}</li>
                                                        <li>{item.language}</li>
                                                        <li>{item.pages}</li>
                                                        <li>{item.read_time}</li>
                                                        <li>{item.type}</li>
                                                        <li>{item.publisher}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 text-2xl">
                                                {
                                                    item.old_price > 0 ? <p className="text-textLightGrayColor">${item.old_price}</p> : ''
                                                }
                                                <p>${item.new_price}</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    size="medium"
                                                    variant="contained"
                                                >
                                                    buy now
                                                </Button>
                                                <Button
                                                    size="medium"
                                                    variant="outlined"
                                                >
                                                    add to bag
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-textPrimaryColor">
                                        <div className="flex flex-col w-[22rem] bg-primaryColor rounded-xl p-4">
                                            <div className="flex justify-between pb-1">
                                                <h1 className="uppercase text-lg font-medium">plot summary</h1>
                                                <img src={icons.arrow} alt="" className="w-5 h-5 -rotate-45 cursor-pointer" />
                                            </div>
                                            <div className="w-full">
                                                <p className="line-clamp-[9] text-sm">{item.plot_summary}</p>
                                            </div>
                                            <div>
                                                <button className="flex uppercase  text-[15px] underline pt-1 font-medium">Read preview</button>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between w-[22rem] h-16 rounded-xl bg-primaryColor p-3 uppercase">
                                            <p className="font-medium">reception</p>
                                            <img src={icons.arrow} alt="" className="w-5 h-5 cursor-pointer" />
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