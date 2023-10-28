import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingBag } from "lucide-react";

type CardProductAlphaProps = {
  title: string;
  priceOriginal: number;
  priceSale?: number | null;
  inStock?: boolean | null;
  url?: string | null;
  media: string;
};

export const CardProductAlpha = ({
  title,
  priceOriginal,
  priceSale,
  url,
  media,
}: CardProductAlphaProps) => {
  return (
    <div className="group grid gap-2">
      <figure className="aspect-h-4 aspect-w-3 overflow-hidden">
        <Image
          src={`/50/${media}`}
          alt={title}
          width={300}
          height={400}
          className="h-full w-auto object-cover transition duration-500 group-hover:scale-110"
        />
      </figure>

      <div className="flex flex-col items-center gap-2 p-6 text-center md:p-6">
        <h3 className="line-clamp-2 font-semibold text-black">{title}</h3>

        <div className="flex gap-4 text-xl font-bold text-destructive">
          {priceSale && (
            <span className="stroke-current text-base font-semibold opacity-75">
              {priceSale}
            </span>
          )}
          ${priceOriginal}
        </div>

        <Button
          variant="destructive"
          size="lg"
          className="mt-4 items-center justify-center gap-2 font-semibold"
        >
          <ShoppingBag aria-hidden className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
