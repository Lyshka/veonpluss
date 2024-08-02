import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import { cn } from "@/src/lib/utils";
import "./globals.css";

const raleway = Raleway({
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: "ООО Веон плюс",
  description:
    "Услуги ответственного хранения в широком температурном диапазоне и складской обработки товара различного назначения",
  icons: "favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn("min-h-screen", raleway.className)}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
