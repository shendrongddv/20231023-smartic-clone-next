import Image from "next/image";
import { D4_Review_Slider } from "./d4-review-slider";

const D4_Section_Reviews = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
          {/* Col */}
          <div className="flex flex-col items-center gap-8 text-center md:w-3/12 md:items-start md:pt-12 md:text-start">
            <h1 className="font-teko text-4xl uppercase text-foreground md:text-5xl">
              <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
                The Delicious Taste
              </span>
            </h1>

            <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-1">
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

          {/* Col */}
          <div className="w-full pt-12 md:w-4/12">
            <D4_Review_Slider />
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
