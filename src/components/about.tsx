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
    <section id="about" className={cn("xl:space-y-[60px] space-y-5 scroll-mt-20", className)}>
      <div className="flex xl:flex-row flex-col xl:gap-[200px] gap-[30px]">
        <h3 className="font-semibold xl:text-[46px] text-2xl xl:leading-[54px] leading-[28.18px] text-dark-2d">
          О компании
        </h3>

        <div className="space-y-5 xl:max-w-[696px] w-full">
          <p className="font-medium xl:text-2xl text-base text-gray-49 xl:leading-[28.18px] leading-[18.78px]">
            ООО “Веон плюс” учитывает все пожелания клиентов и старается сделать
            сотрудничество максимально удобным
          </p>

          <ul className="flex xl:flex-row flex-col xl:gap-[114px] gap-5 xl:items-start items-center">
            <li className="flex flex-col gap-2.5 xl:items-start items-center xl:max-w-[234px] max-w-[205px] w-full group">
              <strong className="font-extrabold xl:text-[60px] text-[50px] xl:leading-[70.44px] leading-[58.7px] text-primary hover:text-primary-hover transition-all lining-nums duration-300">
                3000
              </strong>

              <p className="font-medium xl:text-base text-sm xl:leading-[18.78px] leading-[16.44px] text-gray-49 lining-nums xl:text-left text-center">
                м2 площадей для размещения Ваших товаров
              </p>
            </li>

            <li className="flex flex-col gap-2.5 xl:items-start items-center xl:max-w-[180px] max-w-[158px] w-full group">
              <strong className="font-extrabold xl:text-[60px] text-[50px] xl:leading-[70.44px] leading-[58.7px] text-primary hover:text-primary-hover transition-all duration-300 flex items-center gap-2.5 lining-nums">
                <PlusMinus />
                <span>
                  25<span className="text-[30px] leading-[35.22px]">℃</span>
                </span>
              </strong>

              <p className="font-medium xl:text-base text-sm xl:leading-[18.78px] leading-[16.44px] text-gray-49 lining-nums xl:text-left text-center">
                температурный режим хранения товара
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="xl:flex xl:gap-9">
        <ul className="space-y-5">
          {aboutList.map(({ desc, id, title }) => (
            <li
              className="group shadow-main bg-gray-f1 rounded-md py-5 xl:pr-10 pr-2.5 xl:pl-[30px] pl-2.5 space-y-2.5"
              key={id}
            >
              <h5 className="font-semibold text-lg leading-[21.13px] text-primary group-hover:text-primary-hover">
                {title}
              </h5>

              <p className="xl:text-base text-sm xl:leading-[18.78px] leading-[16.44px] text-gray-49">{desc}</p>
            </li>
          ))}
        </ul>

        <div className="group max-w-[672px] h-[598px] w-full overflow-hidden rounded-md flex-shrink-0 xl:block hidden">
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
