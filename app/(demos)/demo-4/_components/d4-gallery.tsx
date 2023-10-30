import Image from "next/image";
import { dataGalleries } from "../data";

const D4_Section_Gallery = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-3/5">
          <h1 className="font-teko text-4xl uppercase text-foreground md:text-5xl">
            <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
              The #1 Brand of All-natural Sports Supplements in the World
            </span>
          </h1>
        </div>

        {/* List */}
        <ul className="grid w-full grid-cols-2 md:grid-cols-4 md:gap-8">
          {dataGalleries?.map((item) => (
            <li key={item.id}>
              <figure className="group aspect-1 overflow-hidden">
                <Image
                  src={`/4/${item.media}`}
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

export default D4_Section_Gallery;
