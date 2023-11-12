import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const dataGuarantees = [
  {
    label: "Free shipping from $150",
    media: "dummy-icon-2.svg",
  },
  {
    label: "30-day returns",
    media: "dummy-icon-3.svg",
  },
  {
    label: "2-year warranty",
    media: "dummy-icon-4.svg",
  },
];

const D8_Section_ShopNow = () => {
  return (
    <section className="bg-[url(/8/h8_bg.webp)] bg-cover bg-center bg-no-repeat px-4 py-24">
      <div className="container">
        <div className="flex flex-col gap-4 md:ml-auto md:w-4/12">
          <div className="flex flex-col items-center gap-4 max-md:bg-background/90 max-md:p-4 max-md:py-12 md:items-start md:text-start">
            {/* # */}
            <span className="font-bold text-destructive">Buy Now</span>

            {/* # */}
            <div className="flex w-full items-center justify-between">
              {/* ## */}
              <h3 className="w-7/12 text-2xl font-bold text-black md:text-3xl">
                Smartic Thermometer
              </h3>
              {/* ## */}
              <div className="flex w-4/12 flex-col items-end">
                <span className="text-3xl font-bold text-destructive md:text-4xl">
                  $724.47
                </span>
                <span className="text-sm text-destructive">In Stock</span>
              </div>
            </div>

            {/* # */}
            <Button
              asChild
              variant="destructive"
              className="mt-4 w-full md:w-max md:px-6"
            >
              <Link href="#" aria-label="Add to Cart">
                Add to Cart
              </Link>
            </Button>

            {/* # */}
            <ul className="mt-4 grid grid-cols-3 divide-x">
              {dataGuarantees?.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center gap-2 px-2 text-center text-xs md:text-sm"
                >
                  {/* ## */}
                  <Image
                    aria-hidden
                    src={`/dummy/${item.media}`}
                    alt={item.label}
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />

                  {/* ## */}
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D8_Section_ShopNow;
