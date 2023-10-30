"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper Modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
// Swiper CSS
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { dataReviews } from "../data";

import { FaStar } from "react-icons/fa";

export const D4_Review_Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      // autoHeight={true}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // centeredSlides={true}
      // effect={"fade"}
      // navigation
      // pagination={{ clickable: true }}
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
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },

        1140: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      }}
      className="AAA w-full"
    >
      {dataReviews?.map((item) => (
        <SwiperSlide key={item.id} className="BBB !h-auto w-full">
          <SlideSingle
            name={item.user.name}
            city={item.user.city}
            review={item.review}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Components
type SlideSingleProps = {
  name: string;
  city: string;
  review: string;
};

const SlideSingle = ({ name, city, review }: SlideSingleProps) => {
  return (
    <div className="CCC flex h-full w-full flex-col items-center justify-between gap-6 text-center md:items-start md:text-start">
      <p className="text-lg font-medium text-black">&quot;{review}&quot;</p>
      <div className="mt-auto flex flex-col gap-2 max-md:items-center">
        <div className="flex gap-1">
          <FaStar className="h-4 w-4 text-destructive" />
          <FaStar className="h-4 w-4 text-destructive" />
          <FaStar className="h-4 w-4 text-destructive" />
          <FaStar className="h-4 w-4 text-destructive" />
          <FaStar className="h-4 w-4 text-slate-500" />
        </div>
        {name}, {city}
      </div>
    </div>
  );
};
