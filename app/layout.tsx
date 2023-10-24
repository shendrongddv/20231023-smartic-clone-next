import "@/styles/globals.css";
import type { Metadata } from "next";
import { fontLora, fontAnton, fontInter, fontFahkwang } from "@/lib/fonts";
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
          "font-inter antialiased",
          fontLora.variable,
          fontInter.variable,
          fontAnton.variable,
          fontFahkwang.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
