import {
  AlertCircle,
  BarChartHorizontal,
  Locate,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

// PRODUCT RELATED
// ProductList
export const dataProductList = [
  {
    id: "1",
    title: "Smartic Basic",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit, magna erat torquent augue faucibus bibendum elementum, libero interdum cursus eros nisl dapibus. Quisque porttitor ultrices ultricies fames pharetra sapien aliquet tellus taciti neque, orci cras a nunc eget dis.",
    price: {
      original: 499.99,
      sale: null,
    },
    media: {
      image: "02_product_1.png",
    },
    link: {
      label: "Add to Card",
      url: "/",
    },
    meta: {
      isSale: false,
      inStock: true,
      isFeature: false,
      rating: 4,
    },
  },
  {
    id: "2",
    title: "Smartic X3",
    desc: "Magna volutpat, auctor sed nisl ad placerat ac mi gravida vitae. Tellus justo nibh ante purus mauris torquent potenti, ultrices hac libero class proin ad. Aliquam vel vestibulum aenean conubia nascetur ultrices porttitor, eleifend erat tempor eget etiam pretium.",
    price: {
      original: 599.99,
      sale: null,
    },
    media: {
      image: "02_product_2.png",
    },
    link: {
      label: "Add to Card",
      url: "/",
    },
    meta: {
      isSale: false,
      inStock: true,
      isFeature: false,
      rating: 4,
    },
  },
  {
    id: "3",
    title: "Smartic Pro",
    desc: "Gravida aptent libero est rhoncus iaculis dui natoque, sociis auctor vestibulum cubilia nulla nam rutrum. Eget lacinia etiam id fusce elementum ultrices blandit augue, fames luctus curae eu sodales posuere donec pellentesque leo, enim varius lectus tortor.",
    price: {
      original: 699.99,
      sale: null,
    },
    media: {
      image: "02_product_3.png",
    },
    link: {
      label: "Add to Card",
      url: "/",
    },
    meta: {
      isSale: false,
      inStock: true,
      isFeature: false,
      rating: 4,
    },
  },
];
// Features
export const dataFeatures = [
  {
    id: "827a40f7-814f-5964-a06f-0bdd01f47290",
    title: "Location",
    desc: "Smartic gives information about the location of your child every minute with preciseness when outside up to 10 meters.",
    media: "MEDIAXXX",
    icon: Locate,
  },
  {
    id: "4fcc73d1-21d0-57cc-b84e-beaa3e1564d4",
    title: "Calls",
    desc: "Smartic can receive and make calls only from/to numbers which are authorized by the parents.",
    media: "MEDIAXXX",
    icon: PhoneCall,
  },
  {
    id: "4c60d265-47d1-5518-a7f7-a0ce8eec5eca",
    title: "Secure Zones",
    desc: "If your child leaves or enters these zones, you will immediately receive information.",
    media: "MEDIAXXX",
    icon: ShieldCheck,
  },
  {
    id: "d6b82a80-2ad0-53bf-beb8-230999bc4516",
    title: "Activity",
    desc: "The application allows you to monitor statistics of the activity of your child.",
    media: "MEDIAXXX",
    icon: BarChartHorizontal,
  },
  {
    id: "d3a782ce-3b25-52c0-9fd4-dbe279b37d44",
    title: "Messages",
    desc: "Through the mobile application you can exchange voice with and send text messages to the watch.",
    media: "MEDIAXXX",
    icon: MessageSquare,
  },
  {
    id: "eb358f14-8c8a-57e1-93ed-e82338dd4004",
    title: "SOS Mode",
    desc: "In case you child needs you, they can press the SOS button.",
    media: "MEDIAXXX",
    icon: AlertCircle,
  },
];

// SellingPoints
export const dataSellingPoints = [
  {
    id: "90c62616-2bd0-584a-a022-f292537c8e69",
    title: "Designed for Reliable Mobile Coverage",
    desc: "Smartic requires a Nano SIM card with voice calls, SMS and approximately 200MB data per month.For optimal coverage, we recommending connecting Smatic to a 3G network that uses 2100/850 MHz frequencies.",
    links: {
      label: "More Details",
      url: "/",
    },
    media: "h2_img-6.png",
  },
  {
    id: "4db1ef52-dfca-5a0a-a1a8-2149d8e974d7",
    title: "Communicate the Way You Like",
    desc: "If it is inconvenient to call, voice chat is always available. It allows you to send voice messages for them to be listened and replied to in a convenient manner.",
    links: {
      label: "More Details",
      url: "/",
    },
    media: "h2_img-5.png",
  },
];

// SERVICE RELATED
// ServiceGuarantee
export const dataServiceGuarantee = [
  {
    id: 1,
    title: "Fast & International Delivery",
    desc: null,
    media: {
      image: "delivery.svg",
      icon: null,
    },
  },
  {
    id: 2,
    title: "15 Day for a Free Return",
    desc: null,
    media: {
      image: "return.svg",
      icon: null,
    },
  },
  {
    id: 3,
    title: "Personal Customer Support",
    desc: null,
    media: {
      image: "support.svg",
      icon: null,
    },
  },
];
