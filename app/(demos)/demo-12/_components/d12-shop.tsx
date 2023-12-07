import Image from "next/image";

const D12_Section_Shop = () => {
  return (
    <section className="py-24">
      <div className="container flex flex-col items-center gap-8 px-6 md:gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-1/2">
          <Image
            aria-hidden
            src="/12/home-12-icon-1.png"
            alt="Image"
            width={67}
            height={49}
            className="h-12 w-auto"
          />

          <h2 className="font-redrose text-3xl text-foreground md:text-5xl">
            Browse our products
          </h2>
        </div>

        {/* Row */}
      </div>
    </section>
  );
};

export default D12_Section_Shop;
