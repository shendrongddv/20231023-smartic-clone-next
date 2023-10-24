import Image from "next/image";

// UI
import { Button } from "@/components/ui/button";

const SectionIntro3 = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-start gap-6 md:w-5/12">
          <span className="font-semibold text-destructive">Introduction.</span>
          <h2 className="font-fahkwang text-3xl leading-none md:text-4xl">
            Get nutrition support
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis.
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <div className="flex items-center gap-2">
              <span className="font-fahkwang flex items-start text-[40px] leading-none text-destructive">
                100 <span className="text-base leading-none">%</span>
              </span>
              <div className="text-base leading-none">
                All Natural
                <br />
                Ingredients
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-fahkwang flex items-start text-[40px] leading-none text-destructive">
                25Lbs
              </span>
              <div className="text-base leading-none">
                Lose in
                <br />
                30 Days
              </div>
            </div>
          </div>

          <Button
            variant="destructive"
            size="lg"
            className="mt-2 font-semibold"
          >
            Discover Nutrition
          </Button>
        </div>

        {/* Col */}
        <div className="md:w-6/12">
          <Image
            src="/7/img-2.png"
            alt="Image"
            width={720}
            height={720}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionIntro3;
