import Image from "next/image";

const D50_CTA_Beta = () => {
  return (
    <section className="bg-[url(/50/bg-h50.jpg)] bg-cover bg-center bg-no-repeat px-4 max-md:pb-24">
      <div className="container">
        <div className="flex flex-col-reverse gap-12 md:flex-row md:items-center md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-center gap-4 text-center md:w-5/12 md:items-start md:text-start">
            <figure aria-hidden>
              <Image
                src="/50/h50_subtitle-6.svg"
                alt="Image"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </figure>

            <h2 className="font-kanit text-3xl font-bold text-black md:text-5xl">
              Subscribe Now to Get 10% Off Smartic Products
            </h2>

            <p>New subscribers only! We write a pretty great newsletter.</p>
          </div>

          {/* Col */}
          <div className="md:w-6/12">
            <figure>
              <Image
                src="/50/img_h50.png"
                alt="Image"
                width={480}
                height={480}
                className="mx-auto h-auto w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D50_CTA_Beta;
