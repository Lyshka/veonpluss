import { FC } from "react";

interface Props {
  className?: string;
}

export const Clock: FC<Props> = ({ className }) => {
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
      <g clipPath="url(#clip0_0_1)">
        <rect
          width="1920"
          height="4727"
          transform="translate(-1204 -3775)"
          fill="white"
        />
        <path
          d="M15 27.5C21.9038 27.5 27.5 21.9038 27.5 15C27.5 8.09625 21.9038 2.5 15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9038 8.09625 27.5 15 27.5Z"
          stroke="#1A54EA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M15.005 7.5V15.0063L20.3044 20.3063"
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
            transform="translate(-1204 -3775)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
