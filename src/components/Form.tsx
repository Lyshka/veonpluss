"use client";

import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IMaskInput } from "react-imask";
import emailjs from "@emailjs/browser";

import { cn } from "../lib/utils";

import "react-toastify/dist/ReactToastify.css";
import { useMobileMenu } from "../store/useMobileMenu";

interface Props {
  className?: string;
}

export const Form: FC<Props> = ({ className }) => {
  const formRef = useRef<any>();
  const { setIsOpen, isOpen } = useMobileMenu();
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const EMAIL_YOUR_SERVICE_ID = process.env
    .NEXT_PUBLIC_EMAIL_YOUR_SERVICE_ID as string;
  const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string;
  const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string;

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

    setIsSubmit(true);

    emailjs
      .sendForm(EMAIL_YOUR_SERVICE_ID, EMAIL_TEMPLATE_ID, formRef?.current, {
        publicKey: EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          setIsOpen();
          formRef.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      )
      .finally(() => {
        setIsSubmit(false);
      });
  };

  return (
    <>
      <div className="absolute">
        <ToastContainer />
      </div>

      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        className={cn(
          "xl:max-w-[360px] w-full flex-shrink-0 xl:space-y-[30px] space-y-5",
          className
        )}
      >
        <label className="flex flex-col xl:gap-4 gap-2.5">
          <span>Ваше имя</span>

          <input name="name" onChange={handleNameInput} type="text" />
        </label>

        <div className="xl:space-y-3.5 space-y-3.5">
          <label className="flex flex-col xl:gap-4 gap-2.5">
            <span>Номер телефона</span>

            <IMaskInput
              name="tel"
              onChange={handleTelInput}
              type="tel"
              mask="+375 (00) 000-00-00"
            />
          </label>

          <p className="xl:max-w-[312px] w-full text-sm leading-[16.44px] text-gray-66">
            Нажимая «Отправить», Вы соглашаетесь с Политикой обработки
            персональных данных
          </p>
        </div>

        <button disabled={isSubmit} type="submit" className="btn-primary">
          Отправить
        </button>
      </form>
    </>
  );
};
