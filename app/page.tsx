import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="h-screen px-4 py-16">
        <div className="container flex h-full flex-col items-center justify-center gap-6">
          <h1 className="text-center font-lora text-2xl font-bold md:text-5xl">
            Home
          </h1>
          <Button asChild>
            <Link href="/home-6">Home 6</Link>
          </Button>
          <Button asChild>
            <Link href="/home-7">Home 7</Link>
          </Button>
          <Button asChild>
            <Link href="/home-37">Home 37</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
