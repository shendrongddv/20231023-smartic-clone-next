import Image from "next/image";
import { dataPortfolios } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      {/* Portfolio */}
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
    </>
  );
};

export default IndexPage;
