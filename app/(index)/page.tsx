import Image from "next/image";
import { dataPortfolios } from "./data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const IndexPage = () => {
  return (
    <>
      {/* Portfolio */}
      <section className="px-4 py-24">
        <div className="container">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
            {dataPortfolios?.map((item) => (
              <li
                key={item.id}
                className="flex w-full flex-col items-center text-center"
              >
                <figure className="overflow-hidden rounded-lg border">
                  <Image
                    src={`/thumbnail/${item.media}`}
                    alt={item.title}
                    width={526}
                    height={380}
                    className="h-full w-auto object-cover"
                  />
                </figure>
                <Button asChild variant="link" className="font-semibold">
                  <Link
                    href={item.url}
                    aria-label={item.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
