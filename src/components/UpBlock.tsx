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
      className={cn("-mt-20 relative h-[800px] flex items-center", className)}
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

      <Container className="z-[1] flex flex-col gap-[50px]">
        <div className="space-y-7">
          <h1 className="font-semibold text-[60px] leading-[70.44px] flex flex-col gap-2.5 text-white">
            <span>Складская логистика.</span>
            <span>Хранение товаров различной</span>
            <span>отраслевой принадлежности</span>
          </h1>

          <p className="max-w-[697px] w-full text-gray-ea text-xl font-medium leading-[23.48px]">
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
