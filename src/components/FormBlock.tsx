import { FC } from "react";
import { cn } from "../lib/utils";
import { Form, Social, Tel } from ".";

interface Props {
  className?: string;
}

export const FormBlock: FC<Props> = ({ className }) => {
  return (
    <section
      id="order"
      className={cn(
        "shadow-main scroll-mt-20 bg-gray-f1 rounded-md xl:py-10 py-[30px] xl:px-[60px] px-2.5 flex xl:flex-row flex-col xl:gap-[321px] gap-5",
        className
      )}
    >
      <div className="xl:space-y-[30px] space-y-5">
        <h5 className="font-semibold xl:text-[46px] text-2xl xl:leading-[54px] leading-[28.18px] text-dark-2d">
          Нужна помощь
          <br />в хранении товара?
        </h5>

        <p className="xl:text-2xl text-lg xl:leading-[28.18px] leading-[21.13px] font-medium text-gray-49">
          Оставьте Ваши контакты и мы свяжемся
          <br /> с Вами в течении рабочего дня
        </p>

        <div className="space-y-5 xl:block hidden font-medium text-lg leading-[21.13px] text-gray-49">
          <p>Не хотите ждать?</p>

          <p className="flex items-center gap-2.5">
            Звоните по номеру:{" "}
            <Tel className="font-semibold text-xl leading-[23.48px] text-primary hover:text-primary-hover lining-nums" />
          </p>

          <Social />
        </div>
      </div>

      <Form />

      <div className="space-y-5 xl:hidden block font-medium text-lg leading-[21.13px] text-gray-49">
        <p>Не хотите ждать?</p>

        <p className="flex xl:flex-row flex-col xl:items-center xl:gap-2.5 gap-1.5">
          Звоните по номеру:{" "}
          <Tel className="font-semibold text-xl leading-[23.48px] text-primary hover:text-primary-hover lining-nums" />
        </p>

        <Social />
      </div>
    </section>
  );
};
