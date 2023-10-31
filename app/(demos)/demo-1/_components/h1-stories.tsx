import Image from "next/image";
import { dataBenefits } from "../data";

const H1_Section_Stories = () => {
  return (
    <div className="flex flex-col-reverse bg-white md:flex-row md:items-center md:justify-between">
      {/* Col */}
      <div className="flex flex-col items-start gap-4 px-6 py-12 md:w-7/12 md:p-24">
        <span className="font-bold text-destructive">Success Stories.</span>

        <h2 className="font-spectralsc text-4xl font-bold text-black md:text-5xl">
          Real Customers Real Results
        </h2>

        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit.
        </p>

        <ul className="mt-4 grid grid-cols-2 gap-4 md:gap-x-16 md:gap-y-6">
          {dataBenefits?.map((item) => (
            <li key={item.id} className="flex items-center gap-2 md:gap-4">
              <Image
                src={`/1/${item.media}`}
                alt={item.text}
                width={40}
                height={40}
                className="h-6 w-auto shrink-0 md:h-10"
              />

              <p className="font-semibold text-black max-md:text-sm md:w-8/12">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Col */}
      <div className="flex overflow-hidden md:w-5/12">
        <Image
          src="/1/h1_img-after.jpg"
          alt="Image"
          width={650}
          height={650}
          className="h-auto w-full bg-cover"
        />
      </div>
    </div>
  );
};

export default H1_Section_Stories;
