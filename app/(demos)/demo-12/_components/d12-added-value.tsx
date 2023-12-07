import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const fakeData = [
  {
    id: 1,
    title: "Pure common sense",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "home-12-image-2.webp",
    link: {
      label: "Get Started",
      url: "/",
    },
  },
  {
    id: 2,
    title: "No hidden nasties",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "home-12-image-6.webp",
    link: {
      label: "More About Our ingredients",
      url: "/",
    },
  },
];

const D12_Section_AddesValue = () => {
  return (
    <section className="py-24">
      <div className="container space-y-24 px-6">
        {fakeData?.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex flex-col gap-8 md:items-center md:justify-between",
              item.id % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
            )}
          >
            {/* Col */}
            <div className="md:w-5/12">
              <Image
                aria-hidden
                src={`/12/${item.image}`}
                alt={item.title}
                width={480}
                height={480}
                className="mx-auto h-auto w-3/4 md:w-full"
              />
            </div>

            {/* Col */}
            <div className="flex flex-col items-center gap-4 text-center md:w-6/12 md:items-start md:text-start">
              <h2 className="font-redrose text-3xl text-foreground md:text-5xl">
                {item.title}
              </h2>

              <p>{item.desc}</p>

              <Button asChild variant="destructive" className="mt-4 px-8">
                <Link href={item.link.url} aria-label={item.link.label}>
                  {item.link.label}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default D12_Section_AddesValue;
