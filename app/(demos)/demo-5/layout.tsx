import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo 0 | Smartic",
  description:
    "Responsive Product Landing Page WordPress Theme Smartic Overview",
};

export default function Demo_0_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div aria-hidden className="font-bromny text-[#7a7a7a]">
        <header></header>
        <main className="block">{children}</main>
        <footer></footer>
      </div>
    </>
  );
}
