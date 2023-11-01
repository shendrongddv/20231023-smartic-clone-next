import Image from "next/image";
import { dataSellingPoints } from "../data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const D2_Section_SellingPoints = () => {
  return (
    <section className="px-4 py-24">
      <div className="container">
        <ul className="grid gap-24 md:mx-auto md:w-4/5">
          {dataSellingPoints?.map((item) => (
            <li
              key={item.id}
              className="group flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12 md:even:flex-row-reverse"
            >
              {/* Col */}
              <div className="md:w-4/12">
                <figure>
                  <Image
                    src={`/2/${item.media}`}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="mx-auto h-auto w-3/5 md:w-full"
                  />
                </figure>
              </div>

              {/* Col */}
              <div className="md:w-6/12">
                <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-start">
                  <h3 className="text-xl font-bold text-foreground md:text-4xl">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                  <Button
                    asChild
                    variant="destructive"
                    size="default"
                    className="mt-4"
                  >
                    <Link href={item.links.url} aria-label={item.links.label}>
                      {item.links.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
