import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  linux,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  BFI,
  shopify,
  carrent,
  jobit,
  tripguide,
  sql,
  rasa,
  jira,
  kaggle,
  python,
  seaborn,
  ntlk
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: web,
  },
  {
    title: "NLP Specialist",
    icon: mobile,
  },
  {
    title: "Generative AI Specialist",
    icon: backend,
  },
  {
    title: " Deep Learning Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "rasa",
    icon: rasa,
  },
  {
    name: "kaggle",
    icon: kaggle,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "NTLK",
    icon: ntlk,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "AI Engineer Intern",
    company_name: "BFI Groupe",
    icon: BFI,
    iconBg: "#383E56",
    date: "Feb 2024 - June 2024",
    points: [
      "Developed an intelligent chatbot for banking services using Rasa and MongoDB.",
      "Implemented features for account balance checks, money transfers, and expense tracking.",
      "Collaborated with cross-functional teams to improve chatbot functionality and user experience.",
      "Stored and managed chatbot conversations using MongoDB.",
    ],
  },
  {
    title: "Data Scientist Intern",
    company_name: "Viridis IT",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Aug 2023",
    points: [
      "Performed sentiment analysis on social media data.",
      "Collected data through web scraping for IT training centers in Tunisia.",
      "Utilized data visualization techniques to present insights and findings.",
      "Collaborated with the team to deliver impactful data-driven solutions.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
