import { FC } from "react";

interface Props {
  className?: string;
}

export const CloseMenu: FC<Props> = ({ className }) => {
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
        d="M12.5 12.5L20 20M12.5 12.5L5 5M12.5 12.5L5 20M12.5 12.5L20 5"
        stroke="#1A54EA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
