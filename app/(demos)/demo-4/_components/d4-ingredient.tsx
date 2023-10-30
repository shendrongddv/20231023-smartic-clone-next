import Image from "next/image";
import { D4_Table_Ingridient } from "./d4-ingredient-table";

const D4_Section_Ingredient = () => {
  return (
    <section className="bg-[#F5F5F5] px-4 py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-2 text-center md:w-3/5">
          <h1 className="font-teko text-4xl uppercase text-foreground md:text-5xl">
            <span className="bg-gradient-to-b from-transparent from-50% to-[#FFCA2E] to-50%">
              Powerful Ingredients
            </span>
          </h1>
        </div>

        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:justify-between">
          {/* Col */}
          <div className="h-full md:w-4/12">
            <figure>
              <Image
                src="/4/revslider_h4-img1.png"
                alt="Image"
                width={437}
                height={635}
                className="m-auto h-auto w-4/5 md:w-full"
              />
            </figure>
          </div>

          {/* Col */}
          <div className="flex flex-col items-start gap-2 md:w-3/12">
            <h3 className="font-teko text-2xl uppercase text-foreground">
              Nutritionals
            </h3>

            <span aria-hidden className="w-full border-t"></span>
            {/* Table */}
            <D4_Table_Ingridient />
          </div>

          {/* Col */}
          <div className="flex flex-col items-start gap-2 md:w-3/12">
            <h3 className="font-teko text-2xl uppercase text-foreground">
              Ingredients
            </h3>

            <span aria-hidden className="w-full border-t"></span>
            <p>
              Vanilla, Whey Protein Concentrate (Milk), Taurine, Flavors
              (Vanilla, Yoghurt), Yoghurt Powder (Milk), Sodium Chloride,
              L-Glutamine, Sweeteners (Acesulfame K, Sucralose), L-Leucine,
              Thickener (Xanthan gum), Whey Protein Isolate (Milk), Bromelain
              extracted from Ananas comosus (1200 GDU/g), Papain extracted from
              Carica papaya (1.5 FIP U/mg), Dextrose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D4_Section_Ingredient;
