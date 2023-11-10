import { Quote } from "lucide-react";
import { D5_Slider_Review } from "./d5-review-slider";

const D5_Section_Reviews = () => {
  return (
    <section className="bg-[#37C69A] py-24 md:px-4">
      <div className="container">
        <div className="mx-auto flex flex-col items-center gap-4 md:w-3/5">
          <Quote className="h-10 w-10 text-white" />
          <h2 className="font-bromny text-xl font-bold text-white md:text-3xl">
            Best Scale!
          </h2>
          <D5_Slider_Review />
        </div>
      </div>
    </section>
  );
};

export default D5_Section_Reviews;
