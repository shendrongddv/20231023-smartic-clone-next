import { dataBenefits } from "../data";
import BenefitCard from "./benefit-card";

const SectionBenefits = () => {
  return (
    <section className="bg-[#F6F6F6] px-4 py-24">
      <div className="container flex flex-col items-center gap-16">
        {/* Col */}
        <div className="flex flex-col gap-8 text-center md:w-6/12">
          <span className="font-semibold text-destructive">
            Product Benefits.
          </span>
          <h2 className="font-fahkwang text-3xl leading-none md:text-4xl">
            Safe and effective
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis.
          </p>
        </div>

        {/* Col */}
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {dataBenefits?.map((item) => (
            <BenefitCard key={item.id} desc={item.desc} icon={item.icon} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionBenefits;
