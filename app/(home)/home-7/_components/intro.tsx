import Image from "next/image";

// UI
import { Button } from "@/components/ui/button";

// #F6F6F6]

const SectionIntro = () => {
  return (
    <section className="relative -mt-36 flex px-4">
      <div className="bg-shape absolute bottom-0 left-0 right-0 top-0 z-0 bg-[#f6f6f6]"></div>
      <div className="container z-10 flex flex-col gap-16 md:-mt-32 md:flex-row md:items-end md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-start gap-6 pt-24 md:w-5/12 md:pt-0">
          <span className="font-semibold text-destructive">Introduction.</span>
          <h2 className="font-fahkwang text-3xl leading-none md:text-4xl">
            #1 Selling weight loss supplement brand
          </h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Image
                src="/7/floral-left.png"
                alt="Left"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <div className="flex flex-col text-center">
                <span className="text-lg">Winner</span>
                <span className="text-xs md:text-sm">Best Product 2020</span>
              </div>
              <Image
                src="/7/floral-right.png"
                alt="Right"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/7/floral-left.png"
                alt="Left"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
              <div className="flex flex-col text-center">
                <span className="text-lg">Top 3</span>
                <span className="text-xs md:text-sm">Wellness Awards</span>
              </div>
              <Image
                src="/7/floral-right.png"
                alt="Right"
                width={44}
                height={44}
                className="h-11 w-auto"
              />
            </div>
          </div>

          <Button
            variant="destructive"
            size="lg"
            className="mt-2 font-semibold"
          >
            Learn More
          </Button>
        </div>

        {/* Col */}
        <div className="md:w-6/12">
          <Image
            src="/7/img-1.png"
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

export default SectionIntro;
