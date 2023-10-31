import Image from "next/image";

// UI
import { Button } from "@/components/ui/button";

const SectionChangeYourLife = () => {
  return (
    <section className="px-4 pt-16">
      <div className="container flex flex-col gap-16 md:flex-row-reverse md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-start gap-6 md:w-5/12">
          <span className="font-semibold text-destructive">
            Change Your Life.
          </span>
          <h2 className="font-fahkwang text-3xl leading-none md:text-4xl">
            Be confident with your body
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis. et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem.
          </p>

          <Button
            variant="destructive"
            size="lg"
            className="mt-2 font-semibold"
          >
            Start Your Trial
          </Button>
        </div>

        {/* Col */}
        <div className="md:w-6/12">
          <Image
            src="/7/img-3.png"
            alt="Image"
            width={720}
            height={720}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionChangeYourLife;
