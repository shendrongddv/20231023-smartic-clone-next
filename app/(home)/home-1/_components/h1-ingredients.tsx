import Image from "next/image";
import { dataIngredients } from "../data";

const H1_SectionIngredients = () => {
  return (
    <section className="px-4 py-24">
      <div className="container space-y-16">
        {/* Row */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <span className="font-bold text-destructive">Ingredients.</span>

          <h2 className="font-spectralsc text-4xl font-bold text-black md:text-5xl">
            The Special Formula
          </h2>

          <p className="md:w-2/5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:justify-between">
          <div className="md:w-4/12">
            <Image
              src="/1/h1_img-3.png"
              alt="Image"
              width={523}
              height={523}
              className="mx-auto h-auto w-3/5 md:w-full"
            />
          </div>

          <ul className="grid gap-8 md:w-7/12 md:grid-cols-2 md:gap-12">
            {dataIngredients?.map((item) => (
              <li key={item.id} className="flex items-center gap-6">
                <figure className="aspect-square w-auto shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={`/1/${item.media}`}
                    alt={item.title}
                    width={140}
                    height={140}
                    className="h-20 w-20 bg-cover md:h-24 md:w-24"
                  />
                </figure>
                <div className="md:space-y-2">
                  <h3 className="font-spectralsc text-lg font-semibold text-black md:text-2xl">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default H1_SectionIngredients;
