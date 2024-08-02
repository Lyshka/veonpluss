import { FC } from "react";

import { menu } from "@/src/constants/menu";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Menu: FC<Props> = ({ className }) => {
  return (
    <nav className={className}>
      <ul className="flex gap-[50px] items-center">
        {menu.map(({ id, link, title }) => (
          <li key={id}>
            <Link className="text-base leading-[18.78px] text-dark-36 hover:text-primary-hover" href={link}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
