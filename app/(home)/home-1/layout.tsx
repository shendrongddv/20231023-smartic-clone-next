import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home 1 | Smartic",
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
      <main className="flex flex-col bg-[#FDF2F4] text-[#666666]">
        {children}
      </main>
      <footer></footer>
    </>
  );
}
