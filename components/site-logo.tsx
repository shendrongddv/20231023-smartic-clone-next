import Image from "next/image";
import Link from "next/link";

export const SiteLogo = () => {
  return (
    <Link href="/" aria-label="Smartic">
      <Image
        src="/logo.svg"
        alt="Smartic"
        width={24}
        height={24}
        className="h-6 w-full"
      />
    </Link>
  );
};
