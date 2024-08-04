"use client";

import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IMaskInput } from "react-imask";

import { cn } from "../lib/utils";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  className?: string;
}

export const Form: FC<Props> = ({ className }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    const nameValue = event.target.value;

    setName(nameValue);
  };

  const handleTelInput = (event: ChangeEvent<HTMLInputElement>) => {
    const telValue = event.target.value;

    setTel(telValue);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!name) {
      toast.warning("Не правильное имя!");
      return;
    }

    if (tel.length < 17) {
      toast.warning("Не правильный формат телефона!");
      return;
    }
  };

  return (
    <>
      <div className="absolute">
        <ToastContainer />
      </div>

      <form
        onSubmit={handleFormSubmit}
        className={cn(
          "max-w-[360px] w-full flex-shrink-0 space-y-[30px]",
          className
        )}
      >
        <label className="flex flex-col gap-4">
          <span>Ваше имя</span>

          <input onChange={handleNameInput} type="text" />
        </label>

        <div className="space-y-3.5">
          <label className="flex flex-col gap-4">
            <span>Номер телефона</span>

            <IMaskInput
              onChange={handleTelInput}
              type="text"
              mask="+375 (00) 000-00-00"
            />
          </label>

          <p className="max-w-[312px] w-full text-sm leading-[16.44px] text-gray-66">
            Нажимая «Отправить», Вы соглашаетесь с Политикой обработки
            персональных данных
          </p>
        </div>

        <button type="submit" className="btn-primary">
          Отправить
        </button>
      </form>
    </>
  );
};
