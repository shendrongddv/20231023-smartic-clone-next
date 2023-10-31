import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index | Smartic",
  description:
    "Responsive Product Landing Page WordPress Theme Smartic Overview",
};

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id="demo-0" className="min-h-screen font-bromny">
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default IndexLayout;
