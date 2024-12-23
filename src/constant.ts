export const myData = {
  fullname: "Ckeanu Richer Locson",
  links: {
    github: "https://github.com/ckeanudev",
    linkedin: "https://www.linkedin.com/in/ckeanuuu/",
    facebook: "https://www.facebook.com/ckeanuuu/",
    instagram: "https://www.instagram.com/ckeanuuu/",
    steam: "https://steamcommunity.com/profiles/76561199565970232/",
  },
};

export const educationalAttainment = [
  {
    title: "Bachelor of Science in Computer Science",
    school: "Western Mindanao State University",
    schoolAddress: "Normal Road, Baliwasan, Zamboanga City, Philippines",
    awards: ["With a GWA of 1.83", "Service Award", "SE Lead at GDSC Crimsons"],
    year: "2019 - 2023",
  },
  {
    title: "Information and Communication Technology",
    school: "Southern City Colleges",
    schoolAddress: "Pilar Street, Zamboanga City, Philippines",
    awards: ["With Honor", "Proficiency in Mathematics"],
    year: "2017 - 2019",
  },
];

export const interests = [
  "👨🏻‍💻 Coding",
  "🎧 Listening to music",
  "🎨 Designing",
  "🎮 Video Games",
  "📚 Learning",
  "🐕 Animal Training",
  "🎥 Watching Movies",
  "✍ Drawing",
  "💪🏻 Exercising",
];

export const pastActivities = [
  {
    role: `Resource Speaker`,
    during: `Google Devfest 2023 Zamboanga Peninsula`,
    venue: `Convention Center, KCC Mall de Zamboanga, Zamboanga City, Philippines`,
    date: `December 9, 2023`,
  },
  {
    role: `Coding Bootcamp Student`,
    during: `Cross-Platform Coding Bootcamp using Flutter`,
    venue: `Terra Cotta Hotel, Brgy. Tumaga, Zamboanga City, Philippines`,
    date: `August 15 - September 02, 2022`,
  },
];

export const experiences = [
  {
    job: "Computer Programmer III (Software Quality Engineer)",
    company: "DSWD FO9 - Zamboanga Peninsula",
    companyAddress:
      "JLC Building, Don Alfaro Street, Tetuan Zamboanga City, Philippines, 7000, Zamboanga City, Philippines",
    descripion: `Responsible for ensuring the quality, reliability, and performance of the digital solutions 
    developed by the DSWD. This includes designing and executing comprehensive testing strategies, identifying,
     and addressing software issues, and collaborating with various stakeholders to enhance the overall 
     quality of the software. The Software Quality Engineer plays a critical role in the organization's 
     digital transformation efforts by ensuring that digital solutions meet the highest standards of quality,
      ultimately benefiting millions of Filipinos and fostering a more resilient and connected society.`,

    timeline: "July 2024 - Now",
    useTools: [
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "PHP",
      "Appsheet",
      "Wordpress",
      "Trello",
    ],
    startDate: "2024-07-01",
    endDate: null,
  },
  {
    job: "Frontend Developer",
    company: "AKA Software Inc.",
    companyAddress:
      "JLC Building, Don Alfaro Street, Tetuan Zamboanga City, Philippines, 7000, Zamboanga City, Philippines",
    descripion:
      "We deliver innovative, customized, and user-friendly website solutions that align perfectly with our client's goals and objectives while specializing in creating and developing websites for businesses across various industries.",

    timeline: "Sept 2023 - June 2024",
    useTools: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "SCSS",
      "TypeScript",
      "AG Grid",
      "Postman",
      "Prime React",
      "shadcn/ui",
      "Redux",
      "TanStack Query",
      "Visual Studio Code",
      "Figma",
      "Jira",
    ],
    startDate: "2023-09-04",
    endDate: "2024-06-28",
  },
];

export const projects = {
  featuredProjects: [
    {
      title: "Showjects",
      description:
        "A platform where you can showcase your personal software development projects where other developers can see, comment, review your source code and give feedback about your projects to help you get better.",
      img: `/images/FeaturedProjects/FP2.png`,
      githubLink: "https://github.com/ckeanudev/showjects",
      liveLink: "https://showjects.vercel.app/",
      tools: [
        "Next",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Clerk",
        "MongoDB",
        "Zod",
        "Uploadthing",
      ],
      progress: "Done",
    },
    {
      title: "AniBrary",
      description:
        "A website containing collections of anime provided by Jikan API an open-source PHP & REST API for the most active online anime + manga community and database. This website has all the information of your favorite anime and characters.",
      img: `/images/FeaturedProjects/FP1.png`,
      githubLink: "https://github.com/ckeanudev/anibrary",
      liveLink: "https://anibrary.vercel.app/",
      tools: [
        "Next",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "React Query",
        "API",
      ],
      progress: "Done",
    },
  ],
  bigProjects: [
    {
      title: "Apprabic: Mobile Application",
      purpose: "Thesis",
      tools: ["Unity 3D", "C#", "Adobe Illustrator"],
      description: `The mobile semi-game app helps children to learn Arabic letters and numbers, especially in writing, pronunciation, and arranging in order.`,
      completeDescription: `I built a full-stack mobile semi-game application for our thesis in our Computer Science course. The mobile semi-game app helps children to learn Arabic letters and numbers, especially in writing, pronunciation, and arranging in order. I took this opportunity to learn Unity 3D since I wanted to build a video game ever since I started programming.`,
      year: "2023",
    },
    {
      title: "Munta",
      purpose: "Coding Bootcamp",
      tools: ["Flutter", "Firebase"],
      description: `We built this mobile app for our Capstone Project in DICT Cross-Platform Coding Bootcamp Using Flutter. After presenting the Capstone Project, we've won the "Best in User Interface (UI) and Design", and "Most Creative awards". This project inspired by a mobile app called "Maxim".`,
      completeDescription: `We built this mobile app for our Capstone Project in DICT Cross-Platform Coding Bootcamp Using Flutter. My job here was to turn the design from Figma into a functional user interface while my team focused on the backend with Firebase. After presenting the Capstone Project, we've won the "Best in User Interface (UI) and Design", and "Most Creative awards". This project inspired by a mobile app called "Maxim".`,
      year: "2022",
    },
    {
      title: "Online Hotel Booking System",
      purpose: "Software Engineering",
      tools: ["React", "Node", "Express", "MySQL", "Axios", "Framer Motion"],
      description:
        "The system helps customers book or reserve a room online without going to the hotel.",
      completeDescription: `I built a full-stack web-based online booking system for a specific hotel here in Zamboanga City, Philippines. The system helps customers book or reserve a room online without going to the hotel. I took this opportunity to learn React, Node, Express, and MySQL to explore and improve my skills for my future career. I built this project to comply our Software Engineering project in my Computer Science course.`,
      year: "2022",
    },
  ],
  someProjects: [
    {
      name: "Easybank Landing Page",
      img: `/images/SomeProjects/sp14.png`,
      repoLink: "https://github.com/ckeanudev/frontendmentor-easybank",
      liveLink: "https://frontendmentor-easybank-six.vercel.app/",
      tools: ["Astro", "React", "Tailwind CSS"],
      featured: true,
    },
    {
      name: "Ecommerce Product",
      img: `/images/SomeProjects/sp13.png`,
      repoLink:
        "https://github.com/ckeanudev/frontend-mentor-ecommerce-product",
      liveLink: "https://frontend-mentor-ecommerce-product.vercel.app/",
      tools: ["React"],
      featured: false,
    },
    {
      name: "Results Summary Component",
      img: `/images/SomeProjects/sp12.png`,
      repoLink:
        "https://github.com/ckeanudev/frontend-mentor-results-summary-component",
      liveLink:
        "https://frontend-mentor-results-summary-component-two.vercel.app/",
      tools: ["HTML", "CSS"],
      featured: false,
    },
    {
      name: "Rock, Paper, Scissors Game",
      img: `/images/SomeProjects/sp11.png`,
      repoLink:
        "https://github.com/ckeanudev/frontend-mentor-rock-paper-scissors-game",
      liveLink: "https://ckeanu-frontend-mentor-game.netlify.app/",
      tools: ["React", "API"],
      featured: true,
    },
    {
      name: "REST Countries API",
      img: `/images/SomeProjects/sp10.png`,
      repoLink: "https://github.com/ckeanudev/dev-rest-country-api",
      liveLink: "https://ckeanu-country-api.netlify.app/",
      tools: ["React", "API"],
      featured: false,
    },
    {
      name: "Job Listings w/ Filtering",
      img: `/images/SomeProjects/sp9.png`,
      repoLink: "https://github.com/ckeanudev/frontend-mentor-job-listing",
      liveLink: "https://ckeanu-job-listing.netlify.app/",
      tools: ["React"],
      featured: false,
    },
    {
      name: "Free Games Site",
      img: `/images/SomeProjects/sp8.png`,
      repoLink: "https://github.com/ckeanudev/dev-free-games-list",
      liveLink: "https://ckeanu-free-games.netlify.app/",
      tools: ["React", "API"],
      featured: true,
    },
    {
      name: "Small Meal App",
      img: `/images/SomeProjects/sp7.png`,
      repoLink: "https://github.com/ckeanudev/dev-react-meal-app",
      liveLink: "https://ckeanu-meal-app.netlify.app/",
      tools: ["React", "API"],
      featured: false,
    },
    {
      name: "COVID-19 Case Tracker App",
      img: `/images/SomeProjects/sp6.png`,
      repoLink: "https://github.com/ckeanudev/dev-covid-19-tracker-system",
      liveLink: "https://ckeanu-covid-19-tracker-system.netlify.app/",
      tools: ["React", "API"],
      featured: true,
    },
    {
      name: "Cryptocurrency Price Tracker App",
      img: `/images/SomeProjects/sp5.png`,
      repoLink: "https://github.com/ckeanudev/dev-crypto-price-tracker",
      liveLink: "https://ckeanu-crypto-price-tracker.netlify.app/",
      tools: ["React", "API"],
      featured: false,
    },
    {
      name: "Huddle Landing Page",
      img: `/images/SomeProjects/sp4.png`,
      repoLink: "https://github.com/ckeanudev/Huddle-landing-page",
      liveLink: "https://huddle-landing-page-ckeanu.netlify.app/",
      tools: ["HTML", "CSS"],
      featured: false,
    },
    {
      name: "Project Tracking Intro Component",
      img: `/images/SomeProjects/sp3.png`,
      repoLink: "https://github.com/ckeanudev/Project-tracking-intro-component",
      liveLink: "https://project-tracking-intro-component-ckeanu.netlify.app/",
      tools: ["HTML", "CSS"],
      featured: false,
    },
    {
      name: "NFT Preview Card Component",
      img: `/images/SomeProjects/sp2.png`,
      repoLink: "https://github.com/ckeanudev/NFT-preview-card-component",
      liveLink: "https://nft-preview-card-component-ckeanu.netlify.app/",
      tools: ["HTML", "CSS"],
      featured: false,
    },
    {
      name: "Order Summary Card",
      img: `/images/SomeProjects/sp1.png`,
      repoLink: "https://github.com/ckeanudev/Order-summary-card",
      liveLink: "https://order-summary-card-ckeanu.netlify.app/",
      tools: ["HTML", "CSS"],
      featured: false,
    },
  ],
};
