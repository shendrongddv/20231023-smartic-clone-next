import { PawPrint } from "lucide-react";
import Image from "next/image";

const fakeData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit eu urna natoque, cras orci vel pretium quisque platea sociosqu massa.",
  },
  {
    id: 2,
    text: "Inceptos interdum, tortor lobortis blandit condimentum phasellus at class mattis.",
  },
  {
    id: 3,
    text: "Facilisis nunc porttitor ligula taciti ridiculus eleifend dapibus, suspendisse.",
  },
  {
    id: 4,
    text: "Sociosqu convallis mi torquent praesent dui, quisque tortor leo euismod ut.",
  },
  {
    id: 5,
    text: "Sollicitudin orci ante fames eget est feugiat dui netus ullamcorper accumsan, dictum.",
  },
  {
    id: 6,
    text: "Rhoncus quisque felis interdum, nostra massa aenean purus odio laoreet auctor urna ac. Conubia.",
  },
  {
    id: 7,
    text: "Orci magna id, tellus mattis habitant curae litora ullamcorper aptent feugiat.",
  },
  {
    id: 8,
    text: "Fames a vulputate et vitae mollis sollicitudin potenti montes, lacus luctus.",
  },
];

const D12_Section_WhatWeDo = () => {
  return (
    <section className="bg-[#FC9A6E] pt-24 text-white md:pb-24">
      <div className="container flex flex-col items-center gap-8 px-6 md:gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-1/2">
          <Image
            aria-hidden
            src="/12/home-12-icon-2.png"
            alt="Image"
            width={67}
            height={49}
            className="h-12 w-auto"
          />

          <h2 className="font-redrose text-3xl md:text-5xl">
            Help your pet stay healthy & happy
          </h2>
        </div>

        {/* Row */}
        <div className="flex w-full flex-col-reverse flex-nowrap gap-12 md:flex-row">
          {/* Col */}
          <div className="md:w-1/3">
            <Image
              src="/12/home-12-image-4.webp"
              alt="Image"
              width={442}
              height={535}
              className="h-auto w-full"
            />
          </div>

          {/* Col */}
          <ul className="grid flex-1 gap-4 md:grid-cols-2 md:gap-8">
            {fakeData?.map((item) => (
              <li key={item.id} className="flex gap-4">
                <PawPrint className="mt-1.5 h-6 w-6 shrink-0" />
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default D12_Section_WhatWeDo;
