import Image from "next/image";
import { dataProductList } from "../data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag, Star, StarOff } from "lucide-react";

const D6_Section_ShopNow = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-4/5">
          <figure aria-hidden className="h-20 w-auto">
            <Image
              src="/6/h6_img-1 (1).webp"
              alt="Image"
              width={296}
              height={175}
              className="h-full w-auto"
            />
          </figure>
          <span aria-hidden className="h-0.5 w-24 bg-destructive"></span>
        </div>

        {/* Row */}
        <ul className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {dataProductList?.map((item) => (
            <li key={item.id} className="group grid gap-2 md:gap-4">
              {/* # */}
              <figure className="grid aspect-1 w-full place-content-center overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src={`/6/${item.media.image}`}
                  alt={item.title}
                  width={480}
                  height={480}
                  className="mx-auto h-full w-auto transition duration-500 group-hover:scale-90"
                />
              </figure>

              {/* # */}
              <div className="flex flex-col items-center gap-1 text-center md:gap-2">
                {/* ## */}
                <h3 className="text-sm text-black md:text-base">
                  {item.title}
                </h3>

                {/* ## */}
                <div className="flex justify-center gap-1 text-yellow-500">
                  <Star className="h-3 w-3 md:h-4 md:w-4" />
                  <Star className="h-3 w-3 md:h-4 md:w-4" />
                  <Star className="h-3 w-3 md:h-4 md:w-4" />
                  <Star className="h-3 w-3 md:h-4 md:w-4" />
                  <StarOff className="h-3 w-3 text-slate-300 md:h-4 md:w-4" />
                </div>

                {/* ## */}
                <span className="text-lg font-bold text-destructive md:text-2xl">
                  ${item.price.original}
                </span>

                {/* ## */}
                <Button asChild variant="destructive" className="my-2">
                  <Link href={item.link.url} aria-label={item.link.label}>
                    <ShoppingBag className="mr-2 hidden h-4 w-4 md:flex" />
                    {item.link.label}
                  </Link>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D6_Section_ShopNow;
