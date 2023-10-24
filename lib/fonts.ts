import { Lora, Inter, Fahkwang, Anton } from "next/font/google";

export const fontLora = Lora({
  subsets: ["latin"],
  variable: "--lora",
});

export const fontAnton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--anton",
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
