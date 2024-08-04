import { siteInfo } from "./site";
import { Telegram, Viber, Whatsup } from "@/src/assets/icons";

export const socials = [
  {
    id: 1,
    link: `https://t.me/+${siteInfo.telClear}`,
    icon: Telegram,
  },
  {
    id: 2,
    link: `https://api.whatsapp.com/send?phone=${siteInfo.telClear}`,
    icon: Whatsup,
  },
  {
    id: 3,
    link: `viber://chat?number=+${siteInfo.telClear}`,
    icon: Viber,
  },
];
