import Image from "next/image";
import Link from "next/link";

import { dataPortfolios } from "../data";

import { Button, buttonVariants } from "@/components/ui/button";
import { MoveUpLeft, MoveUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Hero Alpha
export const Section_Hero_Alpha = () => {
  return (
    <section className="px-4 py-24">
      <div className="container">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
          {dataPortfolios?.map((item) => (
            <li key={item.id} className="group grid gap-2">
              <figure className="aspect-h-3 aspect-w-4 flex w-full justify-center overflow-hidden rounded-lg border shadow-lg transition duration-300 group-hover:shadow-xl">
                <Image
                  src={`/thumbnail/${item.media}`}
                  alt={item.title}
                  width={526}
                  height={380}
                  className="h-full w-auto object-cover"
                />
              </figure>

              <div className="flex items-center justify-center divide-x">
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="h-max rounded-none py-1"
                >
                  <Link
                    href={item.url.original}
                    aria-label={item.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Original
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="h-max rounded-none py-1"
                >
                  <Link
                    href={item.url.clone}
                    aria-label={item.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Clone
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

// Hero Beta
export const Section_Hero_Beta = () => {
  return (
    <section className="px-4 py-12">
      <div className="container">
        {/* Row */}
        <ul className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8">
          {dataPortfolios?.map((item) => (
            <li
              key={item.id}
              className="group grid gap-1 rounded-xl border bg-background p-1 shadow-lg md:gap-2 md:p-2"
            >
              {/* Col */}
              <figure className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg border">
                <Image
                  src={`/thumbnail/${item.media}`}
                  alt={item.title}
                  width={560}
                  height={400}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </figure>

              {/* Col */}
              <div className="flex items-center justify-between gap-2">
                <Link
                  href={item.url.original}
                  aria-label="Link to Original Version"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-1 h-7 items-center justify-center rounded-lg bg-slate-200 text-foreground"
                >
                  <MoveUpLeft className="h-3 w-3" />
                </Link>

                <div className="flex items-center justify-center text-clip">
                  <p className="text-xs font-medium md:text-sm">{item.title}</p>
                </div>

                <Link
                  href={item.url.clone}
                  aria-label="Link to Clone Version"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex aspect-1 h-7 items-center justify-center rounded-lg bg-slate-200 text-foreground"
                >
                  <MoveUpRight className="h-3 w-3" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
