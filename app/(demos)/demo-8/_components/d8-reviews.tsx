import { D8_Slider_Review } from "./d8-review-slider";

const D8_Section_Reviews = () => {
  return (
    <section className="py-24 md:px-4">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-2 text-center md:w-3/5">
          <span className="font-semibold text-destructive">Reviews.</span>

          <h2 className="text-3xl font-bold text-black md:text-5xl">
            What Customers Say
          </h2>
        </div>

        {/* Row */}
        <D8_Slider_Review />
      </div>
    </section>
  );
};

export default D8_Section_Reviews;
