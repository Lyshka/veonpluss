import { FC } from "react";
import { cn } from "../lib/utils";
import { edges } from "../constants/edges";

interface Props {
  className?: string;
}

export const Edges: FC<Props> = ({ className }) => {
  return (
    <section id="edges" className={cn("scroll-mt-20", className)}>
      <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-6 gap-5">
        <li>
          <h3 className="font-semibold xl:text-[46px] text-2xl xl:leading-[54px] leading-[28.18px] text-dark-2d">
            С нами Вы
            <br /> сэкономите на:
          </h3>
        </li>

        {edges.map(({ desc, id, title }, idx) => (
          <li
            className="xl:h-[204px] rounded-md xl:px-[30px] px-2.5 xl:py-[30px] py-5 bg-primary hover:bg-primary-hover hover:shadow-button transition-all duration-300 text-white flex xl:justify-between xl:gap-0 gap-10 flex-col"
            key={id}
          >
            <div className="flex items-center justify-between">
              <h2
                className="font-semibold xl:text-2xl text-lg xl:leading-[28.18px] leading-[21.13px]"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <span className="xl:text-[40px] text-[30px] xl:leading-[46.96px] leading-[35.22px] font-extrabold lining-nums">
                0{idx + 1}
              </span>
            </div>

            <p className="xl:text-base text-sm xl:leading-[18.78px] leading-[16.44px]">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
