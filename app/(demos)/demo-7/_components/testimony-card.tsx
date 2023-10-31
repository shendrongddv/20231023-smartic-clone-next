import { Star } from "lucide-react";
import Image from "next/image";

type TestimonyCardProps = {
  name: string;
  age: number;
  review: string;
  media: string;
};

const TestimonyCard = ({ name, age, review, media }: TestimonyCardProps) => {
  return (
    <li className="group flex w-full flex-col bg-white transition duration-500 hover:shadow-lg">
      <div className="relative">
        <div className="overflow-hidden">
          <Image
            src={`/7/${media}`}
            alt={name}
            width={410}
            height={260}
            className="h-auto w-full bg-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="absolute inset-6 flex flex-col items-center justify-end text-center text-white">
          <h3 className="font-semibold">{name}</h3>
          <span className="text-sm">{age} years old</span>
        </div>
      </div>

      <div className="flex h-full flex-col items-center justify-between gap-8 px-6 py-8 text-center">
        <p className="text-lg md:w-4/5">&quot;{review}&quot;</p>
        <div className="flex items-center justify-center gap-1 text-destructive">
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
          <Star className="h-4 w-4" />
        </div>
      </div>
    </li>
  );
};

export default TestimonyCard;
