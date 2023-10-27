import type { Metadata } from "next";

import Footer_1 from "@/components/footer/footer-1";
import Header_1 from "@/components/header/header-1";

export const metadata: Metadata = {
  title: "Demo 3 | Smartic",
  description:
    "Responsive Product Landing Page WordPress Theme Smartic Overview",
};

export default function Demo_3_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="font-bromny text-[#666666]">
        <Header_1 />
        <main className="block">{children}</main>
        <Footer_1 />
      </div>
    </>
  );
}
