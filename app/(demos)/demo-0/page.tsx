import { Button } from "@/components/ui/button";

const Demo_0_Page = () => {
  return (
    <>
      {/* Test */}
      <section className="h-screen px-4 py-24">
        <div className="container h-full">
          <div className="mx-auto flex h-full flex-col items-center justify-center gap-4 text-center md:w-3/5">
            <h1 className="font-bebasneue text-2xl font-bold text-foreground md:text-7xl">
              Heading
            </h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur incidunt a officiis minus magni nisi tenetur?
            </p>

            <Button variant="default" className="mt-4 font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo_0_Page;
