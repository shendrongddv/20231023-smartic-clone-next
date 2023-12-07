import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo 12",
};

export default function Demo_37_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-white font-bromny text-[#7a7a7a]">
        <header></header>
        <main className="block">{children}</main>
        <footer></footer>
      </div>
    </>
  );
}
