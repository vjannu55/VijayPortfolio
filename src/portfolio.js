/*
  File: portfolio.js
  Student Name: Vijay Jannu
  Student ID: 301-413-452
  Date: September 25, 2025
  Description: Contains all portfolio data such as greeting, skills, 
               education, projects, achievements, contact info, etc.
*/

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// ==========================
// Splash Screen
// ==========================

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};
// ==========================
// Summary And Greeting Section
// ==========================

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vijay Jannu",
  title: "Hi all, I'm Vijay",
  subTitle: emoji(
    "Software Development Engineer in Test | Automation Specialist | Mobile App Developer"
  ),
  resumeLink: "/resume.pdf", 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// ==========================
// Social Media Links
// ==========================

const socialMediaLinks = {
  github: "https://github.com/vjannu55",
  linkedin: "https://www.linkedin.com/in/vijay-j-94222413a/",
  gmail: "Vijay.automationminds@gmail.com",
  
  
  display: true // Set true to display this section, defaults to false
};

// ==========================
// Skills Section
// ==========================


const skillsSection = {
  title: "What I Do",
  subTitle:
    "EXPERIENCED SDET & AUTOMATION ENGINEER | SPECIALIZED IN TEST AUTOMATION, API TESTING, AND MOBILE APP DEVELOPMENT",
  skills: [
    emoji(
      "⚡ Design and implement robust Automation Frameworks using Selenium, WebDriverIO, TestNG, and BDD (Cucumber)"
    ),
    emoji(
      "⚡ Develop and execute test strategies for Web, Mobile (iOS/Android), and API testing using Postman and RestAssured"
    ),
    emoji(
      "⚡ Build and maintain CI/CD pipelines with Jenkins and GitLab for continuous testing and faster delivery"
    ),
    emoji(
      "⚡ Strong expertise in databases (SQL, MySQL, MongoDB, GraphQL) and backend testing"
    ),
    emoji(
      "⚡ Skilled in cloud platforms (AWS & Azure) and integrating scalable testing solutions"
    )
  ],

  /* Icons: https://fontawesome.com/icons */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-vial"
    },
    {
      skillName: "API Testing",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-bitbucket"
    },
    {
      skillName: "SQL / Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Mobile Testing",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    }
  ],
  display: true // Show this section
};


// ==========================
// Education Section
// ==========================


const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centennial College – Progress Campus, Scarborough, Canada",
      logo: require("./assets/images/centennialLogo.png"), // replace with your logo/image
      subHeader: "Post Graduate Diploma in Project Management",
      duration: "May 2024 - Aug 2025",
      desc: "Focused on project planning, management methodologies, and IT project delivery best practices.",
      descBullets: [
        "Applied Agile project management principles in hands-on projects",
        "Developed project documentation, timelines, and milestone tracking"
      ]
    },
    {
      schoolName: "Centennial College – Progress Campus, Scarborough, Canada",
      logo: require("./assets/images/centennialLogo.png"), // same logo, or use different image
      subHeader: "Post Graduate Diploma in Mobile Application Development",
      duration: "Nov 2023 - April 2024",
      desc: "Learned mobile app development using Flutter and Swift for iOS and Android platforms.",
      descBullets: [
        "Built Clinical Management System Mobile App using Flutter",
        "Developed Weather App and BMI Calculator App using Swift and Flutter"
      ]
    },
    {
      schoolName: "University of New England, Sydney, Australia",
      logo: require("./assets/images/uneLogo.png"),
      subHeader: "Master’s in Information Technology (Equivalent to MSc in Computer Science, Canada)",
      duration: "Completed prior to 2023",
      desc: "Gained comprehensive IT knowledge including software development, testing, and project management.",
      descBullets: []
    },
    {
      schoolName: "Osmania University, Hyderabad, India",
      logo: require("./assets/images/osmaniaLogo.png"),
      subHeader: "Bachelor of Computer Applications (BCA – Equivalent to 4-year Bachelor's in Computer Science, Canada)",
      duration: "Completed prior to 2013",
      desc: "Acquired foundational knowledge in programming, databases, and software development.",
      descBullets: []
    }
  ]
};

// ==========================
//  top 3 proficient stacks/tech experience
// ==========================
const techStack = {
  viewSkillBars: true, // Set true to show Proficiency Section
  experience: [
    {
      Stack: "Test Automation & QA Engineering",
      progressPercentage: "95%" // Expertise in Selenium, WebDriverIO, TestNG, BDD, API testing
    },
    {
      Stack: "Mobile & Web Development",
      progressPercentage: "80%" // Experience with Flutter, Swift, ReactJS, NodeJS
    },
    {
      Stack: "Cloud & Databases",
      progressPercentage: "75%" // AWS, Azure, SQL, MySQL, MongoDB, GraphQL
    }
  ],
  displayCodersrank: false // Keep false unless you want to display codersrank badges
};

// ==========================
// Work experience section
// ==========================
const workExperiences = {
  display: true, // Set true to show workExperiences Section
  experience: [
    {
      role: "Sr Test Engineer",
      company: "Tech Mahindra – Toronto, ON",
      companylogo: require("./assets/images/techMahindraLogo.png"), // replace with actual logo
      date: "June 2021 – Present",
      desc: "Delivered high-quality software for Bell Canada and Scotiabank projects by developing and maintaining automated test scripts and frameworks.",
      descBullets: [
        "Developed automated test scripts using Selenium, WebDriverIO, TestNG, and BDD framework (Cucumber), reducing manual effort by 50%",
        "Executed API testing using Postman and RestAssured, ensuring robust backend functionality",
        "Integrated automated tests into CI/CD pipelines using Jenkins and GitLab",
        "Developed test cases and scripts for Functional, Regression, and Performance Testing across web and mobile platforms",
        "Created and managed test data for various environments, including API, UAT, and performance testing"
      ]
    },
    {
      role: "Sr Automation Tester",
      company: "Synergy Tech – Toronto, ON",
      companylogo: require("./assets/images/synergyTechLogo.png"),
      date: "May 2019 – June 2021",
      desc: "Performed end-to-end testing including manual and automation for multiple enterprise projects, enhancing QA efficiency and product quality.",
      descBullets: [
        "Created 70% manual and 30% automated test cases for functional/non-functional requirements",
        "Developed Page Object Model with Page Factory framework for multiple modules",
        "Generated test reports, executed debugging sessions, and participated in review meetings",
        "Developed reusable functions and function libraries for different components across projects"
      ]
    },
    {
      role: "QA Analyst",
      company: "MONT IT Consulting Firm – Brampton, ON",
      companylogo: require("./assets/images/montLogo.png"),
      date: "Jan 2016 – Apr 2019",
      desc: "Conducted comprehensive QA testing, automation, and software quality analysis for clients across multiple domains.",
      descBullets: [
        "Created test plans, test cases, and implemented automation, performance, and regression testing",
        "Designed and developed user interfaces and automation frameworks using Selenium WebDriver with Java",
        "Worked with stakeholders to define and execute RPA programs and improve software quality",
        "Developed SQL scripts and APIs to access data from vendor-supplied DB schemas"
      ]
    },
    {
      role: "Software Tester",
      company: "HSBC Software Development Pvt. Ltd – Hyderabad, India",
      companylogo: require("./assets/images/hsbcLogo.png"),
      date: "May 2013 – Nov 2015",
      desc: "Performed software testing, debugging, and application maintenance for business-critical banking software.",
      descBullets: [
        "Analyzed requirements and developed test cases to ensure functionality and performance",
        "Provided code maintenance and system upgrades to improve software quality",
        "Implemented programming methodologies and best practices for enterprise applications"
      ]
    }
  ]
};


// ==========================
//Open source section
// ==========================
const openSource = {
  showGithubProfile: true, // Show GitHub profile
  display: true // Show this section
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "KEY PROJECTS FROM PROFESSIONAL AND ACADEMIC EXPERIENCE",
  projects: [
    {
      image: require("./assets/images/bellCanadaLogo.png"), // Replace with actual image
      projectName: "Bell Media Digital Production (Crave Expansion / TSN 5G View)",
      projectDesc: "Developed and maintained automated test scripts using Selenium and TestNG, improving test coverage and reducing manual testing effort by 50%. Conducted API testing using Postman and RestAssured and integrated automated tests into CI/CD pipelines.",
      footerLink: [
        {
          name: "View Project Details",
          url: "#" // Optional: link to project documentation or repo if available
        }
      ]
    },
    {
      image: require("./assets/images/scotiabankLogo.png"),
      projectName: "Scotiabank Digital Transformation (Online Banking / iTrade / Active Trader)",
      projectDesc: "Executed end-to-end QA processes including functional, regression, and API testing. Built automation scripts, enhanced CI/CD integration, and collaborated with cross-functional teams for quality delivery.",
      footerLink: [
        {
          name: "View Project Details",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/clinicalApp.png"),
      projectName: "Clinical Management System Mobile App",
      projectDesc: "Developed a healthcare management mobile app using Flutter, integrating secure database solutions, REST APIs, and user authentication for patient data management.",
      footerLink: [
        {
          name: "View App",
          url: "#" // Optional: link to live demo or repo
        }
      ]
    },
    {
      image: require("./assets/images/weatherApp.png"),
      projectName: "Weather Mobile Application",
      projectDesc: "Developed a weather mobile application using Swift, implementing real-time data retrieval, intuitive UI/UX, and secure API integration.",
      footerLink: [
        {
          name: "View App",
          url: "#"
        }
      ]
    }
  ],
  display: true // Show this section
};
// ==========================
// Achievement Section
// Include certificates
// ==========================

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Professional Certifications, Training, and Recognitions in Software Testing, Automation, and Cloud",

  achievementsCards: [
    {
      title: "IBM Certified Specialist – FileNet & BPM",
      subtitle:
        "IBM Certified Specialist FileNet Enterprise Content Manager v5.1 and Business Process Management v5.1.",
      image: require("./assets/images/ibmLogo.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.ibm.com/certify/certificate/XYZ" // Replace with actual link
        }
      ]
    },
    {
      title: "Vskills Certified Selenium Professional",
      subtitle:
        "Certified in UFT Automation Functional Testing and Selenium automation frameworks.",
      image: require("./assets/images/vskillsLogo.png"),
      imageAlt: "Vskills Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.vskills.in/certification/selenium" // Replace with actual link
        }
      ]
    },
    {
      title: "AWS Cloud Practitioner Training",
      subtitle:
        "Completed corporate training in AWS Cloud Practitioner Essentials.",
      image: require("./assets/images/awsLogo.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Training Details",
          url: "https://aws.amazon.com/training/" // Replace with actual link if available
        }
      ]
    },
    {
      title: "Centennial College Mobile App Projects",
      subtitle:
        "Developed Clinical Management System, Weather App, and BMI Calculator Mobile Applications as part of Post Graduate Diploma in Mobile App Development.",
      image: require("./assets/images/centennialLogo.png"),
      imageAlt: "Centennial College Logo",
      footerLink: [
        {
          name: "View Projects",
          url: "#" // Optional: link to project repo or demo
        }
      ]
    }
  ],
  display: true // Show this section
};

// ==========================
// Blogs Section
// ==========================
const blogSection = {
  title: "Blogs & Articles",
  subtitle:
    "Sharing my knowledge and experience in Software Testing, Automation, Mobile & Web Development.",
  displayMediumBlogs: false, // Set false if not fetching Medium blogs
  blogs: [
    {
      url: "https://github.com/vjannu55", // Link to your GitHub repositories / notes
      title: "Automation & QA Scripts Repository",
      description:
        "A collection of my automation testing scripts, frameworks, and sample projects for Selenium, WebDriverIO, and API testing."
    },
    {
      url: "https://www.linkedin.com/in/vijay-j-94222413a/", // Link to LinkedIn posts
      title: "Technical Insights on Software Testing & Mobile Development",
      description:
        "Sharing technical tips, tutorials, and insights from my experience in QA, automation, and mobile app development."
    }
  ],
  display: true // Set true to show this section
};


// ==========================
// Resume Section
// ==========================

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};
// ==========================
// Contact Section
// ==========================

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-647-879-2078",
  email_address: "Vijay.automationminds@gmail.com",
  address: "Toronto, M3C1C7, ON, Canada"
};
// ==========================
// Twitter Section
// ==========================

const twitterDetails = {
  userName: "vjannu55", // Replace with your Twitter handle without '@' if you have one
  display: false // Set true to display this section, false if not using
};

// Hireable Status
const isHireable = true; // Set true if you are looking for opportunities


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

  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
