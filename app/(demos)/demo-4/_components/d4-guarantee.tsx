import Image from "next/image";

const D4_Section_Guarantee = () => {
  return (
    <section className="bg-[#F5F5F5] px-4 py-24">
      <div className="container flex flex-col items-center gap-8">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-3/5">
          <h1 className="font-teko text-4xl uppercase text-foreground max-md:w-4/5 md:text-5xl">
            <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
              100% Money-Back Guarantee
            </span>
          </h1>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center md:gap-12">
          {/* Col */}
          <div className="md:w-2/12">
            <figure>
              <Image
                src="/4/image10-h4.png"
                alt="Image"
                width={200}
                height={200}
                className="mx-auto h-auto w-2/5 md:w-full"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:w-5/12 md:items-start md:text-start">
            <p>
              No matter what you decide to buy, you&apos;re always protected by
              our ironclad, 100% money-back guarantee that works like this:
            </p>

            <p className="text-foreground">
              If you don&apos;t absolutely love our stuff for whatever reason,
              you get a prompt and courteous refund. No forms to fill out or
              hoops to jump through.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_Guarantee;
