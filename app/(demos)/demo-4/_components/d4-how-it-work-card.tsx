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
        "flex flex-col items-center gap-2 p-4 text-center md:gap-4 md:text-start",
        reverse ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      <figure className="flex aspect-1 h-16 shrink-0 items-center justify-center bg-[#FFCA2E] md:h-16">
        <Image
          src={`/4/${media}`}
          alt={title}
          width={50}
          height={50}
          className="h-8 w-auto md:h-10"
        />
      </figure>
      <h3 className={cn("text-white md:text-lg", reverse ? "md:text-end" : "")}>
        {title}
      </h3>
    </div>
  );
};
