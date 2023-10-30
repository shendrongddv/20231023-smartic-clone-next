import Image from "next/image";

const D4_Section_Reviews = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
          {/* Col */}
          <div className="md:itemst flex flex-col items-center gap-2 text-center md:w-4/12 md:pt-12 md:text-start">
            <h1 className="font-teko text-4xl uppercase text-foreground md:text-5xl">
              <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
                The Delicious Taste
              </span>
            </h1>
          </div>

          {/* Col */}
          <div className="pt-12 md:w-4/12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              sapiente soluta magnam vel laboriosam, debitis ea.
            </p>
          </div>

          {/* Col */}
          <div className="max-md:pt-12 md:w-3/12">
            <figure>
              <Image
                src="/4/image9-h4.png"
                alt="Image"
                width={257}
                height={461}
                className="mx-auto h-auto w-3/5 md:w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_Reviews;
