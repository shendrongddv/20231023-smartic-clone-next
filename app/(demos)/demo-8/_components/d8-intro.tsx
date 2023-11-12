import Image from "next/image";

const D8_Section_Intro = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-2 text-center md:w-3/5">
          <span className="font-semibold text-destructive">
            Introducing the Hosttest Thermometer.
          </span>

          <h2 className="text-3xl font-bold text-black md:text-5xl">
            Easier Way to Take Temperature
          </h2>

          <p className="mt-3">
            Thermo is a game changer. Now, a fast, simple, no-contact gesture
            yields medical-grade results right on the device and provides an
            automatic sync with the free Thermo app, available for iOS and
            Android.
          </p>
        </div>

        {/* Row */}
        <div className="grid w-full gap-4 md:w-4/5 md:grid-cols-2">
          {/* Col */}
          <figure className="aspect-h-3 aspect-w-4 grid place-content-center overflow-hidden rounded-2xl">
            <Image
              src="/8/h8_img-1.webp"
              alt="Image"
              width={410}
              height={240}
              className="h-full w-full object-cover"
            />
          </figure>

          {/* Col */}
          <figure className="aspect-h-3 aspect-w-4 grid place-content-center overflow-hidden rounded-2xl">
            <Image
              src="/8/h8_img-2.webp"
              alt="Image"
              width={410}
              height={240}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default D8_Section_Intro;
