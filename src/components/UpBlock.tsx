import { FC } from "react";
import { cn } from "../lib/utils";
import Image from "next/image";
import { bgUpBlock } from "../assets/images";
import { Container } from ".";
import Link from "next/link";

interface Props {
  className?: string;
}

export const UpBlock: FC<Props> = ({ className }) => {
  return (
    <section
      className={cn("xl:-mt-20 -mt-10 relative xl:h-[800px] flex items-center xl:pt-0", className)}
    >
      <div className="absolute w-full h-full">
        <Image
          className="h-full w-full object-cover"
          width={1920}
          height={800}
          src={bgUpBlock}
          alt="Задний фон"
        />
      </div>

      <Container className="z-[1] flex flex-col xl:gap-[50px] gap-10 xl:py-0 py-[110px]">
        <div className="xl:space-y-7 space-y-5">
          <h1 className="font-semibold xl:text-[60px] text-[26px] xl:leading-[70.44px] leading-[30.52px] flex flex-col xl:gap-2.5 gap-1.5 text-white">
            <span>Складская логистика.</span>
            <span>Хранение товаров различной</span>
            <span>отраслевой принадлежности</span>
          </h1>

          <p className="xl:max-w-[697px] w-full text-gray-ea xl:text-xl text-base font-medium xl:leading-[23.48px] leading-[18.78px]">
            Услуги ответственного хранения в широком температурном диапазоне и
            складской обработки товара различного назначения
          </p>
        </div>

        <Link className="btn-primary" href={"/"}>
          Подробнее
        </Link>
      </Container>
    </section>
  );
};
