import { Button } from "@/components/ui/button";

const H1_SectionHero = () => {
  return (
    <section className="flex items-center bg-[url(/1/h1_bg-1.png)] bg-cover bg-bottom bg-no-repeat px-4 py-24 md:aspect-video md:min-h-screen">
      <div className="container">
        {/* Col */}
        <div className="flex flex-col items-start gap-4 md:w-1/2">
          <span className="font-bold text-destructive">Skin Care Product</span>

          <h1 className="font-spectralsc text-4xl font-bold text-black md:text-6xl">
            Highly Effective Solution for Your Skin
          </h1>

          <Button
            variant="destructive"
            size="lg"
            className="mt-2 font-semibold"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default H1_SectionHero;
