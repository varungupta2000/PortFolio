import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  primathon,
  avataar,
  digital,
  next,
  native,
  nest,
  sql,
  aws,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "React Native",
    icon: native,
  },
  {
    name: "Nest JS",
    icon: nest,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git & Github",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Avataar Skincare Technologies Pvt. Ltd.",
    icon: avataar,
    iconBg: "#fff",
    date: "August 2024 - Present",
    points: [
      "Led front-end and back-end development for web and mobile platforms, enhancing user experience and performance.",
      "Increased business efficiency by 35% by developing and optimizing website and app interfaces, ensuring seamless and intuitive user interactions.",
      "Contributed to the backend using Next.js, managing API integrations and MySQL databases. ",
      "Successfully developed dynamic booking slot logic, enhancing session planning and boosting appointment efficiency by 25% based on therapist expertise, machine availability, and client preference management. ",
      "Engineered a comprehensive dashboard system for real-time monitoring client and therapist activity, improving booking management efficiency for internal operations by 30%.",
      "Wrote GitHub Actions scripts to automate the deployment process of frontend repositories, streamlining updates and improving deployment efficiency."
    ],
  },
  {
    title: "SDE - II",
    company_name: "Primathon Technologies Pvt. Ltd.",
    icon: primathon,
    iconBg: "#fff",
    date: "July 2022 - July 2024",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Managed a team of four to deliver the Yume Labs corporate website, showcasing expertise in UI/UX design tailored for diverse clients.",
      "Pioneered an API for 2D drawing and modeling, enabling real-time modification of geometric structures; this innovation streamlined user interaction and was adopted across 15 projects, enhancing overall design accuracy.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Digital Next Software Solutions",
    icon: digital,
    iconBg: "#fff",
    date: "Dec 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using Java and other related technologies.",
      "Responsible for Integrating Social Media for their Website.",
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
    name: "E-commerce Website",
    description:
      "Web-based platform that allows users to see products and buy it by adding it to cart and move to payment section.",
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
    source_code_link: "https://github.com/V2K4Y/E-commerce-WebSite",
  },
  {
    name: "Live-chat App",
    description:
      "Web application that enables users to chat with other users in realtime environment.",
    tags: [
      {
        name: "node, express",
        color: "blue-text-gradient",
      },
      {
        name: "restapi, mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/V2K4Y/LiveChat---App",
  },
  {
    name: "Data Analysis - (EDA)",
    description:
      "Exploratory data analysis on clients data to provide most selling product categories which can help to plan inventory and hence meet the demands.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Seaborn",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/V2K4Y/PythonDataAnalysis",
  },
];

export { services, technologies, experiences, testimonials, projects };
