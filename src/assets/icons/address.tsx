import { FC } from "react";

interface Props {
  className?: string;
}

export const Address: FC<Props> = ({ className }) => {
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
          transform="translate(-1204 -3712)"
          fill="white"
        />
        <path
          d="M15 27.5C15 27.5 24.375 20 24.375 11.875C24.375 6.6975 20.1775 2.5 15 2.5C9.8225 2.5 5.625 6.6975 5.625 11.875C5.625 20 15 27.5 15 27.5Z"
          stroke="#1A54EA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M15 15.625C15.4925 15.625 15.9801 15.528 16.4351 15.3395C16.89 15.1511 17.3034 14.8749 17.6517 14.5267C17.9999 14.1784 18.2761 13.765 18.4645 13.3101C18.653 12.8551 18.75 12.3675 18.75 11.875C18.75 11.3825 18.653 10.8949 18.4645 10.4399C18.2761 9.98497 17.9999 9.57157 17.6517 9.22335C17.3034 8.87513 16.89 8.59891 16.4351 8.41045C15.9801 8.222 15.4925 8.125 15 8.125C14.0054 8.125 13.0516 8.52009 12.3483 9.22335C11.6451 9.92661 11.25 10.8804 11.25 11.875C11.25 12.8696 11.6451 13.8234 12.3483 14.5267C13.0516 15.2299 14.0054 15.625 15 15.625Z"
          stroke="#1A54EA"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1">
          <rect
            width="1920"
            height="4727"
            fill="white"
            transform="translate(-1204 -3712)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
