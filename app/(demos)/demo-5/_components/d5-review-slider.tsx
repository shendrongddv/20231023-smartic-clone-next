"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { dataReviews } from "../data";

export const D5_Slider_Review = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 5000,
      }}
      slidesPerView={1}
      spaceBetween={0}
      className="AAA mt-4 w-full"
    >
      {dataReviews?.map((item) => (
        <SwiperSlide key={item.id} className="BBB">
          <div className="CCC flex flex-col items-center gap-4 text-center text-white max-md:px-4">
            {/* Rating */}
            <div className="flex gap-1 text-yellow-300">
              <BsStarFill className="h-4 w-4" />
              <BsStarFill className="h-4 w-4" />
              <BsStarFill className="h-4 w-4" />
              <BsStarFill className="h-4 w-4" />
              <BsStarHalf className="h-4 w-4" />
            </div>

            {/* Review */}
            <p className="font-medium md:text-lg">&quot;{item.review}&quot;</p>

            {/* Reviewer */}
            <span className="mt-2 text-sm md:text-base">
              {item.user.name}, {item.user.city}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
