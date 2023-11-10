import Image from "next/image";

const D5_Section_intro = () => {
  return (
    <section className="relative flex flex-col">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 z-0 grid md:grid-cols-2">
        {/* Col */}
        <div className="bg-[url(/5/image2_h5.jpg)] bg-cover bg-center bg-no-repeat"></div>

        {/* Col */}
        <div className="bg-white"></div>
      </div>

      {/* Content */}
      <div className="z-10 px-4 py-24">
        <div className="container flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="mx-auto aspect-1 w-3/4 md:w-3/12"></div>

          {/* Col */}
          <div className="md:w-4/12">
            <figure className="mx-auto w-3/4 md:w-full">
              <Image
                src="/5/image1-h5.png"
                alt="Image"
                width={480}
                height={480}
                className="h-full w-full"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:w-3/12 md:items-start md:text-start">
            <h2 className="text-3xl text-foreground md:text-5xl">
              Total health <span className="font-black">support</span>
            </h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur adipisci velit, sed quia
              non numquam eius.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D5_Section_intro;
