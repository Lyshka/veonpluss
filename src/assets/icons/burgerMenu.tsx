import { FC } from "react";

interface Props {
  className?: string;
}

export const BurgerMenu: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7H21M4 12.2619H21M4 17.5238H21"
        stroke="#1A54EA"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};
