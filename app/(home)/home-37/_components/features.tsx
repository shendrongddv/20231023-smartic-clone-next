import { dataFeatures } from "../data";

const SectionFeatures = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container">
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {dataFeatures?.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center gap-2 p-4 text-center transition duration-500 hover:bg-white hover:shadow-lg md:p-10"
            >
              <h3 className="font-inter text-2xl font-bold text-black">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionFeatures;
