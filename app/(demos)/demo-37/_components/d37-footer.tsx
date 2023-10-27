import {
  Facebook,
  Instagram,
  LucideIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Links = [
  {
    id: "4e00f03b-aa65-559d-a9eb-cf7ef8a37939",
    label: "About",
    href: "#",
  },
  {
    id: "85fbe0a7-c786-5a85-b365-8c9c852fbd46",
    label: "News",
    href: "#",
  },
  {
    id: "0fa2cc83-7af0-512b-9cec-114e139bc632",
    label: "Partners",
    href: "#",
  },
  {
    id: "fb5343d1-f9aa-503a-bf4b-1c4e715d4cc9",
    label: "Delivery and payment",
    href: "#",
  },
  {
    id: "6159db42-2634-5a36-a5d3-845c7f927f08",
    label: "Terms of sale",
    href: "#",
  },
  {
    id: "164a34d7-d9c6-5a7a-a607-9607b8fe8175",
    label: "Contacts",
    href: "#",
  },
];

const Socials = [
  {
    id: "4a173d74-51a3-5594-ab5d-fe9bef3cec5a",
    label: "Facebook",
    href: "/",
    icon: Facebook,
  },
  {
    id: "cac3a027-d0c6-560a-854e-1b5b34172ed7",
    label: "YouTube",
    href: "/",
    icon: Youtube,
  },
  {
    id: "588eda67-c25f-59b4-a88a-2a7c07662210",
    label: "Twitter",
    href: "/",
    icon: Twitter,
  },
  {
    id: "9f92035e-144e-5756-a3e5-2b29a7ab6d4d",
    label: "Instagram",
    href: "/",
    icon: Instagram,
  },
];

const D37_Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333239] px-4 pt-24">
      <div className="container flex flex-col items-center gap-8">
        {/* Logo */}
        <Link href="/" aria-label="Smartic">
          <Image
            src="/logo-white.svg"
            alt="Smartic"
            width={24}
            height={24}
            className="h-6 w-full"
          />
        </Link>
        {/* Row */}
        <div className="flex w-full flex-col gap-12 border-t border-white/20 py-8 md:flex-row md:justify-between">
          {/* Col */}
          <div className="flex flex-col gap-2 max-md:text-center md:w-1/5">
            <h4 className="mb-2 font-semibold text-blue-500">Contact Info</h4>
            <address className="not-italic text-white hover:text-blue-500">
              184 Mayfield St. Hopewell Junction, NY 12533
            </address>

            <Link
              href="tel:84418003377"
              aria-label="Tel"
              className="text-white hover:text-blue-500"
            >
              (+844) 1800 3377
            </Link>

            <Link
              href="mailto:support@example.com"
              aria-label="Email"
              className="text-white hover:text-blue-500"
            >
              support@example.com
            </Link>
          </div>

          {/* Col */}
          <div className="flex flex-col gap-4 max-md:items-center md:w-2/5">
            <h4 className="font-semibold text-blue-500">Useful Links</h4>
            <ul className="grid gap-2 md:grid-cols-2">
              {Links?.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className="text-white underline-offset-4 hover:text-blue-500 hover:underline max-md:flex max-md:justify-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col */}
          <div className="flex flex-col items-center gap-4 md:w-1/5 md:items-start">
            <h4 className="font-semibold text-blue-500">Follow Us.</h4>
            <ul className="flex gap-2">
              {Socials?.map((item) => (
                <SocialLink
                  key={item.id}
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Row */}
        <div className="w-full border-t border-white/20 py-8 pt-8 text-center">
          <span>Copyright © {currentYear} Smartic. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default D37_Footer;

// Component
type SocialLinkProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SocialLink = ({ label, href, icon: Icon }: SocialLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        aria-label={label}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white bg-transparent text-white hover:border-blue-500 hover:bg-blue-500"
      >
        <Icon className="h-6 w-6" />
      </Link>
    </li>
  );
};
