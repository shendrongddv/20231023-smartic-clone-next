import Link from "next/link";
import Image from "next/image";

import {
  Facebook,
  Instagram,
  LucideIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import { SiteLogo } from "../site-logo";

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

const Footer_1 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 pt-24">
      <div className="container space-y-12">
        {/* Row */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Col */}
          <div className="flex flex-col items-start md:w-3/12">
            {/* SiteLogo */}
            <SiteLogo />
            <span className="mt-4 text-2xl font-bold text-destructive">
              (84) - 1800 33355
            </span>
            <address className="not-italic">
              184 Mayfield St. Hopewell Junction, NY 12533
            </address>
          </div>

          {/* Col */}
          <div className="space-y-3 md:w-4/12">
            <h4 className="font-semibold">Useful Links.</h4>
            <ul className="grid gap-2 md:grid-cols-2">
              {Links?.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className="underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col */}
          <div className="space-y-4 md:w-3/12">
            <h4 className="font-semibold">Follow Us.</h4>
            <ul className="flex gap-2">
              {Socials?.map((item) => (
                <li key={item.id}>
                  <SocialLink
                    key={item.id}
                    label={item.label}
                    href={item.href}
                    icon={item.icon}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Row */}
        <div className="border-t py-8 text-center">
          <span className="text-sm">
            Copyright © {currentYear}{" "}
            <Link
              href="/"
              aria-label="Smartic"
              className="underline-offset-4 hover:underline"
            >
              Smartic
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer_1;

// Component
type SocialLinkProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const SocialLink = ({ label, href, icon: Icon }: SocialLinkProps) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive text-white hover:bg-foreground"
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};
