import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const H2_Section_Features = () => {
  return (
    <section className="px-4">
      <div className="container overflow-hidden rounded-3xl border bg-slate-100 px-4 pt-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="md:w-5/12">
            <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-start">
              <span className="font-semibold text-destructive">Features</span>

              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Safely Connects Families
              </h2>

              <p>
                Smartic was founded with the mission to give children a safe
                onboarding to digital life and a better balance between screen
                time and physical activity.
              </p>

              <Link
                href="/"
                aria-label="Shop Now"
                className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <PlayCircle className="h-8 w-8 text-destructive" />
                Watch Video
              </Link>
            </div>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <figure>
              <Image
                src="/2/h2_children.png"
                alt="Image"
                width={450}
                height={745}
                className="ml-auto h-auto w-4/5"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default H2_Section_Features;
