import { Button } from "@/components/ui/button";
import Image from "next/image";

const H1_SectionIntro = () => {
  return (
    <section className="z-10 -mt-8 px-4 md:-mt-16">
      <div className="container flex flex-col-reverse bg-white md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex overflow-hidden md:w-5/12">
          <Image
            src="/1/h1_img-1.jpg"
            alt="Image"
            width={650}
            height={650}
            className="h-auto w-full bg-cover"
          />
        </div>

        {/* Col */}
        <div className="flex flex-col items-start gap-4 px-6 py-12 md:w-7/12 md:p-24">
          <span className="font-bold text-destructive">Introducing.</span>

          <h2 className="font-spectralsc text-4xl font-bold text-black md:text-5xl">
            Discover the Miracle
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="mt-4 border-destructive bg-transparent font-semibold text-destructive"
          >
            Try it Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default H1_SectionIntro;
