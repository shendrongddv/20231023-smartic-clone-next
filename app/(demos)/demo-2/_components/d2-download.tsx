import Image from "next/image";
import Link from "next/link";

const D2_Section_Download = () => {
  return (
    <section className="flex flex-col md:px-4">
      <div className="relative mx-auto flex w-full max-w-[1280px] overflow-hidden bg-[#F1ECD7] pb-12 md:rounded-[2rem] md:pb-24">
        <div className="container z-[1]">
          {/* Row */}
          <div className="mx-auto flex flex-col items-center gap-4 py-24 text-center md:w-1/2">
            <span className="font-semibold text-destructive">
              Download the App
            </span>

            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Control Easily From Your Smartphone
            </h2>

            <div className="mt-4 grid w-full grid-cols-2 gap-2 md:w-3/5">
              <Link href="/" aria-label="Download on iOS" className="">
                <Image
                  aria-hidden
                  src="/2/h2_ios.jpg"
                  alt="Image"
                  width={190}
                  height={62}
                  className="ml-auto h-12 w-auto overflow-hidden rounded-lg shadow-lg"
                />
              </Link>

              <Link href="/" aria-label="Download on Android" className="">
                <Image
                  aria-hidden
                  src="/2/h2_android.jpg"
                  alt="Image"
                  width={190}
                  height={62}
                  className="mr-auto h-12 w-auto overflow-hidden rounded-lg shadow-lg"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Decor */}
        <Image
          src="/2/h2_decor-5.svg"
          alt="Image"
          width={746}
          height={204}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-150"
        />
      </div>

      {/* Row */}
      <figure aria-hidden className="container isolate z-50 -mt-12  md:-mt-24">
        <Image
          src="/2/h2_phone.png"
          alt="Image"
          width={746}
          height={204}
          className="z-40 mx-auto h-auto w-full px-4 md:w-3/5"
        />
      </figure>
    </section>
  );
};

export default D2_Section_Download;
