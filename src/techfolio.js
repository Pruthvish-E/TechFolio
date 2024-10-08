import emoji from "react-easy-emoji";

/* 1. Main App */
/* 2. Social Networks */
/* 3. Banner Section  */
/* 4. About Section  */
/* 5. Skills Section */
/* 6. Open Source Section  */
/* 7. Projects Section */
/* 8. Experience Section */
/* 9. Contact Section */

/* wrap your text in emoji("") if you want to show emoji in your text

/*=====================
    1. Main App
    Desc: set what's in the document's head section
==========================*/

const app = {
  title: "Pruthvish's Portfolio",
  // Note : consider leaving null if you dont have any head icon
  icon: "logoPruthvish.png",
  description: "Tech leader and entrepreneur",
};

/*=====================
    2. Social Networks 
    Desc: your social network links
==========================*/

const socialNetworks = {
  //Note : if you dont need or have any social network just add null value
  github: "https://github.com/Pruthvish-E",
  linkden: "https://www.linkedin.com/in/pruthvishe/",
  facebook: null,
  instagram: null,
  twitter: null,
};

/*=====================
    3. Banner Section
    Desc: techfolio logo, greetings, summary and avatar,
==========================*/

const bannerSection = {
  username: "Pruthvish Eshwar",
  bannerHeading: "Tech visionary",
  bannerTagLine: emoji(
    "Empowering innovation, driving growth, and building the future with adaptive technology and AI-driven leadership."
  ),
  //Note:Simply add you avatar image in src/assets/imgs folder 
  //and add the name along with extention e.g xyz.png , abc.svg
  //Note : if you want to use default illustration instead of adding your avatar add defaultAvatar.svg
  bannerAvatar: "avatar.jpg",
  resumeLink:
    "https://drive.google.com/file/d/1ceSqypoSipvmRkqJou2ovKRrGwVJahgI/view?usp=sharing",
};

/*=====================
    4. About Section
    Desc: It's all about you!. this section is designed using the command 
    line concept so it asked you to add the admin of the command line 
    and 2 basic commands (i recommend you to use default commands).
==========================*/

const aboutSection = {
  admin: "pruthvish@pruthvish",
  firstCommand: " sudo run about.exe",
  secondCommand: " executing about.exe",
  about:
    "I am Pruthvish Eshwar, a technology leader with 10 years of experience in building innovative tech products from taking them from 0 to 1 and scaling them from 1 to 100 using my adaptive and a wide range of tech expertise, leadership and strategy skills. A gold medalist in BTech Computer Science and an MBA in Leadership and Strategy using AI, I am currently pursuing a PhD in Business Administration focused on AI. My passion lies in entrepreneurship, guiding teams, and developing Tech and AI-driven solutions to create impactful and scalable businesses. My achievements include being among the top 100 coders in the ACM contest, building complex products from stratch and driving significant revenue growth for companies.",
};

/*=====================
    5. Skils Section
    Desc: This section hep you set your skills 
==========================*/

const skillsSection = {
  // Recommended : don't add more than 3 skill taglines.
  skillsTagLines: [
    "Tech and AI Innovator: Creating Cutting-Edge Tech and AI from Scratch to Success",
    "Scaling Vision: Turning Ideas into High-Impact Products",
    "Strategic Leadership: Transforming Concepts into Market-Ready Solutions",
  ],

  // Recommended : don't add more than 12 skills.
  // Note : go to https://fontawesome.com/icons?d=gallery > select the icon you want to show 
  //        > copy its class > paste it as {fontAwesomeClassname: "fab fa-html5"} in SkillsSet

  skillsSet: [
    // {
    //   fontAwesomeClassname: "fab fa-html5",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-css3-alt",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-sass",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-js",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-react",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-node",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-npm",
    // },
    // {
    //   fontAwesomeClassname: "fas fa-fire",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-wordpress",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-python",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-linux",
    // },
    // {
    //   fontAwesomeClassname: "fab fa-docker",
    // },
  ],
};

/*=====================
    6. Open Source Section
    Desc: This section hlep you configure your github repos section 
==========================*/
const openSourceSection = {
  
  //Note :  don't edit the githubToken
  githubToken: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,

  githubUserName: "Pruthvish-E",
  //Note :  no of open source projects you want to show.
  numberOfRepos: 0,
};

/*=====================
    7. Projects Section
    Desc: This section hlep you configure your major projects.
==========================*/

const projectsSection = {
  projects: [
    // {
    //   projectName: "BubuSoft",
    //   projectBio:
    //     "DREAM BIG, ACT NOW ––– is the new motto. BabuSoft a bird’s eye view of the tech industry for all the novel ideas that you can turn into reality",

    //   projectUrl: "https://babusoft.netlify.app/",
    //   stackList: ["React", "Ant Design", "Sass", "Device Detect"],
    // },
    // {
    //   projectName: "E-Trans Pakistan",
    //   projectBio:
    //     "E-Trans Pakistan emerge as first in its class within the city of Karachi in Sindh, offering chauffeur-driven services.",

    //   projectUrl: "https://etranspakistan.com/",
    //   stackList: ["Wordpress", "plugins", "css"],
    // },
    // {
    //   projectName: "Covid-19 Tracker",
    //   projectBio:
    //     "Covid-19 is an real-time web application which give real-time update about the corono-virus cases in the world build on ReactJs",

    //   projectUrl: "https://orthocovid-19.netlify.app/",
    //   stackList: ["React", "Ant Design", "Sass", "AmCharts", "GeoData"],
    // },

    // {
    //   projectName: "Cheating Detector",
    //   projectBio:
    //     "Cheating Detector Desktop app checks the similarity b/w different PDFs,documents ,images and text",

    //   projectUrl: "/",
    //   stackList: ["Electron", "Python", "Open Cv", "OCR", "Flask"],
    // },
  ],
};

/*=====================
    8. Experience Section
    Desc: This section help you configure your experience.
==========================*/

const experienceSection = {
  experiences: [
    {
      experienceTitle: "Co-Founder, CTO, Datence Technologies",
      experienceDesc:
        "Developing Abyd a DIY legal compliance kit for startups and firms from scratch using the latest tech,Building the data protection and privacy legal architecture report generation AI.",
      // Recommended : don't add full date.
      experienceDuration: "07/24-*",
      // Recommended : don't add more than 3 tags.
      experienceTags: [" LegalTech, ", "GenAi, ", "Team management"],
    },
    {
      experienceTitle: "Senior Software Engineer , Arista Networks ",
      experienceDesc:
        "Worked as a part of Sand Vxlan team ,Implemented Vxlan Mlag Multi Vtep software for Arista switches,Implemented PIM Over GRE on Arista switches. ",
      experienceDuration: "07/21-07/24",
      experienceTags: ["Full Stack Development, ", "Networking, ", "System Design"],
    },
    {
      experienceTitle: "Technology and Business Growth Advisor",
      experienceDesc:
        "I led a series of initiatives that significantly advanced the company’s technological capabilities, positioning it for sustainable growth.",
      experienceDuration: "08/22-*",
      experienceTags: ["Startup, ", "Business Growth, ", "leadership"],
    },
    {
      experienceTitle: "Research Intern, Indian Institute of Science(IISc)",
      experienceDesc:
        "Worked in the field of artificial intelligence developing domain adaptation models in IISc VAL labs, Developed state-of-the-art algorithms and models for source-free domain adaptation.",
        experienceDuration: "01/21-06/21",
        experienceTags: ["Research, ", "AI, ", "State-of-the-art"],
    },
    {
      experienceTitle: "Member of Technical Staff, DeNews",
      experienceDesc:
        "Developed a completely decentralized and distributed machine learning algorithm to rank sources of articles and credit scores of users which impacts the truth value of an article with other NLP and machine learning algorithms for detecting fake NEWS.",
      experienceDuration: "06/20-08/21",
      experienceTags: ["Distributed Systems, ", "Advanced algorithms, ", "ML"],
    },
    {
      experienceTitle: "Software Engineer Trainee, MindTree ",
      experienceDesc:
        "Developed APIs for  Android applications called journeys of change, Built a machine learning model to generate reports of application users to recommend better milestones for the users",
      experienceDuration: "07/19-12/19",
      experienceTags: ["Android, ", "UI/UX, ", "Web development"],
    },
    {
      experienceTitle: "Machine Learning Researcher, CDSAML ",
      experienceDesc:
        "Developed a machine learning model to classify materials based on their reflectance property, Implemented a deep learning model to Check the quality of materials using only images of the material.",
      experienceDuration: "05/18-08/20",
      experienceTags: ["Research, ", "AI, ", "Product management "],
    },
  ],
};

/*=====================
    9. Contact Section
    Desc: This section help you configure your contact.
==========================*/

const contactSection = {
  contactTagline:
    "Hey Folks, Let's Connect: Empowering Innovation Together.",
  // Note : add your all contacts in the contactList seperating with *,* .
  contactList: [ "umapruthvish@gmail.com" ],
};


// Bingo :))

export {
  app,
  socialNetworks,
  bannerSection,
  aboutSection,
  skillsSection,
  openSourceSection,
  projectsSection,
  experienceSection,
  contactSection,
};
