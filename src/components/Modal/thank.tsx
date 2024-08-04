"use client";

import { CloseModal } from "@/src/assets/icons";
import { cn } from "@/src/lib/utils";
import { useMobileMenu } from "@/src/store/useMobileMenu";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Thank: FC<Props> = ({ className }) => {
  const { isOpen, setIsOpen } = useMobileMenu();

  return (
    <section
      id="thankModal"
      className={cn(
        "bg-white/40 backdrop-blur justify-center items-center h-screen w-full fixed inset-0 z-[3] xl:px-0 px-2.5 animHidden hidden",
        className,
        isOpen && "open"
      )}
    >
      <div className="xl:max-w-[743px] rounded-md flex justify-center xl:gap-[60px] gap-10 items-center xl:h-[395px] xl:py-0 py-10 flex-col w-full bg-white shadow-main relative xl:px-0 px-2.5">
        <button
          onClick={setIsOpen}
          className="absolute xl:top-[30px] top-4 xl:right-[30px] right-4 xl:-m-[30px] -m-4 xl:p-[30px] p-4 group"
        >
          <CloseModal />
        </button>

        <div className="flex flex-col items-center xl:gap-[30px] gap-5">
          <h6 className="font-semibold xl:text-[46px] text-2xl xl:leading-[54px] leading-[28.18px] text-dark-2d">
            Спасибо!
          </h6>

          <p className="xl:text-base text-center text-sm xl:leading-[18.78px] text-gray-49">
            Мы получили Вашу заявку и свяжемся с Вами в ближайшее время
          </p>
        </div>

        <button onClick={setIsOpen} className="btn-primary">
          Хорошо
        </button>
      </div>
    </section>
  );
};
