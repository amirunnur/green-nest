import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
    const slides = [
    {
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      text: "Bring Nature Into Your Home",
    },
    {
      img: "https://i.ibb.co.com/svWzsckQ/yuriy-vertikov-GUSD6x-b2-QI-unsplash.jpg",
      text: "Plants Make Spaces Feel Alive",
    },
    {
      img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
      text: "Grow Green. Grow Happy.",
    },
  ];
    return (
        <div>
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }} 
        loop={true}
        className="h-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <h2 className="text-white text-3xl md:text-4xl font-bold bg-black/40 px-4 py-2 rounded-xl">
                {item.text}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </div>
    );
};

export default Slider;