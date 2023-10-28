import Image from "next/image";
import { dataGalleries } from "../data";

const D50_Section_Gallery = () => {
  return (
    <section className="bg-[#F2EFDD] px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-3 text-center md:w-2/5">
          <figure aria-hidden className="mb-4">
            <Image
              src="/50/h50_subtitle-5.svg"
              alt="Image"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </figure>
          <h2 className="font-kanit text-3xl font-bold text-black md:text-5xl">
            Eco Friendly Straw Wheat Handle
          </h2>
          <p>
            The travel case is easy to carry and convenient to use. Portable.,
            clean anytime, anywhere
          </p>
        </div>

        {/* List */}
        <ul className="grid grid-cols-2 md:grid-cols-3 md:gap-8">
          {dataGalleries?.map((item) => (
            <li key={item.id}>
              <figure className="group aspect-1 overflow-hidden">
                <Image
                  src={`/50/${item.media}`}
                  alt="Gallery"
                  width={480}
                  height={480}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D50_Section_Gallery;
