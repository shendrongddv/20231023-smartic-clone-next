import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index | Smartic",
  description:
    "Responsive Product Landing Page WordPress Theme Smartic Overview",
};

const IndexLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default IndexLayout;
