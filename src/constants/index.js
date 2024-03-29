import {
  mobile,
  backend,
  creator,
  web,
  carrent,
  jobit,
  tripguide,
  movies,
  virtual,
  amazon,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Science Enthusiast",
    icon: creator,
  },
];

const projects = [
  {
    name: "Discord Clone",
    description:
    "Web application that enables users to create and join servers, chat in text channels, and customize their profiles.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AjayKumarSaini8/discord_like_application",
  },
  {
    name: "Blog app",
    description:
      "Web application that enables users to create and join servers, chat in text channels, and customize their profiles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/AjayKumarSaini8/React-JS/tree/main/11blogapp",
  },
  {
    name: "Used Car Price Prediction",
    description:
      "web application to be able to predict used cars market value can help both buyers and sellers.",
    tags: [
      {
        name: "Jupyter",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AjayKumarSaini8/used-car-price-prediction.git",
  },
  {
    name: "Movies Recommendation",
    description:
      "A system that provides personalized movie recommendations to users based on their preferencesr.",
    tags: [
      {
        name: "Jupyter",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/AjayKumarSaini8/movie-recommendation-engine.git",
  },
  {
    name: "Virtal Dressing Room",
    description:
      "This project leverages AR or VR technologies to enhance the shopping experience.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: virtual,
    source_code_link: "https://github.com/AjayKumarSaini8/virtual-dressing-room.git",
  },
  {
    name: "Amazon Clone",
    description:
      "Provides a eCommerce marketplace via which the users can communicate buy products.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/AjayKumarSaini8/amazon-clone.git",
  },
];

export { services, projects };