import { FC } from "react";
import { Container } from ".";
import { cn } from "../lib/utils";

interface Props {
  className?: string;
}

export const Services: FC<Props> = ({ className }) => {
  return (
    <Container className={cn("soace-y-10", className)}>
      <div>
        <h3 className="text-[46px] leading-[54px] font-semibold text-dark-2d">
          Наши услуги
        </h3>
      </div>
    </Container>
  );
};
