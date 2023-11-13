import Image from "next/image";

const D11_Section_Point1 = () => {
  return (
    <section className="relative flex pt-24 md:px-4">
      <div className="container flex flex-col items-center gap-12 md:flex-row md:justify-between">
        {/* Col */}
        <div className="md:w-6/12">
          <figure className="h-auto w-full max-md:pr-4">
            <Image
              src="/11/h11-layer1.webp"
              alt="Image"
              width={963}
              height={723}
              className="h-auto w-full"
            />
          </figure>
        </div>

        {/* Col */}
        <div className="md:w-5/12">
          <div className="flex flex-col items-center gap-8 text-center max-md:px-4 md:items-start md:text-start">
            <h4 className="text-3xl font-bold text-destructive md:text-4xl">
              <span className="font-yellowtail d11-h2 font-normal text-black">
                Best Products
              </span>
              &nbsp;Best Result
            </h4>

            <p className="text-lg text-black">
              Ut enim ad minim veniam, quis nostruditation laboris nisi utex ea
              commodo consequat.
            </p>

            <p className="-mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D11_Section_Point1;
