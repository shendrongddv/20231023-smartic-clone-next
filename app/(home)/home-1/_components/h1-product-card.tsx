import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

type H1_ProductCardProps = {
  name: string;
  price: number;
  media: string;
};

const H1_ProductCard = ({ name, price, media }: H1_ProductCardProps) => {
  return (
    <li className="group flex flex-col">
      <div className="overflow-hidden">
        <Image
          src={`/1/${media}`}
          alt={name}
          width={600}
          height={600}
          className="h-auto w-full transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col items-center gap-4 py-8 text-center md:p-6">
        <h3 className="line-clamp-2 md:w-4/5">{name}</h3>

        <div className="flex items-center justify-center gap-1 text-destructive">
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
        </div>

        <span className="text-xl font-bold text-destructive">${price}</span>

        <Button
          variant="destructive"
          size="lg"
          className="mt-auto font-semibold"
        >
          Add to Cart
        </Button>
      </div>
    </li>
  );
};

export default H1_ProductCard;
