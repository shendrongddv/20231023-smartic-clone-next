import { Button } from "@/components/ui/button";
import Image from "next/image";

const D3_Section_Intro = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="md:w-5/12">
          <Image
            src="/3/image1-h3.jpg"
            alt="Image"
            width={520}
            height={700}
            className="h-auto w-full"
          />
        </div>

        {/* Col */}
        <div className="flex flex-col items-center gap-4 text-center md:w-6/12 md:items-start md:text-start">
          <h2 className="font-bebasneue text-4xl text-black md:text-6xl">
            The Next Generation Of Travel
          </h2>

          <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusa
          </p>

          <Button variant="default" size="lg" className="mt-4 font-semibold">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default D3_Section_Intro;
