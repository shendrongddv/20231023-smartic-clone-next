import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <section className="h-screen px-4 py-16">
        <div className="container flex h-full flex-col items-center justify-center gap-6">
          <h1 className="font-lora text-center text-2xl font-bold md:text-5xl">
            Home
          </h1>
          <Button>Test Button</Button>
        </div>
      </section>
    </>
  );
};

export default Home;
