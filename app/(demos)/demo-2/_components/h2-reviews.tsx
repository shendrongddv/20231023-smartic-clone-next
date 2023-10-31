const H2_Section_Reviews = () => {
  return (
    <section className="px-4 py-24">
      <div className="container space-y-12">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-2 text-center md:w-2/5">
          <span className="font-semibold text-destructive">Reviews</span>

          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            What Customers Say
          </h2>
        </div>

        {/* List */}
        <ul className="grid w-full gap-8 bg-slate-100 p-8 md:grid-cols-3"></ul>
      </div>
    </section>
  );
};

export default H2_Section_Reviews;
