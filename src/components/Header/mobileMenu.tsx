import { OutlinePHoneTElephone } from "@/src/assets/icons";
import { menu } from "@/src/constants/menu";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Tel } from "..";

interface Props {
  className?: string;
  handle: () => void;
  isOpen: boolean;
}

export const MobileMenu: FC<Props> = ({ className, handle, isOpen }) => {
  return (
    <section
      className={cn(
        "absolute top-10 right-0 max-w-[232px] w-full bg-white/90 backdrop-blur py-6 animHidden px-4 z-[2] space-y-20 animHidden",
        className,
        isOpen ? "xl:hidden block" : "hidden"
      )}
    >
      <nav>
        <ul className="space-y-5 text-dark-36 text-base leading-[18.78px]">
          {menu.map(({ id, link, title }) => (
            <li key={id}>
              <Link onClick={handle} className="hover:text-primary" href={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <OutlinePHoneTElephone />

          <Tel className="text-lg leading-[21.13px] font-medium text-dark-36 lining-nums" />
        </div>

        <Link
          className="text-base leading-[18.78px] font-medium text-primary hover:text-primary-hover block"
          href={"#order"}
        >
          Заказать звонок
        </Link>
      </div>
    </section>
  );
};
