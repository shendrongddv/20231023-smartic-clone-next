import Image, { StaticImageData } from "next/image";

const D2_Section_Gallery = () => {
  return (
    <div className="container z-10 -mb-24">
      <div className="mx-auto flex flex-wrap max-md:px-2 md:w-4/5">
        {/* Col */}
        <div className="w-1/2 p-1 md:w-1/4 md:p-2 md:first:pl-0 md:last:pr-0">
          <SingleImage media="h2_img-1.jpg" />
        </div>
        {/* Col */}
        <div className="w-1/2 p-1 md:w-1/4 md:p-2 md:first:pl-0 md:last:pr-0">
          <SingleImage media="h2_img-2.jpg" />
        </div>
        {/* Col */}
        <div className="w-1/2 p-1 md:w-1/4 md:p-2 md:first:pl-0 md:last:pr-0">
          <SingleImage media="h2_img-3.jpg" />
        </div>
        {/* Col */}
        <div className="w-1/2 p-1 md:w-1/4 md:p-2 md:first:pl-0 md:last:pr-0">
          <SingleImage media="h2_img-4.jpg" />
        </div>
      </div>
    </div>
  );
};

export default D2_Section_Gallery;

// Component
type SingleImageProps = {
  media: string;
};

const SingleImage = ({ media }: SingleImageProps) => {
  return (
    <figure className="group h-full w-full overflow-hidden rounded-xl border-2 border-background shadow-lg transition duration-500 hover:shadow-xl md:rounded-2xl md:border-4">
      <Image
        src={`/2/${media}`}
        alt="Image"
        width={480}
        height={480}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
      />
    </figure>
  );
};
