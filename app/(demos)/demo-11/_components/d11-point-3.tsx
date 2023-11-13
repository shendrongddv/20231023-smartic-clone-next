import { Star } from "lucide-react";
import Image from "next/image";

const D11_Section_Point3 = () => {
  return (
    <section className="relative flex pt-24 md:px-4">
      <div className="container flex flex-col items-center gap-12 md:flex-row md:justify-between">
        {/* Col */}
        <div className="md:w-4/12">
          <figure className="h-auto w-full">
            <Image
              src="/11/h11-layer3.webp"
              alt="Image"
              width={963}
              height={723}
              className="mx-auto h-auto w-4/5 md:w-full"
            />
          </figure>
        </div>

        {/* Col */}
        <div className="md:w-6/12">
          <div className="flex flex-col items-center gap-8 text-center max-md:px-4 md:items-start md:text-start">
            <h4 className="text-3xl font-bold text-destructive md:text-4xl">
              <span className="font-yellowtail d11-h2 font-normal text-black">
                Made with
              </span>
              &nbsp;Love
            </h4>

            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus.
            </p>

            <div className="flex flex-col items-center gap-2 border-destructive text-center max-md:border-t max-md:pt-4 md:items-start md:border-l-2 md:pl-6 md:text-start">
              <p className="text-lg font-semibold text-black">
                &quot;The results have been amazing for me and many of my
                clients.&quot;
              </p>

              <div className="mt-2 flex gap-0.5 text-destructive">
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
                <Star className="h-4 w-4" />
              </div>

              <span className="text-sm">Zoltan Dul, Las Vegas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D11_Section_Point3;
