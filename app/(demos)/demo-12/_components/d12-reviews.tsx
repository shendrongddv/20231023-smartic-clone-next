import { Icons } from "@/components/icons";
import Image from "next/image";

const D12_Section_Reviews = () => {
  return (
    <section className="pt-24">
      <div className="container flex flex-col items-center gap-8 px-6 md:gap-12">
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
            Thousands of happy letters
          </h2>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-4/12">
            <ReviewCard />
          </div>

          {/* Col */}
          <div className="md:w-3/12">
            <Image
              aria-hidden
              src="/12/home-12-image-3.webp"
              alt="Image"
              width={480}
              height={480}
              className="mx-auto h-auto w-3/4 md:w-full"
            />
          </div>

          {/* Col */}
          <div className="md:w-4/12">
            <ReviewCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default D12_Section_Reviews;

const ReviewCard = () => {
  return (
    <div className="flex flex-col items-center p-6 text-center md:p-8">
      <p className="mb-6 font-semibold italic text-foreground">
        &apos;Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        beatae maiores, similique officiis quidem, voluptas cum nisi totam nemo
        est, sit adipisci quas iste.&apos;
      </p>

      <div className="mt-auto flex items-center justify-center gap-1 text-[#FF6F54]">
        <Icons.Star className="h-4 w-4" />
        <Icons.Star className="h-4 w-4" />
        <Icons.Star className="h-4 w-4" />
        <Icons.Star className="h-4 w-4" />
        <Icons.Star className="h-4 w-4" />
      </div>

      <span className="mt-2 text-sm font-semibold text-foreground">
        Tracey Lang, New York
      </span>
    </div>
  );
};
