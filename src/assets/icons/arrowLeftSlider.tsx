import { FC } from "react";

interface Props {
  className?: string;
}

export const ArrowLeftSlider: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_64_539)">
        <path
          d="M7.98152 23.5251L18.6517 12.8865C18.7783 12.7599 18.8678 12.6227 18.9202 12.4749C18.9734 12.3272 19 12.1689 19 12C19 11.8311 18.9734 11.6728 18.9202 11.5251C18.8678 11.3773 18.7783 11.2401 18.6517 11.1135L7.98152 0.443272C7.686 0.147757 7.31661 0 6.87334 0C6.43007 0 6.05012 0.158311 5.7335 0.474934C5.41687 0.791557 5.25856 1.16095 5.25856 1.58311C5.25856 2.00528 5.41687 2.37467 5.7335 2.69129L15.0422 12L5.7335 21.3087C5.43798 21.6042 5.29022 21.9681 5.29022 22.4004C5.29022 22.8336 5.44853 23.2084 5.76516 23.5251C6.08178 23.8417 6.45117 24 6.87334 24C7.2955 24 7.66489 23.8417 7.98152 23.5251Z"
          fill="#1A54EA"
          className="group-hover:fill-white"
        />
      </g>
      <defs>
        <clipPath id="clip0_64_539">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="matrix(-1 0 0 1 24 0)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
