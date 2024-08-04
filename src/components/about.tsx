import { FC } from "react";
import { cn } from "../lib/utils";
import { PlusMinus } from "../assets/icons";
import Image from "next/image";
import { about } from "../assets/images";
import { aboutList } from "../constants/about";

interface Props {
  className?: string;
}

export const About: FC<Props> = ({ className }) => {
  return (
    <section className={cn("space-y-[60px]", className)}>
      <div className="flex gap-[200px]">
        <h3 className="font-semibold text-[46px] leading-[54px] text-dark-2d">
          О компании
        </h3>

        <div className="space-y-5 max-w-[696px] w-full">
          <p className="font-medium text-2xl text-gray-49 leading-[28.18px]">
            ООО “Веон плюс” учитывает все пожелания клиентов и старается сделать
            сотрудничество максимально удобным
          </p>

          <ul className="flex gap-[114px]">
            <li className="flex flex-col gap-2.5 max-w-[234px] w-full group">
              <strong className="font-extrabold text-[60px] leading-[70.44px] text-primary hover:text-primary-hover transition-all duration-300">
                3000
              </strong>

              <p className="font-medium text-base leading-[18.78px] text-gray-49 lining-nums">
                м2 площадей для размещения Ваших товаров
              </p>
            </li>

            <li className="flex flex-col gap-2.5 max-w-[180px] w-full group">
              <strong className="font-extrabold text-[60px] leading-[70.44px] text-primary hover:text-primary-hover transition-all duration-300 flex gap-2.5 items-center line lining-nums">
                <PlusMinus />
                <span>
                  25<span className="text-[30px] leading-[35.22px]">℃</span>
                </span>
              </strong>

              <p className="font-medium text-base leading-[18.78px] text-gray-49 lining-nums">
                температурный режим хранения товара
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-9">
        <ul className="space-y-[22px]">
          {aboutList.map(({ desc, id, title }) => (
            <li
              className="group shadow-main bg-gray-f1 rounded-md py-5 pr-10 pl-[30px] space-y-2.5"
              key={id}
            >
              <h5 className="font-semibold text-lg leading-[21.13px] text-primary group-hover:text-primary-hover">{title}</h5>

              <p className="text-base leading-[18.78px] text-gray-49">{desc}</p>
            </li>
          ))}
        </ul>

        <div className="group max-w-[672px] h-[598px] w-full overflow-hidden rounded-md flex-shrink-0">
          <Image
            src={about}
            alt="Помещение"
            width={672}
            height={580}
            className="w-full h-full group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};
