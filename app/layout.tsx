import type { Metadata } from "next";
import "@/styles/globals.css";
import {
  fontAnton,
  fontBebasNeue,
  fontBromny,
  fontFahkwang,
  fontGrenzeGotisch,
  fontInter,
  fontKanit,
  fontLora,
  fontMarcellus,
  fontPlayfairDisplay,
  fontRedRose,
  fontSpectral,
  fontTeko,
  fontYellowtail,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Smartic - Product Landing Page WooCommerce Theme",
    template: `%s | Smartic - Product Landing Page WooCommerce Theme`,
  },
  description:
    "Responsive Product Landing Page WordPress Theme Smartic Overview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          "antialiased",
          fontAnton.variable,
          fontBebasNeue.variable,
          fontBromny.variable,
          fontFahkwang.variable,
          fontGrenzeGotisch.variable,
          fontInter.variable,
          fontKanit.variable,
          fontLora.variable,
          fontMarcellus.variable,
          fontPlayfairDisplay.variable,
          fontRedRose.variable,
          fontSpectral.variable,
          fontTeko.variable,
          fontYellowtail.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
