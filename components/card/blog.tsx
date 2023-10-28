import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Plus, User2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type CardBlogAlphaProps = {
  title: string;
  desc: string;
  author?: string;
  createdAt?: null;
  url?: string;
  media?: string;
  tags?: null;
};

export const CardBlogAlpha = ({
  title,
  desc,
  author,
  createdAt,
  media,
  url,
  tags,
}: CardBlogAlphaProps) => {
  return (
    <div className="group grid">
      <figure className="aspect-h-3 aspect-w-4 relative isolate flex items-center justify-center overflow-hidden">
        <Image
          src={`/50/${media}`}
          alt={title}
          width={500}
          height={330}
          className="z-0 h-full w-auto object-cover transition duration-500 group-hover:scale-110"
        />
        <span className="absolute inset-0 z-10 bg-black bg-opacity-0 transition duration-500 group-hover:bg-opacity-30"></span>

        <div className="absolute z-20 mt-auto flex h-max flex-wrap gap-1 p-4">
          <Badge variant="destructive" className="rounded text-sm font-normal">
            Destructive
          </Badge>
          <Badge variant="destructive" className="rounded text-sm font-normal">
            Destructive
          </Badge>
          <Badge variant="destructive" className="rounded text-sm font-normal">
            Destructive
          </Badge>
          <Badge variant="destructive" className="rounded text-sm font-normal">
            Destructive
          </Badge>
        </div>
      </figure>

      <div className="grid gap-2 p-4">
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="flex items-center">
            <CalendarDays
              aria-hidden
              className="mr-1 h-4 w-4 text-destructive"
            />
            September 29, 2020
          </span>

          <span className="flex items-center">
            <User2 aria-hidden className="mr-1 h-4 w-4 text-destructive" />
            by&nbsp;{author}
          </span>
        </div>

        <Link
          href="/"
          aria-label="Link"
          className="mt-2 line-clamp-2 text-lg font-bold text-black transition duration-300 hover:text-destructive"
        >
          <h3>{title}</h3>
        </Link>

        <p className="line-clamp-3">{desc}</p>

        <Link
          href="/"
          aria-label="Link"
          className="group/icon mt-4 flex w-max items-center gap-2 border-b border-destructive pb-1 text-sm font-semibold uppercase leading-none text-black transition duration-300 hover:text-destructive"
        >
          Read More
          <Plus className="h-3 w-3 transition duration-300 group-hover/icon:rotate-45" />
        </Link>
      </div>
    </div>
  );
};
