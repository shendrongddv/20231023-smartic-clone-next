import { Button } from "@/components/ui/button";
import D50_Section_Hero from "./_components/d50-hero";
import D50_Section_Problem from "./_components/d50-problem";
import D50_Section_Reason from "./_components/d50-reason";

const Demo_50_Page = () => {
  return (
    <>
      {/* Hero */}
      <D50_Section_Hero />

      {/* Problem */}
      <D50_Section_Problem />

      {/* Reason */}
      <D50_Section_Reason />
    </>
  );
};

export default Demo_50_Page;
