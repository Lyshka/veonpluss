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
    <section
      id="servives"
      className={cn("xl:space-y-10 space-y-[30px] scroll-mt-20", className)}
    >
      <div className="flex xl:items-center xl:justify-between">
        <h3 className="xl:text-[46px] text-2xl xl:leading-[54px] leading-[28.18px] font-semibold text-dark-2d">
          Наши услуги
        </h3>

        <div className="xl:flex hidden items-center gap-4">
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
        modules={[Navigation]}
        breakpoints={{
          1368: {
            spaceBetween: 24,
            width: 400,
            navigation: {
              prevEl: "#services .prev-btn",
              nextEl: "#services .next-btn",
            },
          },
          0: {
            spaceBetween: 10,
            slidesPerView: 1,
            navigation: {
              prevEl: "#services .prev-btn-mobile",
              nextEl: "#services .next-btn-mobile",
            },
          },
        }}
      >
        {services.map(({ id, imgUrl, title }) => (
          <SwiperSlide key={id} className="group xl:space-y-5 space-y-2.5 select-none">
            <div className="xl:h-[228px] h-[170px] overflow-hidden rounded-md border-b border-b-5 border-primary">
              <Image
                width={400}
                height={228}
                src={imgUrl}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110"
              />
            </div>

            <h2 className="font-semibold xl:text-2xl text-lg xl:leading-[28.18px] leading-[21.13px] text-dark-2d group-hover:text-primary-hover">
              {title}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="xl:hidden flex mx-auto w-fit items-center gap-4">
        <button
          onClick={handlePrevSlider}
          className="w-[42px] h-[42px] bg-gray-f1 rounded-full flex justify-center items-center group hover:bg-primary prev-btn-mobile"
        >
          <ArrowLeftSlider className="rotate-180" />
        </button>

        <button
          onClick={handleNextSlider}
          className="w-[42px] h-[42px] bg-gray-f1 rounded-full flex justify-center items-center group hover:bg-primary next-btn-mobile"
        >
          <ArrowLeftSlider />
        </button>
      </div>
    </section>
  );
};
