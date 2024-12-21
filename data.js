export const bio = [
  "Fresh graduate developer with expertise in both frontend and backend development. Skilled in Angular, HTML, CSS, and JavaScript for crafting seamless user experiences, and proficient in .NET for robust backend solutions. Experienced in using C#, ASP.NET Core, SQL Server, and Entity Framework to build scalable, data-driven web applications. Eager to enhance user experiences, collaborate with dynamic teams, and grow through innovative projects, continuous learning, and creative problem-solving.",
];

export const skills = [
  {
    title: "Languages",
    skillName: "JavaScript, TypeScript, C#",
    color: "1",
    percentage: "70",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "Angular, .NET",
    color: "6",
    percentage: "60",
  },
  {
    title: "Design",
    skillName: "HTML , CSS3 , Bootstrap",
    color: "4",
    percentage: "90",
  },
  {
    title: "Version Control",
    skillName: "GitHub",
    color: "7",
    percentage: "80",
  },
  {
    title: "Tools",
    skillName: "Debugging, Chrome DevTools",
    color: "3",
    percentage: "80",
  },
  //   {
  //     title: "Analytics",
  //     skillName: "CleverTap, Countly",
  //     color: "5",
  //     percentage: "50",
  //   },
  //   {
  //     title: "IDE",
  //     skillName: "VS Code",
  //     color: "6",
  //     percentage: "70",
  //   },
];

export const projects = {
  webProjects: [
    {
      projectName: "Car Aveneu",
      image: "images/car-aveneu.png",
      summary:
        "Developed a Car Dealership Frontend Website using Angular as a graduation project from DEPI.",
      preview: "https://mohamed-rabee3.github.io/Car_Aveneu_Website/home",
      techStack: ["Angular", "PrimeNG", "Bootstrap", "JavaScript", "PrimeFlex"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "E-Commerce Backend",
      image: "images/ecommerce.png",
      summary:
        "Full E-commerce Backend using .Net and SQL Server and it was graduation project for career180",
      preview: "https://github.com/taghreedrabee/E-Commerce",
      techStack: [".NET", "Stripe", "JWT", "SQL Server"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Internship Backend (.Net) BootCamp, Learn It & Career 180",
    duration: "OCT 2024 - DEC 2024",
    subtitle: "SDE Intern",
    details: [
      `Proficiency in C# programming, Object-Oriented Programming (OOP) principles, clean coding 
practices, and SOLID principles. `,
      `Mastering data structures, database management with SQL Server and NoSQL, and API 
development using ASP.NET Core. `,
      `Developing API projects with CRUD operations and using the Entity Framework for seamless 
database connections. `,
    ],
    tags: [
      "C#",
      "OOP",
      "Data Structure",
      "Clean Code",
      "Solid Principles",
      "Exception Handling",
      "SQL Server",
      "NoSQl",
      "ASP.NET CORE",
      "JSON and API",
    ],
    icon: "",
  },
  {
    title: "Frontend Web Development, DEPI",
    duration: "May 2024 - Nov 2024",
    subtitle: "Frontend Developer",
    details: [
      "gaining various technical skills including, UI/UX, HTML, CSS, JavaScript, an introduction to TypeScript and Angular.",
      "I worked on various projects related to JavaScript and Angular, which included the crafting of the Angular project with my team",
    ],
    tags: [
      "JavaScript",
      "Angular",
      "Bootstrap",
      "Typescript",
      "Html",
      "CSS3",
      "PrimeNg",
      "PrimeFlex",
    ],
    icon: "",
  },
];

export const education = [
  {
    title: "IT, Computer Science and AI, Helwan University",
    duration: "2020 - 2024",
    subtitle: "Helwan University",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Software Engineering",
      "Image Processing",
      "Artificial intelligence(AI)",
      "Graphic Design",
      "Computer Archeticture",
      "Microprocessor",
    ],
    icon: "graduation-cap",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
      {
        text: "Github",
        link: "https://github.com/taghreedrabee",
      },
      {
        text: "Linkedin",
        link: "https://linkedin.com/in/taghreedrabee",
      },
    ],
  },
  // {
  //   label: "Resources",
  //   data: [
  //     {
  //       text: "Enable Dark/Light Mode",
  //       func: "enableDarkMode()",
  //     },
  //     {
  //       text: "Print this page",
  //       func: "window.print()",
  //     },
  //     {
  //       text: "Clone this page",
  //       link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
  //     },
  //   ],
  // },
  // {
  //   label: "Links",
  //   data: [
  //     {
  //       text: "Linkedin",
  //       link: "https://linkedin.com/in/taghreedrabee",
  //     },
  //     //   {
  //     //     text: "Twitter",
  //     //     link: "https://twitter.com/thesigmakid",
  //     //   },
  //     // {
  //     //   text: "Buy me a coffee",
  //     //   link: "https://www.buymeacoffee.com/r194dME8y",
  //     // },
  //     {
  //       text: "Github",
  //       link: "https://github.com/taghreedrabee",
  //     },
  //   ],
  // },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Taghreed Rabee.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
