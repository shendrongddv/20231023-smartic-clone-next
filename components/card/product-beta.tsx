import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star, StarOff } from "lucide-react";
import { Button } from "../ui/button";

type Card_Product_Beta_Props = {
  title: string;
  desc?: string;
  priceOriginal?: number;
  priceSale?: number | null;
  mediaImage?: string;
  linkLabel?: string | null;
  linkUrl: string;
  metaIsSale?: boolean;
  metaInStock?: boolean;
  metaIsFeature?: boolean;
  metaIating?: number;
};

export const Card_Product_Beta = ({
  title,
  desc,
  priceOriginal,
  priceSale,
  mediaImage,
  linkLabel,
  linkUrl,
  metaIsSale,
  metaInStock,
  metaIsFeature,
  metaIating,
}: Card_Product_Beta_Props) => {
  return (
    <div className="group">
      <figure className="flex aspect-1 items-center justify-center overflow-hidden">
        <Image
          src={`/2/${mediaImage}`}
          alt={title}
          width={500}
          height={500}
          className="h-auto w-full transition duration-500 group-hover:scale-110"
        />
      </figure>

      <div className="flex flex-col items-center gap-4 p-4 text-center">
        <div className="flex items-center justify-center gap-0.5">
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <StarOff className="h-4 w-4 text-slate-500" />
        </div>

        <h3 className="text-lg font-bold text-foreground md:text-xl">
          {title}
        </h3>

        <p className="line-clamp-3">{desc}</p>

        <span className="text-lg font-bold text-destructive md:text-xl">
          ${priceOriginal}
        </span>

        <Button asChild variant="destructive" size="default">
          <Link href={linkUrl} aria-label={title}>
            <ShoppingBag className="mr-2 h-4 w-4" />
            {linkLabel}
          </Link>
        </Button>
      </div>
    </div>
  );
};
