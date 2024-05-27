import React from "react";
import images from "../../../assets/images/images";
import { Button } from "../../Shared";
import icons from "../../../assets/icons/icons";

const SingleBookDetail = () => {
    return (
        <div className="flex flex-col text-textSecondaryColor gap-2 bg-secondaryColor w-full rounded-xl h-auto mt-8">
            <div>
                bread crumbs
            </div>
            <div className="flex p-4 justify-between">
                <div className="flex gap-x-4 ">
                    <div className="h-96 w-64 rounded-2xl overflow-hidden">
                        <img src={images.book_1} alt="" className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-1">
                            <p className="text-xl">Alan Trotter</p>
                            <p className="uppercase text-3xl font-medium">Muscle</p>
                        </div>
                        <div className="flex text-sm gap-4">
                            <div>
                                <ul>
                                    <li className="flex mb-2">
                                        <img src="" alt="" />
                                        <p>4.5</p>
                                        <p className="pl-1">(100)</p>
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
                                    <li><button className="underline mb-2">4 reviews</button></li>
                                    <li>Novel</li>
                                    <li>May 2007</li>
                                    <li>English</li>
                                    <li>208</li>
                                    <li>4-6 hours</li>
                                    <li>Hardcover</li>
                                    <li>Harvill Secker</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-2 text-3xl">
                            <p className="text-textLightGrayColor">$12.50</p>
                            <p>$10.50</p>
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
                            <img src={icons.arrow} alt="" className="w-5 h-5 -rotate-45" />
                        </div>
                        <div className="w-full">
                            <p className="line-clamp-[10] text-[15px]">In a hard-boiled city of crooks, grifts and rackets lurk a pair of toughs: Box and _____. They're the kind of men capable of extracting apologies and reparations, of teaching you a chilling lesson. They seldom think twice, and ask very few questions.Until one night over the poker table, they encounter a pulp writer with wild ideas and an unscrupulous private detective, leading them into what is either a classic mystery, a senseless maze of corpse</p>
                        </div>
                        <div>
                            <button className="flex uppercase  text-[15px] underline pt-1 font-medium">Read preview</button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-[22rem] h-16 rounded-xl bg-primaryColor p-3 uppercase">
                        <p className="font-medium">reception</p>
                        <img src={icons.arrow} alt="" className="w-5 h-5" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleBookDetail;