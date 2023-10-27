import type { Metadata } from "next";
import D37_Footer from "./_components/d37-footer";

export const metadata: Metadata = {
  title: "Demo 37 | Smartic",
  description:
    "Responsive Product Landing Page WordPress Theme Smartic Overview",
};

export default function Demo_37_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-[#F3F8FC] font-bromny text-[#7a7a7a]">
        <header></header>
        <main className="block">{children}</main>
        <D37_Footer />
      </div>
    </>
  );
}
