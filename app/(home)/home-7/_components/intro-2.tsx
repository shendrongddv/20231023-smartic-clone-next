// UI
import { Button } from "@/components/ui/button";
import IntroBetaCard from "./intro-2-card";
import { dataIntro2 } from "../data";

const SectionIntro2 = () => {
  return (
    <section className="bg-[#F6F6F6] px-4 py-24">
      <div className="container flex flex-col gap-16 md:flex-row-reverse md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-start gap-6 md:w-5/12">
          <h2 className="font-fahkwang text-3xl leading-none md:text-4xl">
            Burn fat fast and stay healthy
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis.
          </p>

          <Button
            variant="destructive"
            size="lg"
            className="mt-2 font-semibold"
          >
            Order Now
          </Button>
        </div>

        {/* Col */}
        <div className="md:w-6/12">
          <ul className="flex items-center">
            {dataIntro2?.map((item) => (
              <IntroBetaCard
                key={item.id}
                text={item.text}
                media={item.media}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro2;
