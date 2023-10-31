import Image from "next/image";
import Link from "next/link";

const D2_CTA_Alpha = () => {
  return (
    <>
      <div className="container z-0 overflow-hidden rounded-3xl bg-[#F1ECD7] px-4 py-12 md:py-24">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-4 pb-12 text-center md:w-1/2 md:pb-24">
          <span className="font-semibold text-destructive">
            Download the App
          </span>

          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Control Easily From Your Smartphone
          </h2>

          <div className="mt-4 flex w-full items-center justify-center gap-2 md:w-max">
            <Link
              href="/"
              aria-label="Download on iOS"
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                aria-hidden
                src="/2/h2_ios.jpg"
                alt="Image"
                width={190}
                height={62}
                className="h-full w-auto md:max-h-14"
              />
            </Link>

            <Link
              href="/"
              aria-label="Download on Android"
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                aria-hidden
                src="/2/h2_android.jpg"
                alt="Image"
                width={190}
                height={62}
                className="h-full w-auto md:max-h-14"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Row */}
      <figure aria-hidden className="container z-10 -mt-12  md:-mt-24">
        <Image
          src="/2/h2_phone.png"
          alt="Image"
          width={746}
          height={204}
          className="mx-auto h-auto w-11/12 md:w-3/5"
        />
      </figure>
    </>
  );
};

export default D2_CTA_Alpha;
