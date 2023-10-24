import { Button } from "@/components/ui/button";
import { dataTestimonials } from "../data";
import TestimonyCard from "./testimony-card";

const SectionTestimonials = () => {
  return (
    <section className="bg-[#F6F6F6] px-4 py-24">
      <div className="container flex flex-col items-center gap-16">
        {/* Row */}
        <div className="flex flex-col gap-6 text-center md:w-6/12">
          <span className="font-semibold text-destructive">Testimonials.</span>
          <h2 className="font-fahkwang text-3xl leading-none md:text-4xl">
            Amazing transformation
          </h2>
        </div>

        {/* Row */}
        <ul className="grid gap-8 md:grid-cols-3">
          {dataTestimonials?.map((item) => (
            <TestimonyCard
              key={item.id}
              name={item.name}
              age={item.age}
              review={item.review}
              media={item.media}
            />
          ))}
        </ul>

        <Button variant="destructive" size="lg" className="font-semibold">
          More Reviews
        </Button>
      </div>
    </section>
  );
};

export default SectionTestimonials;
