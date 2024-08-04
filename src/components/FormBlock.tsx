import { FC } from "react";
import { cn } from "../lib/utils";
import { Form, Tel } from ".";
import { socials } from "../constants/social";
import Link from "next/link";

interface Props {
  className?: string;
}

export const FormBlock: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn(
        "shadow-main bg-gray-f1 rounded-md py-10 px-[60px] flex gap-[321px]",
        className
      )}
    >
      <div className="space-y-[30px]">
        <h5 className="font-semibold text-[46px] leading-[54px] text-dark-2d">
          Нужна помощь
          <br />в хранении товара?
        </h5>

        <p className="text-2xl leading-[28.18px] font-medium text-gray-49">
          Оставьте Ваши контакты и мы свяжемся
          <br /> с Вами в течении рабочего дня
        </p>

        <div className="space-y-5 font-medium text-lg leading-[21.13px] text-gray-49">
          <p>Не хотите ждать?</p>

          <p className="flex items-center gap-2.5">
            Звоните по номеру:{" "}
            <Tel className="font-semibold text-xl leading-[23.48px] text-primary hover:text-primary-hover lining-nums" />
          </p>

          <ul className="flex gap-4 items-center">
            {socials.map(({ icon, id, link }) => (
              <li key={id}>
                <Link
                  className="bg-primary w-10 h-10 rounded-full hover:shadow-social hover:bg-primary-hover flex justify-center items-center"
                  href={link}
                >
                  {icon({})}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Form />
    </section>
  );
};
