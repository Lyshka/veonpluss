import { FC } from "react";

interface Props {
  className?: string;
}

export const PlusMinus: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="39"
      viewBox="0 0 20 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.98 6.24V13.92H14.28V20.16H5.64V13.92H0V6.24H5.64V0H14.28V6.24H19.98Z"
        fill="#1A54EA"
      />
      <path d="M1 38.7999V30.1599H19.48V38.7999H1Z" fill="#1A54EA" />
    </svg>
  );
};
