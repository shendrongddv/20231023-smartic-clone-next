import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const D6_Section_Subscribe = () => {
  return (
    <section className="bg-[url(/6/h6_bg-1.webp)] bg-cover bg-center bg-no-repeat px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex w-full flex-col gap-y-8 md:w-4/5 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-6/12">
            <figure className="mx-auto w-full">
              <Image
                src="/6/h6_img-6.webp"
                alt="Image"
                width={261}
                height={460}
                className="h-full w-auto"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <div className="flex flex-col gap-4">
              <h2 className="font-anton text-2xl text-black md:text-3xl">
                The Best Coffee Beans in the World
              </h2>

              <p>
                Be the first to learn about our latest trends and get exclusive
              </p>

              <div className="flex w-full flex-1 flex-col items-center gap-2 rounded-lg bg-background p-1 md:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email..."
                  className="border-transparent"
                />
                <Button
                  type="submit"
                  className="w-full bg-destructive hover:bg-destructive/80 md:w-max"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D6_Section_Subscribe;
