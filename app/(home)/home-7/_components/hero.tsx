// UI
import { Button } from "@/components/ui/button";

const SectionHero = () => {
  return (
    <section className="bg-[url(/7/bg-1.jpg)] bg-cover bg-top">
      <div className="h-full w-full bg-black bg-opacity-30 px-4">
        <div className="container flex flex-col">
          <div className="pb-96 pt-40 md:w-1/2">
            <h1 className="font-fahkwang text-[40px] leading-none text-white md:text-[80px]">
              The easiest way to burn fat
            </h1>
            <p className="mt-6 text-lg text-white md:w-11/12">
              19 perfectly combined ingredients support your fat and energy
              metabolism
            </p>
            <Button
              variant="destructive"
              size="lg"
              className="mt-8 font-semibold"
            >
              Start Now with 30% Off
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
