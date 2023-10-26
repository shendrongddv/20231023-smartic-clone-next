import "@/styles/globals.css";
import type { Metadata } from "next";
import {
  fontAnton,
  fontBromny,
  fontFahkwang,
  fontInter,
  fontLora,
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
          "font-bromny antialiased",
          fontAnton.variable,
          fontBromny.variable,
          fontFahkwang.variable,
          fontInter.variable,
          fontLora.variable,
          fontSpectral.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
