"use client";

import { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { cn } from "../lib/utils";
import "swiper/css";
import { services } from "../constants/services";
import Image from "next/image";
import { ArrowLeftSlider } from "../assets/icons";

interface Props {
  className?: string;
}

export const Services: FC<Props> = ({ className }) => {
  const swipper = useSwiper();

  const handlePrevSlider = () => {
    swipper?.slidePrev();
  };

  const handleNextSlider = () => {
    swipper?.slideNext();
  };

  return (
    <section id="services" className={cn("space-y-10", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-[46px] leading-[54px] font-semibold text-dark-2d">
          Наши услуги
        </h3>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePrevSlider}
            className="w-[42px] h-[42px] bg-gray-f1 rounded-full flex justify-center items-center group hover:bg-primary prev-btn"
          >
            <ArrowLeftSlider className="rotate-180" />
          </button>

          <button
            onClick={handleNextSlider}
            className="w-[42px] h-[42px] bg-gray-f1 rounded-full flex justify-center items-center group hover:bg-primary next-btn"
          >
            <ArrowLeftSlider />
          </button>
        </div>
      </div>

      <Swiper
        navigation={{
          prevEl: "#services .prev-btn",
          nextEl: "#services .next-btn",
        }}
        modules={[Navigation]}
        spaceBetween={24}
        width={400}
      >
        {services.map(({ id, imgUrl, title }) => (
          <SwiperSlide key={id} className="group space-y-5 select-none">
            <div className="h-[228px] overflow-hidden rounded-md border-b border-b-5 border-primary">
              <Image
                width={400}
                height={228}
                src={imgUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110"
              />
            </div>

            <h2 className="font-semibold text-2xl leading-[28.18px] text-dark-2d group-hover:text-primary-hover">
              {title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
