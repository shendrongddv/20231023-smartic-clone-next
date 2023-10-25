import { PlayCircle } from "lucide-react";
import Image from "next/image";

const SectionIntroVideo = () => {
  return (
    <section className="px-4">
      <div className="container">
        <div className="relative isolate flex items-center justify-center overflow-hidden rounded-3xl">
          <Image
            src="/37/h37_bg1.jpg"
            alt="Image"
            width={1600}
            height={720}
            className="h-auto w-full bg-cover"
          />

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
              <PlayCircle className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntroVideo;
