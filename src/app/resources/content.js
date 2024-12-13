import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Bemnet",
  lastName: "Aschalew",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack developer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Nairobi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Bemnet-13/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bemnet-aschalew-9868a2295",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:bemnetaschalewwodaj@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack developer and Designer</>,
  subline: <>I am Bemnet. A software engineer and enthusiastic designer.</>,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Software Engineering student at Addis Ababa University,
        passionate about contributing to impactful digital projects that benefit
        our society. Through my studies, I have gained valuable experience and
        skills, but I am eager to further equip myself with industry-standard
        knowledge and expertise. I am on a mission advance my knowledge and my
        skills to craft AI powered projects and solutions with far reaching
        positive impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Projects",
    experiences: [
      {
        company:
          "Memariya Education Solutions - Comprehensive Personalized Learning Platform",
        timeframe: "SEPTEMBER 2023 - JANUARY 2024",
        role: "Project Manager, Designer, Frontend Developer",
        achievements: [
          <>
            Managed the entire SDLC lifecycle, from requirements gathering,
            documentation to deployment, ensuring seamless project delivery.
          </>,
          <>
            Designed intuitive UI/UX interfaces using Figma and led frontend
            development efforts with TailwindCSS and Vanilla JavaScript, driving
            user-centric solutions and maintaining high development standards.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/memariya_logo.png",
            alt: "Once UI Project",
            width: 17,
            height: 9,
          },
        ],
      },
      {
        company:
          "Fantasy Ethiopia -  Sport centered fantasy application with interactive gameplay",
        timeframe: "FEBRUARY 2024 - JULY 2024",
        role: "Flutter Developer, Frontend Developer, UI/UX Designer",
        achievements: [
          <>
            Developed brand identity, designed brand logo and UI/UX for the web
            page.
          </>,
          <>
            REST API frontend integration and using TailwindCSS for seamless user
            experience Lead Mobile developer using Flutter BLoC, Riverpod as
            State management using the Domain Driven Design(DDD) architecture.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/fantasy_logo.png",
            alt: "Once UI Project",
            width: 17,
            height: 9,
          },
        ],
      },
      {
        company:
          "NoteSafe - A collaborative note taking and task management platform",
        timeframe: "SEPTEMBER 2024 - OCTOBER 2024  ",
        role: "Fullstack developer, UI/UX designer",
        achievements: [
          <>
            Designed responsive UI/UX with Figma, including logo creation and
            brand identity.
          </>,
          <>
            Developed full-stack applications using the MERN stack, adhering to
            the MVC architecture for scalable and maintainable solutions.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/notesafe_logo.png",
            alt: "Once UI Project",
            width: 17,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Addis Ababa University",
        description: <>Currently studying Software engineering(AI Stream).</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma and create Comprehensive UI/UX design.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/figma_logo.svg",
            alt: "Project image",
            width: 10,
            height: 10,
          },
        ],
      },
      {
        title: "React.js",
        description: <>Building beautiful apps with React.js.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/react_logo.svg",
            alt: "Project image",
            width: 10,
            height: 10,
          },
        ],
      },
      {
        title: "Nest.js",
        description: (
          <>
            Building scalable and testable backend application with TypeScript
            and Nest.js
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/typescript_logo.svg",
            alt: "Project image",
            width: 10,
            height: 10,
          },
        ],
      },
    ],
  },
};




export { person, social, home, about };
