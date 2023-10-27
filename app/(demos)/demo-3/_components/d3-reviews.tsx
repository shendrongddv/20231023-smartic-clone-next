import Image from "next/image";
import { D3_Review_Slider } from "./d3-review-slider";

const D3_Section_Reviews = () => {
  return (
    <section className="isolate z-10 -mt-12 px-4">
      <div className="container">
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-stretch md:justify-between">
          {/* Col */}
          <div className="md:w-5/12">
            <div className="space-y-8 md:pt-24">
              <h2 className="font-bebasneue text-4xl font-bold text-black max-md:text-center md:text-6xl">
                Over 4,800 Positive Reviews
              </h2>

              {/* Slide */}
              <D3_Review_Slider />
            </div>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <figure className="h-full w-full">
              <Image
                src="/3/image7-h3.jpg"
                alt="Image"
                width={520}
                height={700}
                className="h-full w-auto object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D3_Section_Reviews;
