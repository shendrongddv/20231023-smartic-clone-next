import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TFakeData = {
  id: number;
  title: string;
  price: string;
  image: string;
  link: {
    label: string;
    url: string;
  };
};

const fakeData: TFakeData[] = [
  {
    id: 1,
    title: "Chicker with Grains Recipe",
    price: "$24,99",
    image: "12-product-1.jpg",
    link: {
      label: "Add to Cart",
      url: "/",
    },
  },
  {
    id: 2,
    title: "Lamb and Oatmeal Recipe",
    price: "$25,99",
    image: "12-product-1.jpg",
    link: {
      label: "Add to Cart",
      url: "/",
    },
  },
  {
    id: 3,
    title: "Chicker & Brown Rice Recipe",
    price: "$27,99",
    image: "12-product-1.jpg",
    link: {
      label: "Add to Cart",
      url: "/",
    },
  },
  {
    id: 4,
    title: "Chicker & LifeSource Bits",
    price: "$29,99",
    image: "12-product-1.jpg",
    link: {
      label: "Add to Cart",
      url: "/",
    },
  },
];

const D12_Section_Shop = () => {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center gap-8 px-6 md:gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-1/2">
          <Image
            aria-hidden
            src="/12/home-12-icon-1.png"
            alt="Image"
            width={67}
            height={49}
            className="h-12 w-auto"
          />

          <h2 className="font-redrose text-3xl text-foreground md:text-5xl">
            Browse our products
          </h2>
        </div>

        {/* Row */}
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {fakeData?.map((item) => <ProductCard key={item.id} {...item} />)}
        </ul>
      </div>
    </section>
  );
};

export default D12_Section_Shop;

const ProductCard = ({ title, price, image, link }: TFakeData) => {
  return (
    <li>
      {/* # */}
      <figure className="aspect-1 w-full overflow-hidden bg-[#F6F6F6]">
        <Image
          src={`/12/${image}`}
          alt={title}
          width={500}
          height={600}
          className="mx-auto h-full w-auto"
        />
      </figure>

      {/* # */}
      <div className="flex flex-col items-center gap-2 py-4 text-center md:gap-4">
        <span className="font-redrose text-sm font-semibold text-foreground md:text-base">
          {title}
        </span>

        <div className="mt-auto flex items-center justify-center gap-1 text-[#FF6F54]">
          <Icons.Star className="h-4 w-4" />
          <Icons.Star className="h-4 w-4" />
          <Icons.Star className="h-4 w-4" />
          <Icons.Star className="h-4 w-4" />
          <Icons.Star className="h-4 w-4" />
        </div>

        <span className="text-xl font-bold text-foreground md:text-2xl">
          {price}
        </span>

        <div className="mt-2 flex w-full items-center justify-between gap-1">
          <Button
            variant="outline"
            size="icon"
            className="aspect-1 shrink-0 text-destructive"
          >
            <Heart className="h-4 w-4" />
          </Button>

          <Button asChild variant="outline" className="w-full text-foreground">
            <Link href={link.url} aria-label={link.label}>
              <span className="hidden md:flex">{link.label}</span>
              <span className="flex md:hidden">Buy</span>
            </Link>
          </Button>
        </div>
      </div>
    </li>
  );
};
