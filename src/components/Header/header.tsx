"use client";

import { FC, useState } from "react";
import Link from "next/link";

import { Container, Menu, MobileMenu, Tel } from "..";
import { cn } from "../../lib/utils";
import { siteInfo } from "@/src/constants/site";
import {
  OutlinePHoneTElephone,
  CloseMenu,
  BurgerMenu,
} from "@/src/assets/icons";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsOpen((prv) => !prv);
  };

  return (
    <header
      className={cn(
        "shadow-header sticky bg-white/90 top-0 z-[3] backdrop-blur w-full xl:h-20 h-10 flex justify-center items-center",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex xl:items-center xl:gap-[92px]">
          <Link
            className="font-semibold xl:text-[30px] text-base xl:leading-[35.22px] leading-[18.78px] text-primary hover:text-primary-hover"
            href={"/"}
          >
            {siteInfo.nameSite}
          </Link>

          <Menu className="xl:flex hidden" />
        </div>

        <div className="xl:flex hidden flex-col items-end gap-2.5">
          <Tel className="flex items-center gap-[5px] font-medium text-xl leading-[23.48px] text-dark-36 hover:text-primary-hover lining-nums" />

          <Link
            className="text-base font-medium leading-[18.78px] text-primary hover:text-primary-hover"
            href={"#order"}
          >
            Заказать звонок
          </Link>
        </div>

        <div className="xl:hidden flex items-center gap-2.5">
          <Link href={`tel:+${siteInfo.telClear}`}>
            <OutlinePHoneTElephone />
          </Link>

          <button
            onClick={handleOpenMobileMenu}
            id="handleMobileMenu"
            className={cn(
              "flex justify-center items-center relative w-[25px] h-[25px]",
              isOpen && "open"
            )}
          >
            <BurgerMenu className="absolute burger-icon" />
            <CloseMenu className="absolute close-icon" />
          </button>
        </div>
      </Container>

      <MobileMenu isOpen={isOpen} handle={handleOpenMobileMenu} />
    </header>
  );
};
