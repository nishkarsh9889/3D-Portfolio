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
    },
    {
        name: "Todo App",
        description: "A simple todo app built with React.js and Tailwind CSS, featuring task management with add, delete, and mark as completed functionality. It uses local storage to persist tasks even after a page reload, ensuring data stays intact unless deleted.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
        ],
        image: todo,
        source_code_link: "https://github.com/nishkarsh9889/Todo-App",
        project_live_link: "https://todo-app-singhchiku9889-gmailcoms-projects.vercel.app/"
    }
];

export { services, technologies, testimonials, projects };