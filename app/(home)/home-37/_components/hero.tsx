import Image from "next/image";

const SectionHero = () => {
  return (
    <section className="bg-[url(/37/rev_home37_05.png)] bg-cover bg-center bg-no-repeat px-4 py-24">
      <div
        className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between
      "
      >
        {/* Col */}
        <div className="flex flex-col gap-6 md:w-5/12">
          <h1 className="font-inter text-5xl font-bold capitalize text-black md:text-6xl">
            rechargeable portable fan
          </h1>

          <p className="text-xl">
            Exclusive technologies ensure full-speed charging
          </p>

          <span className="border-t"></span>

          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-blue-500 md:text-4xl">
                10.000
              </span>
              <span className="text-xl font-semibold text-black">
                mAh large capacity
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                velit.
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-3xl font-bold text-blue-500 md:text-4xl">
                36
              </span>
              <span className="text-xl font-semibold text-black">
                Hours work up to
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                mollitia!
              </span>
            </div>
          </div>
        </div>

        {/* Col */}
        <div className="md:w-5/12">
          <Image
            src="/37/rev_home37_04.png"
            alt="Image"
            width={675}
            height={675}
            className="ml-auto h-auto w-4/5 md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
