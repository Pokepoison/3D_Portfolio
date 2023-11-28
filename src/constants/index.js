import { WireframeMaterialShaders } from "@react-three/drei/materials/WireframeMaterial";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
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
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    weather,
    workday,
    pokedex,
    notes,
    blog,
    saver,
    aifireworks,
    
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Full stack Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full stack Developer",
      company_name: "University, Berkeley, CA",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2023 - Nov 2023",
      points: [
        "Developing and maintaining web applications using JavaScript, React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers and web developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was going to be nearly impossible to make a website generate beautiful AI pictures, but Jordan proved us wrong.",
      name: "Benjamine Scobar",
      designation: "Front-end Developer",
      company: "University, Berkeley, CA",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their team members' success like Jordan does.",
      name: "Lorenzo Oliver",
      designation: "Full-stack Developer",
      company: "University, Berkeley, CA",
      //image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "When working with Jordan, his passion for learning and perservence makes Jordan a wonderful web developer in the feild!",
      name: "Eli Raiskin-Wood",
      designation: "TA, Full-stack Developer",
      company: "University, Berkeley, CA",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pokemon Master Library",
      description:
        "Web-based platform that allows users to search pokemon by id or name. Users can learn about the different types and abilities from the pokemon selected. There is also a helpful pokemon strenth and weakness chart. Prepare for trouble from Team Rocket!!",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "server-side APIs",
          color: "green-text-gradient",
        },
        {
          name: "Bulma",
          color: "pink-text-gradient",
        },
      ],
      image: pokedex,
      source_code_link: "https://github.com/Pokepoison/Pokemon-Master-Library",
    },
    {
      name: "Track Saver",
      description:
        "Track Saver is a web application designed to help users track their income, expenses, and savings, making it easier to manage their financial goals.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Handlebars.js",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: saver,
      source_code_link: "https://github.com/Pokepoison/Track_Saver",
    },
    {
      name: "CMS blog",
      description:
        "web application that allows developers to publish articles, blog posts, and their thoughts and opinions.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "MVC",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/Pokepoison/CMS-blog-app",
    },
    {
      name: "Weather Wizard",
      description:
        "The Weather Wizard is to find out the potential weather for a city. The webpage displays 5 days of weather predictions.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Web APIs",
          color: "green-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/Pokepoison/Weather-Wizard",
    },
    {
      name: "Time Management",
      description:
        "Time Management, is a work day scheduler designed to help users track their events and goals throughout the day.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Day.js",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: workday,
      source_code_link: "https://github.com/Pokepoison/Time-Management",
    },
    {
      name: "AI Imaginations",
      description:
        "AI Imaginations is an application that allows the user to create and save AI generated images. Not only can users create their own files but they can also share with other users.",
      tags: [
        {
          name: "M.E.R.N.",
          color: "blue-text-gradient",
        },
        // {
        //   name: "openai",
        //   color: "green-text-gradient",
        // },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: aifireworks,
      source_code_link: "https://github.com/Pokepoison/AI_Imaginations",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  