import { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  desc: string;
  icon: LucideIcon;
};

const BenefitCard = ({ desc, icon: Icon }: BenefitCardProps) => {
  return (
    <li className="bg-white p-6">
      <p>{desc}</p>
      <Icon className="mt-6 h-14 w-14" />
    </li>
  );
};

export default BenefitCard;
