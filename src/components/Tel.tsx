import Link from "next/link";
import { FC } from "react";
import { siteInfo } from "../constants/site";

interface Props {
  className?: string;
}

export const Tel: FC<Props> = ({ className }) => {
  return (
    <Link className={className} href={`tel:+${siteInfo.telClear}`}>
      {siteInfo.tel}
    </Link>
  );
};
