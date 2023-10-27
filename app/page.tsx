import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen bg-[url(/0/ldp2-bg.jpg)] bg-cover bg-top bg-no-repeat px-4 py-24">
        <div className="container">
          {/* Row */}
          <div className="mx-auto flex w-full flex-col items-center gap-4 text-center text-white">
            <h1 className="text-5xl md:w-4/5 md:text-[90px]">
              An outstanding{" "}
              <span className="font-lora text-destructive">
                product landing page
              </span>{" "}
              theme
            </h1>

            <p className="text-lg md:w-2/5">
              Smartic is a really creative & modern Product Landing Page
              WooCommerce Theme with a premier appeal built with powerful
              Elementor page builder.
            </p>

            <Button
              variant="secondary"
              size="default"
              className="mt-4 font-semibold"
            >
              View All Demos
            </Button>
          </div>
        </div>
      </section>

      {/* Demos */}
      <section className="px-4 py-24">
        <div className="container space-y-12">
          {/* Row */}
          <div className="flex flex-col items-center text-center">
            <span className="flex items-start bg-[url(/0/ldp_mask.jpg)] bg-clip-text font-inter text-[90px] font-black leading-none text-transparent md:text-9xl">
              50<span className="text-6xl">+</span>
            </span>

            <h2 className="text-[32px] font-medium text-black md:text-6xl">
              <span className="font-lora text-destructive">Unique</span>{" "}
              prebuilt demos
            </h2>

            <p>and more demos comingsoon</p>
          </div>

          {/* Row */}
          <ul className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8">
            <li className="flex flex-col items-center gap-2 bg-white p-2 md:p-4">
              <figure className="overflow-hidden">
                <Image
                  src="/0/demos/ldp_home-37.jpg"
                  alt="Home 37"
                  width={560}
                  height={560}
                  className="h-auto w-full bg-cover"
                />
              </figure>
              <Link
                href="/home-37"
                aria-label="Home 37"
                className="text-center text-base font-medium text-black md:text-xl"
              >
                Home 37
              </Link>
            </li>
            <li className="flex flex-col items-center gap-2 bg-white p-2 md:p-4">
              <figure className="overflow-hidden">
                <Image
                  src="/0/demos/ldp_home-7.jpg"
                  alt="Home 7"
                  width={560}
                  height={560}
                  className="h-auto w-full bg-cover"
                />
              </figure>
              <Link
                href="/home-37"
                aria-label="Home 37"
                className="text-center text-base font-medium text-black md:text-xl"
              >
                Home 7
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA : Purchase Now */}
      <section className="bg-[url(/0/ldp2_bg-1.jpg)] bg-cover bg-center bg-no-repeat px-4 py-24">
        <div className="container flex flex-col items-center gap-12">
          {/* Row */}
          <div className="flex flex-col items-center gap-4 text-center text-white">
            <h2 className="text-3xl md:w-4/5 md:text-6xl">
              <span className="font-lora text-destructive">
                Everything you need
              </span>{" "}
              for an awesome landing pages
            </h2>

            <p className="md:w-3/5">
              Smartic comes with unique designs and layouts, diverse topics and
              fields with proper styles. Build great Landing Pages easily with
              Smartic.
            </p>

            <Button
              variant="destructive"
              size="default"
              className="mt-4 font-semibold"
            >
              Purchase Now
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-4 py-24">
        <div className="container flex flex-col items-center gap-12">
          {/* Row */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl text-black md:w-4/5 md:text-6xl">
              What&nbsp;
              <span className="font-lora text-destructive">
                our happy clients
              </span>
              &nbsp;say about us
            </h2>

            <p className="md:w-3/5">
              We are grateful for the wonderful testimonials from our happy and
              beloved clients. See what a recent partner has to say about
              working with us.
            </p>

            <Button
              variant="destructive"
              size="default"
              className="mt-4 font-semibold"
            >
              Purchase Now
            </Button>
          </div>
        </div>
      </section>

      {/* Template */}
      <section className="bg-[#EAE2DE] px-4 py-24">
        <div className="container flex flex-col items-center gap-12">
          {/* Row */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl text-black md:w-3/5 md:text-6xl">
              <span className="font-lora text-destructive">Stunning</span>
              &nbsp;premade inside pages
            </h2>

            <Button
              variant="destructive"
              size="default"
              className="mt-4 font-semibold"
            >
              Purchase Now
            </Button>
          </div>
        </div>
      </section>

      {/* Section */}
      <section className="h-screen px-4 py-16">
        <div className="container flex h-full flex-col items-center justify-center gap-6">
          <h1 className="text-center font-lora text-2xl font-bold md:text-5xl">
            Home
          </h1>
          <Button asChild>
            <Link href="/home-1">Home 1</Link>
          </Button>
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
