import Image from "next/image";

const D4_Section_HowItWork = () => {
  return (
    <section className="relative flex bg-[url(/4/image6_h4.jpg)] bg-cover bg-fixed bg-no-repeat px-4 pt-24">
      <span
        aria-hidden
        className="absolute inset-0 z-0 bg-black bg-opacity-80"
      ></span>

      <div className="container z-10 flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-3/5">
          <h1 className="font-teko text-4xl uppercase text-white md:text-5xl">
            <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
              How Does It Work
            </span>
          </h1>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Col */}
          <div className="md:w-3/12">
            <p>
              AAA <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              sapiente soluta magnam vel laboriosam, debitis ea.
            </p>
          </div>

          {/* Col */}
          <div className="md:order-last md:w-3/12">
            <p>
              BBB <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              sapiente soluta magnam vel laboriosam, debitis ea.
            </p>
          </div>

          {/* Col */}
          <div className="md:order-2 md:w-4/12">
            <figure>
              <Image
                src="/4/image3-h4.png"
                alt="Image"
                width={437}
                height={635}
                className="mx-auto h-auto w-3/5 md:w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_HowItWork;
