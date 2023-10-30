import Image from "next/image";

const D4_Section_Reviews = () => {
  return (
    <section className="p-4 pt-24">
      <div className="container">
        {/* Row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="space-y-12 md:w-6/12">
            {/* Row */}
            <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-start">
              <h1 className="font-teko text-4xl uppercase text-foreground md:text-5xl">
                <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
                  The Delicious Taste
                </span>
              </h1>

              <ul className="grid w-full grid-cols-2 gap-4">
                <li className="font-teko flex flex-col items-center md:flex-row md:items-end md:justify-start md:gap-2">
                  <h3 className="text-4xl text-foreground md:text-5xl">
                    117,258
                  </h3>
                  <span className="text-xl md:mb-1">Bottles Sold</span>
                </li>

                <li className="font-teko flex flex-col items-center md:flex-row md:items-end md:justify-start md:gap-2">
                  <h3 className="text-4xl text-foreground md:text-5xl">
                    251,934
                  </h3>
                  <span className="text-xl md:mb-1">Customers Served</span>
                </li>
              </ul>
            </div>

            {/* Row */}
            <div className="relative isolate flex">
              <div className="z-10 flex flex-col items-center gap-4 pl-4 text-center md:items-start md:text-start">
                <p className="text-lg font-semibold italic text-foreground md:text-xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Velit nobis, nemo ut perspiciatis molestias vitae odit
                  pariatur quasi magnam quos, porro quam fugiat molestiae!
                </p>

                <span className="mt-4">William Smith, Miami</span>
              </div>

              {/* Decor */}
              <figure
                aria-hidden
                className="absolute -top-4 left-0 z-0 h-10 w-auto"
              >
                <Image
                  src="/4/quote.svg"
                  alt="Image"
                  width={40}
                  height={40}
                  className="h-full w-auto"
                />
              </figure>
            </div>
          </div>

          {/* Col */}
          <div className="md:w-4/12">
            <figure>
              <Image
                src="/4/image9-h4.png"
                alt="Image"
                width={257}
                height={461}
                className="mx-auto h-auto w-4/5 md:w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_Reviews;
