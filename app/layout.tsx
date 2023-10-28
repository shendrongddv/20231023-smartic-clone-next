import type { Metadata } from "next";
import "@/styles/globals.css";
import {
  fontAnton,
  fontBebasNeue,
  fontBromny,
  fontFahkwang,
  fontInter,
  fontKanit,
  fontLora,
  fontPlayfairDisplay,
  fontSpectral,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Smartic - Product Landing Page WooCommerce Theme",
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
          fontInter.variable,
          fontKanit.variable,
          fontLora.variable,
          fontPlayfairDisplay.variable,
          fontSpectral.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
