import { Button } from "@/components/ui/button";
import Image from "next/image";

type D4_Card_Product_Props = {
  title: string;
  priceOriginal: number;
  priceSale?: number | undefined;
  inStock?: boolean | undefined;
  url?: string;
  media: string;
};

export const D4_Card_Product = ({
  title,
  priceOriginal,
  priceSale,
  inStock,
  url,
  media,
}: D4_Card_Product_Props) => {
  return (
    <div className="flex flex-col">
      <figure>
        <Image
          src={`/4/${media}`}
          alt={title}
          width={500}
          height={375}
          className="mx-auto h-full w-auto"
        />
      </figure>

      <div className="flex flex-col items-center text-center">
        <h3 className="font-teko text-xl text-foreground md:text-2xl">
          {title}
        </h3>
        <span className="text-2xl font-bold text-destructive md:text-3xl">
          ${priceOriginal}
        </span>

        <Button variant="default" size="default" className="mt-4 font-semibold">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
