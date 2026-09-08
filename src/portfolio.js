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
  username: "Augusto Freire",
  title: "Hey, I'm Augusto!",
  subTitle: emoji(
    "Full-Stack Developer building scalable web applications and automation solutions using C#/.NET, React, JavaScript, Python, Node.js, and SQL."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button. this link doesn't need to be replaced to get your resume in the site. Follow the README instructions for that.
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aumfreire",
  linkedin: "https://www.linkedin.com/in/augusto-mfreire/",
  gmail: "augusto.mfreire@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL-STACK DEVELOPER • AUTOMATION • CLOUD SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build scalable web applications using C#/.NET, React, JavaScript, Node.js, and SQL"
    ),
    emoji(
      "⚡ Design automation workflows with Power Automate, PowerShell, AI-assisted tools, and ServiceNow"
    ),
    emoji(
      "⚡ Translate business needs into reliable software, technical solutions, and process improvements"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "PowerShell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Microsoft 365",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/byuMedallionNavy.png"),
      logoPosition: "center", // Optional: center, top, bottom, left, right, or specific like "center top"
      logoScale: 1.2, // Optional: zoom factor for logo within the FIXED circle (e.g., 0.8 = zoomed out, 1.5 = zoomed in, circle size never changes)
      subHeader:
        "Bachelor of Science, Information Systems | Software Development Emphasis | STEM-Designated Technical Program",
      duration: "Apr 2027",
      desc: "Brigham Young University - Marriott School of Business, Provo, UT",
      descBullets: [
        "GPA: 3.9",
        "Member of the Association for Information Systems and BYU Developers Club",
        "Relevant Courses: C#/.NET Programming, Database Systems (SQL), Enterprise Web Development (React/ASP.NET), Data Communications, Machine Learning (Python), Information Security"
      ]
    },
    {
      schoolName: "Ensign College",
      logo: require("./assets/images/ensignCollege.png"),
      logoPosition: "center",
      logoScale: 1,
      subHeader: "Associate of Science, Software Engineering",
      duration: "Apr 2024",
      desc: "Ensign College, Salt Lake City, UT",
      descBullets: [
        "GPA: 4.00",
        "Relevant Courses: Intro to Computer Programming (Java), Object-Oriented Programming, Web Development (JavaScript), Mobile Platform Development (Dart)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Automation & AI",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Product & Process Manager Intern",
      company: "The Church of Jesus Christ of Latter-day Saints",
      companylogo: require("./assets/images/churchofJC.png"),
      date: "Jul 2026 – Present",
      desc: "The Church of Jesus Christ of Latter-day Saints, Riverton, UT",
      descBullets: [
        "Cut record processing time 60%+ by developing AI and Power Automate workflows for personalized communications",
        "Developed PowerShell and ServiceNow automations to streamline enterprise IT workflows and operational processes",
        "Supported software lifecycle processes across application changes, deployments, testing, and production operations"
      ]
    },
    {
      role: "Information Systems Technician",
      company: "Provo City",
      companylogo: require("./assets/images/provocity.png"),
      date: "Jan 2026 – Jul 2026",
      desc: "Provo City, Provo, UT",
      descBullets: [
        "Built PowerShell interface for 5 technicians, automating onboarding, password resets, and user lookups",
        "Resolved Microsoft 365, software, hardware, and network issues supporting technology across city departments"
      ]
    },
    {
      role: "IT Support Specialist II",
      company: "Trucordia",
      companylogo: require("./assets/images/trucordia.png"),
      date: "Feb 2025 – Sep 2025",
      desc: "Trucordia, Lindon, UT",
      descBullets: [
        "Reduced manual workflows 80% by developing AI and PowerShell automation, saving labor costs",
        "Accelerated access provisioning 40% using Microsoft 365 and Entra ID, reducing ticket volume 30%",
        "Automated device onboarding, reducing setup time 94% while improving configuration accuracy"
      ]
    },
    {
      role: "Global Support Tech Generalist",
      company: "The Church of Jesus Christ of Latter-day Saints",
      companylogo: require("./assets/images/churchofJC.png"),
      date: "Sep 2021 – Feb 2025",
      desc: "The Church of Jesus Christ of Latter-day Saints, Salt Lake City, UT",
      descBullets: [
        "Managed 300+ monthly ServiceNow tickets, reducing response time 25% while maintaining a 92% satisfaction rating",
        "Resolved Windows/macOS issues for 50+ users weekly, minimizing downtime across global operations",
        "Maintained network connectivity, provisioned VPNs, and installed printers for 100+ users, reducing service disruptions"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Main Projects / Startups",
  subtitle: "SOME PERSONAL AND SCHOOL PROJECTS",
  projects: [], // Add future projects back here when ready
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [], // Add future achievements back here when ready
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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

  display: true // Set false to hide this section, defaults to true
};

// Update this section even if you have github linked, in case the linking fails
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "(385) 354-8501",
  email_address: "augusto.mfreire@gmail.com"
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
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
