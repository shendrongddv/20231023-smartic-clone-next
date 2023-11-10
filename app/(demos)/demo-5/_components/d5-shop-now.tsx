const D5_Section_ShopNow = () => {
  return (
    <section className="relative flex flex-col">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 z-0 grid md:grid-cols-2">
        {/* Col */}
        <div className="bg-white"></div>

        {/* Col */}
        <div className="bg-[url(/5/bg5-h5.jpg)] bg-cover bg-left-bottom bg-no-repeat"></div>
      </div>

      {/* Content */}
      <div className="z-10 px-4 py-24">
        <div className="container grid gap-12 md:grid-cols-2">
          {/* Col */}
          <div className="aspect-1 border"></div>

          {/* Col */}
          <div className="aspect-1 border"></div>
        </div>
      </div>
    </section>
  );
};

export default D5_Section_ShopNow;
