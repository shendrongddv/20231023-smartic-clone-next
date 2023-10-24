import Image from "next/image";

type IntroBetaCardProps = {
  text: string;
  media: string;
};

const IntroBetaCard = ({ text, media }: IntroBetaCardProps) => {
  return (
    <li className="group relative overflow-hidden">
      <Image
        src={`/7/${media}`}
        alt={text}
        width={480}
        height={480}
        className="h-auto w-full bg-cover transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute bottom-6 left-6 w-1/2 text-white">
        <span className="font-fahkwang md:text-xl">{text}</span>
      </div>
    </li>
  );
};

export default IntroBetaCard;
