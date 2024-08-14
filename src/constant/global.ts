import { title } from "process";
import { string } from "zod";

export const LOGO_IMG = {
  src: "/next.svg",
  alt: "logo",
};

interface Links {
  title: string;
  href: string;
}

export const NAV_LINKS: Links[] = [
  {
    title: "Pricing",
    href: "/pricing",
  },
];
