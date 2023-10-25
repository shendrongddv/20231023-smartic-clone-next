import { Lora, Inter, Fahkwang, Anton } from "next/font/google";
import localFont from "next/font/local";

export const fontAnton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--anton",
});

export const fontBromny = localFont({
  src: "../assets/fonts/bromny/BROmny-Regular.woff2",
  variable: "--bromny",
});

export const fontFahkwang = Fahkwang({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--fahkwang",
});

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});

export const fontLora = Lora({
  subsets: ["latin"],
  variable: "--lora",
});
