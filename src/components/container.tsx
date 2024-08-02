import { cn } from "@/src/lib/utils";
import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={cn("mx-auto max-w-[1368px] w-full xl:px-0 px-2.5", className)}
    >
      {children}
    </div>
  );
};
