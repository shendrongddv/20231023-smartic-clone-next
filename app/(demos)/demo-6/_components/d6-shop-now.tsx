import Image from "next/image";

const D6_Section_ShopNow = () => {
  return (
    <section className="px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-4/5">
          <figure aria-hidden className="h-36 w-auto">
            <Image
              src="/6/h6_img-1 (1).webp"
              alt="Image"
              width={296}
              height={175}
              className="h-full w-auto"
            />
          </figure>
          <span aria-hidden className="h-0.5 w-24 bg-destructive"></span>
        </div>

        {/* Row */}
        <div className="h-20 w-full border bg-slate-100"></div>
      </div>
    </section>
  );
};

export default D6_Section_ShopNow;
