import { PawPrint } from "lucide-react";
import Image from "next/image";

const fakeData = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit eu urna natoque, cras orci vel pretium quisque platea sociosqu massa.",
  },
  {
    id: 2,
    text: "Inceptos interdum, tortor lobortis blandit condimentum phasellus at class mattis mus. Iaculis potenti molestie.",
  },
  {
    id: 3,
    text: "Facilisis nunc porttitor ligula taciti ridiculus eleifend dapibus, suspendisse tempus lacinia pellentesque elementum.",
  },
  {
    id: 4,
    text: "Sociosqu convallis mi torquent praesent dui, quisque tortor leo euismod ut condimentum facilisi libero nisl.",
  },
  {
    id: 5,
    text: "Sollicitudin orci ante fames eget est feugiat dui netus ullamcorper accumsan, dictum convallis habitasse morbi litora.",
  },
  {
    id: 6,
    text: "Rhoncus quisque felis interdum, nostra massa aenean purus odio laoreet auctor urna ac. Conubia aliquet aliquam sociosqu nisi.",
  },
  {
    id: 7,
    text: "Orci magna id, tellus mattis habitant curae litora ullamcorper aptent feugiat, primis tincidunt parturient lacus.",
  },
  {
    id: 8,
    text: "Fames a vulputate et vitae mollis sollicitudin potenti montes, lacus luctus himenaeos orci aliquet rutrum.",
  },
];

const D12_Section_Ingredients = () => {
  return (
    <section className="bg-[#B5E070] py-24 text-white md:pb-24">
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
            Up to 70% meat and animal ingredients
          </h2>
        </div>

        {/* Row */}
      </div>
    </section>
  );
};

export default D12_Section_Ingredients;
