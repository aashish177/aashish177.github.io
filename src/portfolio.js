/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aashish Maharjan",
  title: "Hello, I'm Aashish",
  subTitle: emoji(
    "A dedicated Software Developer having an experience of building cloud native web applications, and passionate about building impactful solutions."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1S0nN6C5uuY6LC4CHZtffKh-ynNM_clcV/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aashish177",
  linkedin: "https://www.linkedin.com/in/aashishmaharjan1/",
  gmail: "aashishmaharjan177@gmail.com",
  facebook: "https://www.facebook.com/Aashish.mah7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "BACKEND ENGINEER SPECIALIZING IN SCALABLE CLOUD SOLUTIONS",
  skills: [
    emoji(
      "⚡ Backend Developer with 1.5+ years building production APIs and microservices using Spring Boot, FastAPI, and AWS cloud services"
    ),
    emoji("⚡ Cloud & DevOps Focused - experienced with containerization, CI/CD pipelines, and reducing deployment times through automation"),
    emoji(
      "⚡  Currently pursuing Master's in Computer Science while exploring AI agents, distributed systems, and cutting-edge technologies"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Texas at Arlington",
      logo: require("./assets/images/UTA_logomark.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2025 - May 2027 (Expected)",
      desc: "Receipent of Lonestar Excellence Scholarship.",
      descBullets: [
        "Relevant Courses: Distributed Systems, Design and Analysis of Algorithms, Data Analysis and Modeling Techniques"
      ]
    },
    {
      schoolName: "University of Texas at Arlington",
      logo: require("./assets/images/UTA_logomark.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2019 - May 2023",
      desc: "Earned cum laude honors in Computer Science.",
      descBullets: ["Relevant Courses: Artificial Intelligence, Data Structures, Algorithms, Computer Organization, Computer Networks, Operating Systems"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "CI/CD and Deployment",
      progressPercentage: "83%"
    },
    {
      Stack: "Data Management",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Developer I",
      company: "Mouser Electronics",
      companylogo: require("./assets/images/mouserlogo.avif"),
      date: "July 2023 – January 2025",
      desc: "Developed and maintained REST APIs and internal web apps with Java and Spring Boot.",
      descBullets: [
        "Built a FastAPI microservice to integrate external APIs, reducing client-side calls by 40%.",
        "Refactored legacy monolith code to boost maintainability and scalability."
      ]
    },
    {
      role: "Student Assistant - Technical Analyst",
      company: "UTA",
      companylogo: require("./assets/images/UTA_logomark.png"),
      date: "August 2022 – April 2023",
      desc: "Enhanced dashboard and onboarding tools with new features and API integrations using Flask, JavaScript, and MySQL; collaborated on testing and version control."
    },
    {
      role: "Software Development Intern",
      company: "Sellmark Corporation",
      companylogo: require("./assets/images/sellmark.jpeg"),
      date: "June 2022 – August 2022",
      desc: "Built Django features for warehouse task logging on mobile/tablet, updated PostgreSQL, and created tests with pytest, and Postman."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/IMG_0015.JPG"),
      projectName: "Agentic Data Analysis Platform",
      projectDesc: "AI-powered data analysis platform integrating LangGraph agents",
    },
    {
      image: require("./assets/images/IMG_0017.JPG"),
      projectName: "Spring Boot ERP System",
      projectDesc: "Spring Boot microservices application with API Gateway and containerization using Docker",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/aashish177/springboot-microservices"
        }
      ]
    },
    {
      image: require("./assets/images/scrnsht.png"),
      projectName: "AI-Powered Code Commenter",
      projectDesc: "A lightweight, extensible tool that auto-generates meaningful inline comments and docstrings for Python code using OpenAI’s GPT-4 Turbo",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/aashish177/code-commenter"
        }
      ]
    },
    {
      image: require("./assets/images/IMG_0016.JPG"),
      projectName: "Social Media Application",
      projectDesc: "Spring Boot microservices application with API Gateway and containerization using Docker",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/aashish177/social-media-app"
        }
      ]
    },
    {
      image: require("./assets/images/IMG_0014.PNG"),
      projectName: "gRPC-based cross-language calculator",
      projectDesc: "A distributed calculator system demonstrating cross-language gRPC communication using protocol buffers.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/aashish177/grpc-cross-language-calculator"
        }
      ]
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "AWS Certified Developer - Associate",
      subtitle:
        "Demonstrated expertise in building applications with AWS APIs, CLI, and SDKs, leveraging containers, and deploying via CI/CD pipelines.",
      image: require("./assets/images/aws-certified-developer-associate.png"),
      imageAlt: "AWS Certified Developer - Associate Badge",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/4d8257f0-bfae-4a1d-a90d-fe4cbe66f951"
        },
        {
          name: "Letter",
          url: "https://drive.google.com/file/d/16Jy2CIJv9o1_youPywPJEH0AIzN0uw2u/view?usp=sharing"
        }
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "737 (346)-1058",
  email_address: "aashishmah177@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
