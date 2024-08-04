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
    <section id="contact" className={cn("space-y-[60px]", className)}>
      <div className="flex justify-between">
        <h3 className="font-semibold text-[46px] leading-[54px] text-dark-2d">
          Адрес и контакты
        </h3>

        <div className="flex gap-[60px]">
          <div className="flex items-center flex-col gap-4">
            <Tel className="font-semibold text-[32px] leading-[37.57px] text-primary hover:text-primary-hover" />

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

      <div className="h-[650px] relative">
        <iframe
          className="w-full h-full"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa1a49642c68b8538838ff9bbeff1694fb5899273caac1de5ea96a481edd1cba8&amp;source=constructor"
        ></iframe>

        <div className="absolute top-8 left-8 max-w-[462px] w-full bg-gray-f1 rounded-md h-[calc(100%-64px)] px-[50px] py-10 space-y-[30px]">
          <div className="space-y-4">
            <h6 className="text-4xl leading-[42.26px] font-semibold text-dark-2d">
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
