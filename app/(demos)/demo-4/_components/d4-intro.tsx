import { Button } from "@/components/ui/button";

const D4_Section_Intro = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-6/12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              sapiente soluta magnam vel laboriosam, debitis ea.
            </p>
          </div>

          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:w-5/12 md:items-start md:text-start">
            <h1 className="font-teko text-4xl uppercase text-foreground md:text-5xl">
              <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
                For Muscle Support & Recovery
              </span>
            </h1>

            <p className="mt-4">
              Whey Protein Isolates (WPI) are the purest form of whey protein
              that currently exists. WPIs are costly to use, but rate among the
              best proteins that money can buy. That&apos;s why they&apos;re the
              first ingredient you read on the Gold Standard 100% Whey™ label.
            </p>

            <p>
              By using WPI as the primary ingredient along with premium
              ultra-filtered whey protein concentrate (WPC), we&apos;re able to
              pack 24 grams of protein into every serving to support your muscle
              building needs after training. ON&apos;s attention to detail also
              extends to mixability.
            </p>

            <Button
              variant="ghost"
              size="default"
              className="mt-4 border border-foreground/80 font-semibold text-foreground/80 hover:border-[#FFCA2E] hover:bg-[#FFCA2E]"
            >
              More Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_Intro;
