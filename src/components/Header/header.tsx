import { FC } from "react";
import Link from "next/link";

import { Container, Menu, Tel } from "..";
import { cn } from "../../lib/utils";
import { siteInfo } from "@/src/constants/site";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  return (
    <header
      className={cn(
        "shadow-header sticky bg-white/90 top-0 z-[3] backdrop-blur w-full h-20 flex justify-center items-center",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-[92px]">
          <Link
            className="font-semibold text-[30px] leading-[35.22px] text-primary hover:text-primary-hover"
            href={"/"}
          >
            {siteInfo.nameSite}
          </Link>

          <Menu />
        </div>

        <div className="flex flex-col items-end gap-2.5">
          <Tel className="flex items-center gap-[5px] font-medium text-xl leading-[23.48px] text-dark-36 hover:text-primary-hover lining-nums" />

          <Link
            className="text-base font-medium leading-[18.78px] text-primary hover:text-primary-hover"
            href={"/"}
          >
            Заказать звонок
          </Link>
        </div>
      </Container>
    </header>
  );
};
