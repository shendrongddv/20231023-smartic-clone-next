import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const dataLists = [
  {
    id: 1,
    title: "Download on Google Play",
    url: "/",
    image: "h2_android.jpg",
  },
  {
    id: 1,
    title: "Download on App Store",
    url: "/",
    image: "h2_ios.jpg",
  },
];

const D5_Section_Feature2 = () => {
  return (
    <section className="relative flex flex-col">
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 hidden md:grid md:grid-cols-2"
      >
        {/* Col */}
        <div className="bg-[url(/5/bg2-h5.jpg)] bg-cover bg-center bg-no-repeat"></div>

        {/* Col */}
        <div></div>
      </div>

      {/* Content */}
      <div className="container z-10 flex flex-col md:flex-row-reverse md:items-center md:justify-between">
        {/* Col */}
        <div className="flex flex-col items-center gap-8 px-4 py-24 text-center max-md:order-last max-md:px-4 md:w-5/12 md:items-start md:text-start">
          <h2 className="text-3xl text-foreground md:text-5xl">
            Set Up in Minutes with{" "}
            <span className="font-black">Smartphone</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamc
          </p>

          <ul className="mt-2 grid w-full grid-cols-2 gap-2 md:w-max">
            {dataLists?.map((item) => (
              <li
                key={item.id}
                className="grid place-content-center overflow-hidden rounded-lg shadow"
              >
                <Link
                  href={item.url}
                  aria-label={item.title}
                  target="_blank"
                  rel="noopener dofollow"
                >
                  <Image
                    src={`/5/${item.image}`}
                    alt={item.title}
                    width={192}
                    height={192}
                    className="h-16 w-auto object-cover"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col */}
        <div
          aria-hidden
          className="flex aspect-1 bg-[url(/5/bg2-h5.jpg)] bg-cover bg-center bg-no-repeat md:hidden md:w-6/12"
        ></div>
      </div>
    </section>
  );
};

export default D5_Section_Feature2;
