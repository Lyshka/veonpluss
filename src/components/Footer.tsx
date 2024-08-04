import { FC } from "react";
import { cn } from "../lib/utils";
import { Container } from ".";
import { siteInfo } from "../constants/site";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer
      className={cn(
        "bg-primary-dark flex justify-center items-center xl:h-[114px] py-5",
        className
      )}
    >
      <Container className="flex xl:items-end xl:flex-row flex-col items-center xl:gap-0 gap-6 xl:justify-between text-white">
        <div className="flex items-end gap-2.5">
          <Link className="xl:text-4xl text-lg xl:leading-[42.26px] leading-[21.13px] font-bold" href="/">
            {siteInfo.nameSite}
          </Link>

          <span className="xl:text-base text-xs xl:leading-[18.78px] leading-[14.09px]">
            ©{new Date().getFullYear()}
          </span>
        </div>

        <Link
          className="text-xs leading-[14.09px] font-light"
          target="_blank"
          href={"https://artcly.by/"}
        >Создание сайта: ArtCly.by</Link>

        <Link href={"/"} className="text-xs leading-[14.09px] font-light">
          Политика обработки персональных данных
        </Link>
      </Container>
    </footer>
  );
};
