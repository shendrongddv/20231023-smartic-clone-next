const D6_Section_Gallery = () => {
  return (
    <section className="bg-[url(/6/h6_bg.webp)] bg-cover bg-center bg-no-repeat px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-4/5">
          <span className="text-sm font-semibold text-destructive">
            Made with 100% select coffee beans
          </span>

          <h2 className="font-anton text-2xl text-black md:text-3xl">
            The Best Coffee Beans in the World
          </h2>

          <p className="mt-2">
            We all have our preferences on black versus cream and sugar, hot
            coffee versus iced or cold brew, but unifying caffeine addicts the
            world over is a love of a high-quality coffee bean.
          </p>
        </div>

        {/* Row */}
        <div className="h-20 w-full border bg-slate-100"></div>
      </div>
    </section>
  );
};

export default D6_Section_Gallery;
