import Image from "next/image";

const D6_Section_Intro = () => {
  return (
    <section className="bg-[url(/6/h6_bg.webp)] bg-cover bg-center bg-no-repeat px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-4 text-center md:w-4/5">
          <h2 className="font-anton text-2xl text-black md:text-3xl">
            A True Premier Coffee Brand
          </h2>

          <span aria-hidden className="h-0.5 w-24 bg-destructive"></span>
        </div>

        {/* Row */}
        <div className="flex w-full flex-col gap-12 md:w-4/5 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-4/12">
            <figure>
              <Image
                src="/6/h6_img-1.webp"
                alt="Image"
                width={240}
                height={414}
                className="mx-auto w-3/5 md:w-full"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="md:w-7/12">
            <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
              <h3 className="font-semibold uppercase text-black">
                The History
              </h3>

              <p>
                In 1992, Smartic Coffee opened its first café on iconic Robson
                Street in the heart of downtown Vancouver. Our main focus was
                creating specialty beverages, using only the finest quality
                beans to craft each beverage to suit customers&apos; individual
                tastes.
              </p>

              <p>
                Today, Smartic is widely known for our individually crafted
                coffees, proprietary teas, chocolate and fruit-based beverages.
                Each café is also carefully designed to incorporate a welcoming
                and relaxed social setting to complete every customer visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D6_Section_Intro;
