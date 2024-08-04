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
        "bg-primary-dark flex justify-center items-center h-[114px]",
        className
      )}
    >
      <Container className="flex items-end justify-between text-white">
        <div className="flex items-end gap-2.5">
          <Link className="text-4xl leading-[42.26px] font-bold" href="/">
            {siteInfo.nameSite}
          </Link>

          <span className="text-base leading-[18.78px]">
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
