import { Star, StarOff } from "lucide-react";
import Image from "next/image";

type Card_Review_Beta_Props = {
  id: number;
  name: string;
  bioIsMale?: boolean;
  bioAge?: number;
  bioCity?: string;
  bioMedia?: null;
  institutionName?: string;
  institutionPosition?: string;
  institutionCity?: string;
  institutionMedia?: null;
  review: string;
  rating?: number;
};

export const Card_Review_Beta = ({
  id,
  name,
  bioIsMale,
  bioAge,
  bioCity,
  bioMedia,
  institutionName,
  institutionPosition,
  institutionCity,
  institutionMedia,
  review,
  rating,
}: Card_Review_Beta_Props) => {
  return (
    <div className="flex h-full flex-col items-center gap-4 text-center">
      <figure className="aspect-1 h-16 overflow-hidden rounded-full border-2 border-background shadow-lg">
        <Image
          src={`https://randomuser.me/api/portraits/${
            bioIsMale ? "men" : "women"
          }/${id}.jpg`}
          alt={name}
          width={64}
          height={64}
          className="h-full w-auto object-cover"
        />
      </figure>

      <p className="line-clamp-4 font-medium text-foreground md:text-lg">
        {review}
      </p>

      <div className="mt-4 flex flex-col">
        <div className="flex items-center justify-center gap-0.5">
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500" />
          <StarOff className="h-4 w-4 text-slate-500" />
        </div>

        <span className="text-sm md:text-base">
          {name}, {bioCity}
        </span>
      </div>
    </div>
  );
};
