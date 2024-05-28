import React, { useState } from "react";
import { ProductCard } from "../../Shared";
import { allBooksData } from "../../../utils/MockupData";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const RecommendationSection = () => {

    return (
        <div className="flex flex-col gap-2">
            <div className="text-2xl uppercase font-medium">
                <h1>you may also like</h1>
            </div>
            <div className="flex w-full">
                <Swiper
                    spaceBetween={1}

                    breakpoints={{
                        slidesPerView: 6,

                        320: {
                            slidesPerView: 1,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 6,
                        },
                        572: {
                            slidesPerView: 3,
                            spaceBetween: 6,
                        },
                        720: {
                            slidesPerView: 4,
                            spaceBetween: 6,
                        },
                        940: {
                            slidesPerView: 5,
                            spaceBetween: 6,
                        },
                        1250: {
                            slidesPerView: 6,
                        }

                    }}
                    grabCursor={true}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className={`w-full`}
                >

                    {
                        allBooksData.filter((book, index) => index < 6).map((book, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProductCard
                                        key={index}
                                        image={book.book_img}
                                        name={book.book_name}
                                        intro={book.author_name}
                                        isIcon={true}
                                    />
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default RecommendationSection;