import { cn } from "@/lib/utils";
import Image from "next/image";

type D4_Card_HowItWork_Props = {
  title: string;
  media: string;
  reverse?: boolean;
};

export const D4_Card_HowItWork = ({
  title,
  media,
  reverse,
}: D4_Card_HowItWork_Props) => {
  return (
    <div
      className={cn(
        "group flex flex-col items-center gap-2 p-4 text-center md:gap-4 md:text-start",
        reverse ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      <figure className="flex aspect-1 h-16 shrink-0 items-center justify-center bg-[#FFCA2E] transition duration-500 group-hover:rotate-45 group-hover:scale-90">
        <Image
          src={`/4/${media}`}
          alt={title}
          width={50}
          height={50}
          className="h-8 w-auto transition duration-500 group-hover:-rotate-45 group-hover:scale-125"
        />
      </figure>
      <h3 className={cn("text-white md:text-lg", reverse ? "md:text-end" : "")}>
        {title}
      </h3>
    </div>
  );
};
