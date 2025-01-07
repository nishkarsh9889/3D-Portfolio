import { color } from "framer-motion";
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
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    cakebake,
    gemini,
    jobit,
    tripguide,
    java,
    springBoot,
    mysql,
    todo,
    where2stay,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Spring Boot Developer",
        icon: springBoot,
    },
    {
        title: "Java Developer",
        icon: java,
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
        name: "Java",
        icon: java,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Spring Boot",
        icon: springBoot,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "MySql",
        icon: mysql,
    },
    {
        name: "Git",
        icon: git,
    },
];

const testimonials = [
    {
        testimonial:
            "Working with Nishkarsh is a pleasure. His expertise in Spring Boot and React makes him a standout developer.",
        name: "Rohit Singh",
        designation: "Web Developer",
        company: "RentDuniya",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I worked with him on a group project, and his contributions to both frontend and backend development really helped us succeed.",
        name: "Kartik Sundriyal",
        designation: "Student",
        company: "KRMU",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "He is incredibly consistent in his work. Whether it's debugging a React app or fine-tuning the Spring Boot backend,",
        name: "Utkarsh Singh",
        designation: "SDE",
        company: "8848 Digital",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Where-2-Stay",
        description: "Explore the fully functional hotel booking application. Search for hotels, manage bookings, and experience a seamless Stripe-integrated payment process.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "spring-boot",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "blue-text-gradient"
            },
            {
                name: "stripe",
                color: "pink-text-gradient"
            }
        ],
        image: where2stay,
        source_code_link: "https://github.com/nishkarsh9889/Where2Stay",
        project_live_link: "https://where-2-stay.vercel.app/"
    },
    {
        name: "Cake Bake",
        description:
            "Web-based platform that allows users to browse, filter, and order products based on categories. Users can register or log in using the built-in authentication system or via Google OAuth2.",
        tags: [
            {
                name: "bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "spring-boot",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: cakebake,
        source_code_link: "https://github.com/nishkarsh9889/CakeBake",
        project_live_link: "https://cakebake-production.up.railway.app/"
    },
    {
        name: "Gemini Clone",
        description:
            "A web application replicating the Google Gemini interface and functionality. Integrated the Gemini API to fetch and display data, providing a dynamic and responsive user experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "context api",
                color: "green-text-gradient",
            },
            {
                name: "google api",
                color: "pink-text-gradient",
            },
        ],
        image: gemini,
        source_code_link: "https://github.com/nishkarsh9889/Gemini-Clone",
        project_live_link: "https://gemini-clone-9fygxjq1v-singhchiku9889-gmailcoms-projects.vercel.app/"
    }
];

export { services, technologies, testimonials, projects };