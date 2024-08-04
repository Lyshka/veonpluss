import { FC } from "react";
import { cn } from "../lib/utils";
import { edges } from "../constants/edges";

interface Props {
  className?: string;
}

export const Edges: FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <ul className="grid grid-cols-3 gap-6">
        <li>
          <h3 className="font-semibold text-[46px] leading-[54px] text-dark-2d">
            С нами Вы
            <br /> сэкономите на:
          </h3>
        </li>

        {edges.map(({ desc, id, title }, idx) => (
          <li
            className="h-[204px] rounded-md p-[30px] bg-primary hover:bg-primary-hover hover:shadow-button transition-all duration-300 text-white flex justify-between flex-col"
            key={id}
          >
            <div className="flex items-center justify-between">
              <h2
                className="font-semibold text-2xl leading-[28.18px]"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <span className="text-[40px] leading-[46.96px] font-extrabold lining-nums">
                0{idx + 1}
              </span>
            </div>

            <p className="text-base leading-[18.78px]">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
