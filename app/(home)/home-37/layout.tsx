import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home 6 | Smartic",
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
      <div className="flex flex-col bg-slate-50 text-[#666666]">
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
}
