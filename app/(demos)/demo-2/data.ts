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

// USER RELATED
// Review
export const dataReviewList = [
  {
    id: "1",
    name: "John Smith",
    bio: {
      isMale: true,
      age: 25,
      city: "New York City",
      media: null,
    },
    institution: {
      name: "XYZ Company",
      position: "Customer",
      city: "New York City",
      media: null,
    },
    review:
      "Great online service platform! The user interface is user-friendly, and the platform offers a wide range of services. I highly recommend it.",
    rating: 5,
  },
  {
    id: "2",
    name: "Emily Johnson",
    bio: {
      isMale: false,
      age: 32,
      city: "Los Angeles",
      media: null,
    },
    institution: {
      name: "ABC Corporation",
      position: "Manager",
      city: "Los Angeles",
      media: null,
    },
    review:
      "I have been using this online service platform for a while now, and I am extremely satisfied with the quality of service. The customer support team is also very responsive and helpful.",
    rating: 4,
  },
  {
    id: "3",
    name: "Michael Brown",
    bio: {
      isMale: true,
      age: 40,
      city: "Chicago",
      media: null,
    },
    institution: {
      name: "DEF Enterprises",
      position: "CEO",
      city: "Chicago",
      media: null,
    },
    review:
      "I recently started using this online service platform for my business, and it has greatly improved our efficiency and productivity. The platform offers a seamless experience and has all the features we need.",
    rating: 4.5,
  },
  {
    id: "4",
    name: "Sarah Davis",
    bio: {
      isMale: false,
      age: 28,
      city: "San Francisco",
      media: null,
    },
    institution: {
      name: "GHI Solutions",
      position: "Freelancer",
      city: "San Francisco",
      media: null,
    },
    review:
      "This online service platform has made my work so much easier. It has a great selection of tools and resources, and the platform is constantly updated with new features. I'm impressed!",
    rating: 5,
  },
  {
    id: "5",
    name: "David Wilson",
    bio: {
      isMale: true,
      age: 35,
      city: "Seattle",
      media: null,
    },
    institution: {
      name: "JKL Innovations",
      position: "Entrepreneur",
      city: "Seattle",
      media: null,
    },
    review:
      "I've tried several online service platforms, but this one stands out. It offers competitive pricing and delivers high-quality service. The platform is very intuitive, and I haven't faced any issues so far.",
    rating: 4,
  },
  {
    id: "6",
    name: "Olivia Taylor",
    bio: {
      isMale: false,
      age: 27,
      city: "Miami",
      media: null,
    },
    institution: {
      name: "MNO Ventures",
      position: "Business Analyst",
      city: "Miami",
      media: null,
    },
    review:
      "I highly recommend this online service platform to anyone looking for reliable and efficient services. The platform has exceeded my expectations, and I've had a great experience using it.",
    rating: 4.5,
  },
  {
    id: "7",
    name: "Robert Johnson",
    bio: {
      isMale: true,
      age: 45,
      city: "Houston",
      media: null,
    },
    institution: {
      name: "PQR Solutions",
      position: "Consultant",
      city: "Houston",
      media: null,
    },
    review:
      "I've been using this online service platform for my consulting work, and it has been a game-changer. The platform offers advanced analytics and reporting tools, which have helped me deliver valuable insights to my clients.",
    rating: 4.8,
  },
  {
    id: "8",
    name: "Sophia Anderson",
    bio: {
      isMale: false,
      age: 30,
      city: "Boston",
      media: null,
    },
    institution: {
      name: "STU Corporation",
      position: "Marketing Manager",
      city: "Boston",
      media: null,
    },
    review:
      "As a marketing professional, this online service platform has been a valuable resource for me. It provides comprehensive market research data and allows me to track the performance of my campaigns effectively.",
    rating: 4.2,
  },
  {
    id: "9",
    name: "Daniel Martinez",
    bio: {
      isMale: true,
      age: 38,
      city: "Dallas",
      media: null,
    },
    institution: {
      name: "VWX Enterprises",
      position: "Operations Manager",
      city: "Dallas",
      media: null,
    },
    review:
      "I've been using this online service platform to streamline our operations, and it has been incredibly helpful. The platform offers powerful automation features and has significantly reduced manual work for our team.",
    rating: 4.7,
  },
  {
    id: "10",
    name: "Ava Thompson",
    bio: {
      isMale: false,
      age: 29,
      city: "Atlanta",
      media: null,
    },
    institution: {
      name: "YZA Solutions",
      position: "Software Engineer",
      city: "Atlanta",
      media: null,
    },
    review:
      "As a software engineer, I rely on this online service platform for code collaboration and version control. It offers an excellent code review system and makes team collaboration seamless.",
    rating: 4.5,
  },
  {
    id: "11",
    name: "Matthew Roberts",
    bio: {
      isMale: true,
      age: 33,
      city: "Phoenix",
      media: null,
    },
    institution: {
      name: "BCD Corporation",
      position: "Financial Analyst",
      city: "Phoenix",
      media: null,
    },
    review:
      "This online service platform has transformed the way I analyze financial data. It provides powerful data visualization tools and allows me to generate insightful reports quickly.",
    rating: 4.3,
  },
  {
    id: "12",
    name: "Lily Green",
    bio: {
      isMale: false,
      age: 31,
      city: "Denver",
      media: null,
    },
    institution: {
      name: "EFG Innovations",
      position: "Project Manager",
      city: "Denver",
      media: null,
    },
    review:
      "I've been using this online service platform to manage my projects, and it has been a game-changer. The platform offers excellent collaboration features and keeps everything organized.",
    rating: 4.6,
  },
];
