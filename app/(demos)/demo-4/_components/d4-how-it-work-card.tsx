import Image from "next/image";

type D4_Card_HowItWork_Props = {
  title: string;
  media: string;
};

export const D4_Card_HowItWork = ({
  title,
  media,
}: D4_Card_HowItWork_Props) => {
  return (
    <div className="flex flex-col items-center gap-2 p-4 text-center md:flex-row md:gap-4 md:text-start">
      <figure className="flex aspect-1 h-16 shrink-0 items-center justify-center bg-[#FFCA2E] md:h-16">
        <Image
          src={`/4/${media}`}
          alt={title}
          width={50}
          height={50}
          className="h-8 w-auto md:h-10"
        />
      </figure>
      <h3 className="text-white md:text-lg">{title}</h3>
    </div>
  );
};
