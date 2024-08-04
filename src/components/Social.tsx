import { FC } from "react";
import { cn } from "../lib/utils";
import { socials } from "../constants/social";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Social: FC<Props> = ({ className }) => {
  return (
    <ul className={cn("flex gap-4 items-center", className)}>
      {socials.map(({ icon, id, link }) => (
        <li key={id}>
          <Link
            className="bg-primary w-10 h-10 rounded-full hover:shadow-social hover:bg-primary-hover flex justify-center items-center"
            href={link}
          >
            {icon({})}
          </Link>
        </li>
      ))}
    </ul>
  );
};
