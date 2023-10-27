import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

const listDetails = [
  {
    id: "f35f0315-b60d-58ed-b41a-0f6639461656",
    text: "Each designed to perform very different jobs",
  },
  {
    id: "44aa9185-10d1-5291-9b83-91d155293fd9",
    text: "A USB charging port",
  },
  {
    id: "c447c5ea-80de-58f5-9aa0-144f670fba4b",
    text: "Padded Laptop and table sleeves",
  },
  {
    id: "b069f972-ef0c-51a7-8ec5-57b68f12fabe",
    text: "Multiple interior slip pockets",
  },
  {
    id: "768b9af0-ddc6-532a-b031-53f354455c7a",
    text: "Roomy main compartment with two zippered",
  },
];

const D3_Section_Details = () => {
  return (
    <section className="isolate z-10 -mt-12 px-4">
      <div className="container flex flex-col gap-12 md:gap-24">
        {/* Row */}
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-stretch md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:w-5/12 md:items-start md:pt-24 md:text-start">
            <h2 className="font-bebasneue text-4xl font-bold text-black md:text-6xl">
              Multiple Organizer Travel Backpack
            </h2>

            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis
            </p>

            <ul className="mt-4 grid w-full gap-2">
              {listDetails?.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-start gap-4 text-start md:items-center"
                >
                  <CheckCheck className="h-4 w-4 text-destructive max-md:mt-1" />
                  <p className="font-semibold">{item.text}</p>
                </li>
              ))}
            </ul>

            <Button
              variant="destructive"
              size="lg"
              className="mt-4 font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <figure className="h-full">
              <Image
                src="/3/image2-h3.jpg"
                alt="Image"
                width={520}
                height={700}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-12 md:flex-row md:items-stretch md:justify-between">
          {/* Col */}
          <div className="md:w-5/12">
            <figure className="overflow-hidden">
              <Image
                src="/3/image4-h3.jpg"
                alt="Image"
                width={520}
                height={700}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:w-6/12 md:items-start md:text-start">
            <h2 className="font-bebasneue text-4xl font-bold text-black md:text-6xl">
              Safe and Connected
            </h2>

            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius.
            </p>

            <figure className="mt-8 h-full">
              <Image
                src="/3/image5-h3.jpg"
                alt="Image"
                width={520}
                height={700}
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>

        {/* Row */}
        <div className="w-full max-md:-mt-12">
          <figure className="h-full">
            <Image
              src="/3/image6-h3.jpg"
              alt="Image"
              width={520}
              height={700}
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default D3_Section_Details;
