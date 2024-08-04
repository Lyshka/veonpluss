import { FC } from "react";

interface Props {
  className?: string;
}

export const CloseModal: FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="group-hover:fill-primary-dark"
        d="M0.434315 0.565685C0.746734 0.253266 1.25327 0.253266 1.56569 0.565685L14.5765 13.5765C14.8889 13.8889 14.8889 14.3954 14.5765 14.7078C14.264 15.0202 13.7575 15.0202 13.4451 14.7078L0.434314 1.69706C0.121895 1.38464 0.121895 0.878105 0.434315 0.565685Z"
        fill="#3B4144"
      />
      <path
        className="group-hover:fill-primary-dark"
        d="M14.5657 0.565685C14.2533 0.253266 13.7467 0.253266 13.4343 0.565685L0.423549 13.5765C0.11113 13.8889 0.111131 14.3954 0.42355 14.7078C0.735969 15.0202 1.2425 15.0202 1.55492 14.7078L14.5657 1.69706C14.8781 1.38464 14.8781 0.878105 14.5657 0.565685Z"
        fill="#3B4144"
      />
    </svg>
  );
};
