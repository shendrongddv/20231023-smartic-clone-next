import { dataFeatures } from "../data";
import { D2_Card_WhatWeDo } from "./d2-what-we-do-card";

const D2_Section_WhatWeDo = () => {
  return (
    <section className="px-4 py-24">
      <div className="container space-y-12">
        {/* Row */}
        <div className="mx-auto flex flex-col items-center gap-2 text-center md:w-2/5">
          <span className="font-semibold text-destructive">
            What They Can Do
          </span>

          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Watch Tracker for Kids
          </h2>
        </div>

        {/* List */}
        <ul className="grid w-full gap-8 md:grid-cols-3">
          {dataFeatures?.map((item) => (
            <li key={item.id}>
              <D2_Card_WhatWeDo
                title={item.title}
                desc={item.desc}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default D2_Section_WhatWeDo;
