import { FaStar, FaQuoteRight } from "react-icons/fa";

const D37_Section_Quote = () => {
  return (
    <section className="px-4 py-24">
      <div className="container">
        <div className="mx-auto flex flex-col items-center gap-4 md:w-3/5">
          <div className="flex justify-center gap-2">
            <FaStar className="h-5 w-5 text-blue-500" />
            <FaStar className="h-5 w-5 text-blue-500" />
            <FaStar className="h-5 w-5 text-blue-500" />
            <FaStar className="h-5 w-5 text-blue-500" />
            <FaStar className="h-5 w-5 text-blue-500" />
          </div>

          <div className="relative isolate flex w-full flex-col items-center">
            <FaQuoteRight className="h-48 w-auto text-white" />
            <div className="absolute inset-0 flex items-center justify-center py-8">
              <h2 className="z-10 text-center text-2xl font-bold text-black md:text-4xl">
                &quot;This is a beautiful little fan! The copper finish and
                vintage styling is charming. It gives a refreshing steady
                breeze.&quot;
              </h2>
            </div>
          </div>

          <div className="w-max border-t p-6">
            <p className="font-semibold text-black">
              Dewayne{" "}
              <span className="font-normal text-slate-500">
                - Verified Purchase
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D37_Section_Quote;
