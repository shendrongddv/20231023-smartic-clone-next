import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SpecificationTable } from "./specification-table";

const SectionSpecification = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-16">
        <h2 className="text-center font-inter text-4xl font-bold text-black md:w-2/5 md:text-5xl">
          Cool breeze your way in the hot summer
        </h2>

        {/* Row */}
        <div className="flex flex-col gap-12 md:w-4/5 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-5/12">
            <Image
              src="/37/h37_img5.png"
              alt="Image"
              width={495}
              height={495}
              className="mx-auto h-auto w-4/5 md:w-full"
            />
          </div>

          {/* Col */}
          <div className="flex flex-col gap-4 md:w-6/12">
            <p className="text-lg text-black">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <p>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>

            <SpecificationTable />

            <div className="mt-6 flex gap-4">
              <Button variant="destructive" size="lg" className="font-semibold">
                Try it Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-destructive bg-transparent font-semibold"
              >
                How it Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSpecification;
