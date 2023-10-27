import Image from "next/image";
import { dataGalleries } from "../data";
import { Plus } from "lucide-react";

const H1_Section_Galleries = () => {
  return (
    <section className="px-4 py-24">
      <div className="container space-y-16">
        {/* Row */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <span className="font-bold text-destructive">Our Photos.</span>

          <h2 className="font-spectralsc text-4xl font-bold text-black md:text-5xl">
            Stay Connected
          </h2>
        </div>

        {/* Row */}
        <ul className="grid grid-cols-2 md:grid-cols-5 md:gap-8">
          {dataGalleries?.map((item) => (
            <li key={item.id} className="group relative">
              <figure className="flex aspect-square h-full w-full">
                <Image
                  src={`/1/${item.media}`}
                  alt="Photo"
                  width={680}
                  height={680}
                  className="z-10 h-full w-auto bg-cover"
                />
              </figure>

              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-0 transition duration-500 group-hover:bg-black/20 group-hover:bg-opacity-100">
                <Plus className="scale-25 h-12 w-12 text-white opacity-0 transition duration-500 group-hover:scale-110 group-hover:opacity-100" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default H1_Section_Galleries;
