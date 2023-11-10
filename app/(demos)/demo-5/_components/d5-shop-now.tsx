const D5_Section_ShopNow = () => {
  return (
    <section className="relative flex flex-col">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 hidden md:grid md:grid-cols-2"
      >
        {/* Col */}
        <div></div>

        {/* Col */}
        <div className="bg-[url(/5/bg5-h5.jpg)] bg-cover bg-center bg-no-repeat"></div>
      </div>

      {/* Content */}
      <div className="container z-10 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-center gap-8 px-4 py-24 text-center max-md:order-last max-md:px-4 md:w-5/12 md:items-start md:text-start">
          <h2 className="text-3xl text-foreground md:text-5xl">
            Easily Track Your <span className="font-black">Weight & More</span>
          </h2>
        </div>

        {/* Col */}
        <div
          aria-hidden
          className="flex aspect-1 bg-[url(/5/bg5-h5.jpg)] bg-cover bg-center bg-no-repeat md:hidden md:w-6/12"
        ></div>
      </div>
    </section>
  );
};

export default D5_Section_ShopNow;
