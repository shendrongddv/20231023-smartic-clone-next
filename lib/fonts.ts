import {
  Anton,
  Bebas_Neue,
  Fahkwang,
  Inter,
  Kanit,
  Lora,
  Playfair_Display,
  Spectral_SC,
  Teko,
} from "next/font/google";
import localFont from "next/font/local";

export const fontAnton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--anton",
});

export const fontBebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas-neue",
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

export const fontKanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "100", "800", "900"],
  variable: "--kanit",
});

export const fontLora = Lora({
  subsets: ["latin"],
  variable: "--lora",
});

export const fontPlayfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--playfair-display",
});

export const fontSpectral = Spectral_SC({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800"],
  variable: "--spectral-sc",
});

export const fontTeko = Teko({
  subsets: ["latin"],
  variable: "--teko",
});
