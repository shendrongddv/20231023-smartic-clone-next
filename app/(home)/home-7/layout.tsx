import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home 7 | Smartic",
  description:
    "Responsive Product Landing Page WordPress Theme Smartic Overview",
};

export default function Home7Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header></header>
      <main className="flex flex-col">{children}</main>
      <footer></footer>
    </>
  );
}
