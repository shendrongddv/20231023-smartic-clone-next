import Link from "next/link";
import { Instagram } from "lucide-react";
import { dataGalleries } from "../data";
import Image from "next/image";

const D3_Section_JoinUs = () => {
  return (
    <section className="bg-slate-100 px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-bebasneue text-4xl font-bold text-black md:text-6xl">
            Join Our Community
          </h2>

          <Link
            href="/"
            aria-label="Follow Us on Instagram"
            className="flex items-center justify-center gap-1 text-[#7C9CCD]"
          >
            <Instagram className="h-4 w-4" />
            StmarticBackpack
          </Link>
        </div>

        {/* List */}
        <ul className="grid grid-cols-2 md:grid-cols-4 md:gap-8">
          {dataGalleries?.map((item) => (
            <li key={item.id}>
              <figure className="group aspect-1 w-full overflow-hidden">
                <Image
                  src={`/3/${item.media}`}
                  alt="Gallery"
                  width={400}
                  height={400}
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D3_Section_JoinUs;
