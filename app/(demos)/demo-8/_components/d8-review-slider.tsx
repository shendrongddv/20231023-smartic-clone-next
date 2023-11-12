"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { dataReviews } from "../data";
import Image from "next/image";

export const D8_Slider_Review = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 5000,
      }}
      breakpoints={{
        360: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },

        1140: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      className="AAA mx-auto mt-4 w-full"
    >
      {dataReviews?.map((item) => (
        <SwiperSlide key={item.id} className="BBB">
          <div className="CCC flex flex-col items-center gap-4 text-center max-md:px-4">
            {/* Avatar */}
            <div className="aspect-1 h-16 overflow-hidden rounded-full border-2 border-white bg-slate-500 shadow-lg">
              <Image
                src={`https://randomuser.me/api/portraits/${
                  item.isMale ? "men" : "women"
                }/${item.id}.jpg`}
                alt={item.name}
                width={64}
                height={64}
                className="h-full w-auto object-cover"
              />
            </div>

            {/* Review */}
            <p className="mt-2 font-medium text-black md:text-lg">
              &quot;{item.review}&quot;
            </p>

            {/* Rating */}
            <div className="mt-2 flex gap-1 text-destructive">
              <BsStarFill className="h-4 w-4" />
              <BsStarFill className="h-4 w-4" />
              <BsStarFill className="h-4 w-4" />
              <BsStarFill className="h-4 w-4" />
              <BsStarHalf className="h-4 w-4" />
            </div>

            {/* Reviewer */}
            <span className="-mt-2 text-sm md:text-base">
              {item.name}, {item.city}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
