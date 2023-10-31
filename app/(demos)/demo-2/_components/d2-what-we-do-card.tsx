import { LucideIcon } from "lucide-react";

type D2_Card_WhatWeDo_Props = {
  title: string;
  desc?: string;
  media?: string;
  icon: LucideIcon;
};

export const D2_Card_WhatWeDo = ({
  title,
  desc,
  media,
  icon: Icon,
}: D2_Card_WhatWeDo_Props) => {
  return (
    <div className="group flex items-center gap-4 md:flex-col md:p-4">
      <div className="flex aspect-1 h-16 items-center justify-center rounded-full border-2 border-transparent bg-slate-100 transition duration-500 group-hover:border-white group-hover:bg-destructive group-hover:shadow-lg">
        <Icon className="h-5 w-5 text-destructive transition duration-300 group-hover:scale-125 group-hover:text-white" />
      </div>

      <div className="flex flex-col md:items-center md:text-center">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
};
