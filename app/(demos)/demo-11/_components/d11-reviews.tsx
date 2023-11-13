import Image from "next/image";

const D11_Section_Reviews = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-1/2">
          <figure aria-hidden className="h-28 w-auto md:h-36">
            <Image
              src="/11/home11-img.webp"
              alt="Image"
              width={209}
              height={154}
              className="h-full w-auto"
            />
          </figure>

          <h4 className="text-3xl font-bold text-destructive md:text-4xl">
            <span className="font-yellowtail d11-h2 font-normal text-black">
              Our Amazing
            </span>
            &nbsp;Story
          </h4>
        </div>
      </div>
    </section>
  );
};

export default D11_Section_Reviews;
