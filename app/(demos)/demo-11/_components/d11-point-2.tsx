import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const dataList = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    text: "Adipisicing elit, sed do eiusmod.",
  },
  {
    text: "Tempor incididunt utre et dolore magna aliqua.",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud.",
  },
];

const D11_Section_Point2 = () => {
  return (
    <section className="relative flex pt-24 md:px-4">
      <div className="container flex flex-col items-center gap-12 md:flex-row-reverse md:justify-between">
        {/* Col */}
        <div className="md:w-4/12">
          <figure className="h-auto w-full">
            <Image
              src="/11/h11-layer2.webp"
              alt="Image"
              width={963}
              height={723}
              className="mx-auto h-auto w-4/5 md:w-full"
            />
          </figure>
        </div>

        {/* Col */}
        <div className="md:w-6/12">
          <div className="flex flex-col items-center gap-8 text-center max-md:px-4 md:items-start md:text-start">
            <h4 className="text-3xl font-bold text-destructive md:text-4xl">
              <span className="font-yellowtail d11-h2 font-normal text-black">
                Only Organic
              </span>
              &nbsp;Always Fresh
            </h4>

            <p className="text-lg text-black">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>

            <ul className="grid w-full gap-2">
              {dataList?.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-start gap-2 text-start text-black"
                >
                  <CheckCircle2 className="mt-[5px] h-4 w-4 text-destructive" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D11_Section_Point2;
