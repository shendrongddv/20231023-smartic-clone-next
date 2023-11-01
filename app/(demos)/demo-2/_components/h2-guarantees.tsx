import Image from "next/image";
import { dataServiceGuarantee } from "../data";

const H2_Section_Guarantees = () => {
  return (
    <section className="px-4">
      <div className="container border-b border-t py-12">
        {/* List */}
        <ul className="grid w-full grid-cols-3">
          {dataServiceGuarantee?.map((item) => (
            <li key={item.id}>
              <div className="flex flex-col items-center gap-2 p-2 text-center md:justify-start md:p-8">
                <figure aria-hidden className="aspect-1 h-8 md:h-14">
                  <Image
                    src={`/global/icon/${item.media.image}`}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="mx-auto h-full w-auto"
                  />
                </figure>

                <p className="text-xs text-foreground md:w-3/5 md:text-lg md:font-semibold">
                  {item.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default H2_Section_Guarantees;
