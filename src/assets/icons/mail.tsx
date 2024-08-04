import { FC } from "react";

interface Props {
  className?: string;
}

export const Mail: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="30" height="30" fill="#F5F5F5" />
      <g clip-path="url(#clip0_0_1)">
        <rect
          width="1920"
          height="4727"
          transform="translate(-1204 -3825)"
          fill="white"
        />
        <path
          d="M2.5 24.75H27.5V6H2.5V24.75Z"
          stroke="#1A54EA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M2.5 6L15 15.375L27.5 6"
          stroke="#1A54EA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect
            width="1920"
            height="4727"
            fill="white"
            transform="translate(-1204 -3825)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
