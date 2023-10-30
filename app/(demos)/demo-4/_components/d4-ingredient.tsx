import Image from "next/image";

const D4_Section_Ingredient = () => {
  return (
    <section className="bg-[#F5F5F5] px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-3/5">
          <h1 className="font-teko text-4xl uppercase text-foreground md:text-5xl">
            <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
              Powerful Ingredients
            </span>
          </h1>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-4/12">
            <figure>
              <Image
                src="/4/revslider_h4-img1.png"
                alt="Image"
                width={437}
                height={635}
                className="mx-auto h-auto w-3/5 md:w-full"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="md:w-7/12">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              sapiente soluta magnam vel laboriosam, debitis ea.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_Ingredient;
