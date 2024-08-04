import { FC } from "react";
import { cn } from "../lib/utils";
import { Form, Social, Tel } from ".";
import Link from "next/link";
import { siteInfo } from "../constants/site";
import { Address, Clock, Mail } from "../assets/icons";

interface Props {
  className?: string;
}

export const Contact: FC<Props> = ({ className }) => {
  return (
    <section
      id="contact"
      className={cn("xl:space-y-[60px] space-y-5 scroll-mt-20", className)}
    >
      <div className="flex xl:justify-between xl:flex-row flex-col xl:gap-0 gap-[30px]">
        <h3 className="font-semibold xl:text-[46px] text-2xl xl:leading-[54px] leading-[28.18px] text-dark-2d">
          Адрес и контакты
        </h3>

        <div className="flex xl:flex-row flex-col xl:gap-[60px] gap-5">
          <div className="flex xl:items-center flex-col xl:gap-4 gap-5">
            <Tel className="font-semibold xl:text-[32px] text-xl xl:leading-[37.57px] leading-[23.48px] text-primary hover:text-primary-hover" />

            <Social />
          </div>

          <ul className="list-info-site">
            <li>
              <Address />

              <address dangerouslySetInnerHTML={{ __html: siteInfo.address }} />
            </li>

            <li>
              <Clock />

              <time dangerouslySetInnerHTML={{ __html: siteInfo.timeWork }} />
            </li>

            <li>
              <Mail />

              <Link href={`mailto:${siteInfo.email}`}>
                <span>{siteInfo.email}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="xl:h-[650px] xl:relative xl:space-y-0 space-y-5">
        <iframe
          className="w-full xl:h-full h-[340px]"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1a49642c68b8538838ff9bbeff1694fb5899273caac1de5ea96a481edd1cba8&amp;source=constructor"
        ></iframe>

        <div className="xl:absolute xl:top-8 xl:left-8 xl:max-w-[462px] w-full bg-gray-f1 rounded-md xl:h-[calc(100%-64px)] xl:px-[50px] px-2.5 xl:py-10 py-[30px] xl:space-y-[30px] space-y-5">
          <div className="xl:space-y-4 space-y-5">
            <h6 className="xl:text-4xl text-2xl xl:leading-[42.26px] leading-[28.18px] font-semibold text-dark-2d">
              У Вас есть вопросы или предложения?
            </h6>

            <p className="text-base leading-[18.78px] text-gray-49">
              Вы можете связаться с нами по телефонам указанным выше или
              оставьте контакты, заполнив форму обратной связи
            </p>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};
