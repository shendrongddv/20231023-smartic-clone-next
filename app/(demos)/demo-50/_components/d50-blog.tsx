import Image from "next/image";
import { CardBlogAlpha } from "@/components/card/blog";
import { dataBlogs } from "../data";

const D50_Section_Blog = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-6 text-center">
          <figure aria-hidden>
            <Image
              src="/50/h50_subtitle-3.svg"
              alt="Image"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </figure>
          <h2 className="font-kanit text-3xl font-bold text-black md:w-1/2 md:text-5xl">
            Discover New Update & Services
          </h2>
        </div>

        {/* List */}
        <ul className="grid gap-8 md:grid-cols-3">
          {dataBlogs?.map((item) => (
            <li key={item.id}>
              <CardBlogAlpha
                title={item.title}
                desc={item.desc}
                author={item.author}
                media={item.media}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D50_Section_Blog;
