import Image from "next/image";
import { dataPortfolios } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { time } from "console";

const IndexPage = () => {
  return (
    <>
      {/* Portfolio */}
      <section className="px-4 py-24">
        <div className="container">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
            {dataPortfolios?.map((item) => (
              <li key={item.id} className="grid gap-2 rounded-lg p-2 shadow-xl">
                <figure className="aspect-h-3 aspect-w-4 flex w-full justify-center overflow-hidden rounded-lg border">
                  <Image
                    src={`/thumbnail/${item.media}`}
                    alt={item.title}
                    width={526}
                    height={380}
                    className="h-full w-auto object-cover"
                  />
                </figure>

                <div className="flex items-center justify-between gap-2">
                  <span
                    className="text-sm font-semibold
                  "
                  >
                    {item.title}
                  </span>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2 px-2"
                    >
                      <Link
                        href={item.url.original}
                        aria-label={item.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reff
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="gap-2 px-2"
                    >
                      <Link
                        href={item.url.clone}
                        aria-label={item.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Clone
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
