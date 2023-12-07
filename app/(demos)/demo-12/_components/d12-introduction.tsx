import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const D12_Section_Introduction = () => {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center gap-12 px-6">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-1/2">
          <Image
            aria-hidden
            src="/12/home-12-icon-1.png"
            alt="Image"
            width={67}
            height={49}
            className="h-12 w-auto"
          />

          <h2 className="font-redrose text-3xl text-foreground md:text-5xl">
            Real pet food, fresh from the fridge
          </h2>
        </div>

        {/* Row */}
        <div className="grid w-full gap-12 md:grid-cols-3">
          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <div className="flex justify-center gap-4">
              <Button asChild variant="destructive" className="mt-4 px-8">
                <Link href="/" aria-label="For Dogs">
                  For Dogs
                </Link>
              </Button>

              <Button asChild variant="destructive" className="mt-4 px-8">
                <Link href="/" aria-label="For Cats">
                  For Cats
                </Link>
              </Button>
            </div>
          </div>

          {/* Col */}
          <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-start">
            <h3 className="font-redrose text-lg text-foreground">
              Health protection
            </h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="mt-6 font-redrose text-lg text-foreground">
              Purposefully formulated
            </h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Col */}
          <figure aria-hidden>
            <Image
              src="/12/home-12-image-1.webp"
              alt="Image"
              width={480}
              height={448}
              className="h-auto w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default D12_Section_Introduction;
