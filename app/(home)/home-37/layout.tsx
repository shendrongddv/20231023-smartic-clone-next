import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home 37 | Smartic",
  description:
    "Responsive Product Landing Page WordPress Theme Smartic Overview",
};

export default function Home37Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col bg-slate-100 text-[#666666]">
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
}
