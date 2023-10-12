import {
  blender,
  css,
  figma,
  googlesuite,
  html,
  illustrator,
  javascript,
  photoshop,
  python,
  reactjs,
  tailwind,
  threejs,
  otenga,
  anantu,
  idealoft,
  cinemon,
  boxari,
  flavourette,
  lenden,
  mumbaikar,
  xarothi,
  portfolio,
  behance,
  scribd,
  github,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  { id: "experience", title: "Experience" },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "Google Docs",
    icon: googlesuite,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Bachelor of Design",
    company_name: "Anant National University, Ahmedabad",
    icon: anantu,
    iconBg: "#0075bc",
    date: "August 2019 - June 2023",
    points: [
      "Graduated with 3.43/4 CGPA with a major in Interaction Design and a minor in Communication Design",
      "Was offered a full 100% Scholarship for getting a National Rank of 403 in the UCEED Exam 2019.",
      "Retained the full Scholarship for the entirety of my 4 year long course.",
      "Served in the Student Council as a General Secretary and Events Head",
      "Served as a Campus Ambassador",
      "Involved in the organisation of various events including two Club Fairs, one Convocation, one Intra-College Debate and numerous other talks and workshops.",
      "Represented College in over 60 Model UN Conferences as Delegate, Executive Board and Organiser including MUNs of reputed Universities like IIT Bombay, TCET, Flame University and MPSTME among others. ",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "CinEmon Consulting (Remote)",
    icon: cinemon,
    iconBg: "#18002c",
    date: "Oct 2020 - Oct 2022",
    points: [
      "Created new logos and redesigned logos with their respective logo guideline documents for multiple clients.",
      "Created numerous business decks for a range of clients that icluded proposals, look books, and case studies.",
      "Created Motion Graphics based reels for social media pages of various clients.",
      "Coded various emailers and email signatured for clients.",
    ],
  },
  {
    title: "Social Media Strategist and Designer",
    company_name: "Idealoft Studio (Remote)",
    icon: idealoft,
    iconBg: "#000000",
    date: "Mar 2021 - Aug 2021",
    points: [
      "Planned content and strategy for internal Social Media",
      "Redesigned graphic style of internal Social Media.",
      "Set up automation of posting to social media channels ",
      "Wrote captions and written material for Social Media Posts",
      "Involved in other internal projects including creation of few UI Assets and video editing for a project with YesBank on the occasion of World Family Day.",
    ],
  },
  {
    title: "Graduation Project Intern",
    company_name: "Otenga Initiatives Pvt. Ltd., Ahmedabad",
    icon: otenga,
    iconBg: "#07813e",
    date: "Jan 2023 - May 2023",
    points: [
      "Conceptualised a prototype POS System that involved better data collection and processing. Created Information Architecture, conducted interviews and UX Research, created the start of a design system, and made few prortype screens for the same.",
      "Helped plan and conduct 7 events and 3 talks.",
      "Wrote the content for majority of the outgoing communication.",
      "Improved the project management by creating project trackers for the team on google sheets.",
      "Helped the café space in conducting comparative software analysis for the selection of a new POS System and then helped in the migration of data and processes to the new software",
    ],
  },
];

const certifications = [
  {
    certification: "Python Essentials 1",
    company: "Cisco",
    issued: "October 2023",
    credentialid: "View Badge",
    image:
      "https://images.credly.com/size/110x110/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
    credentialurl:
      "https://www.credly.com/badges/aa88419f-7352-4287-99b5-ee2c59210ca1/public_url",
  },
  {
    certification: "IBM Full Stack Software Developer Specialization",
    company: "IBM",
    issued: "August 2023",
    credentialid: "View Certificate",
    image:
      "https://pbs.twimg.com/profile_images/1493920778194145281/-3wAsike_400x400.jpg",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/LNUW9S5HJT5U",
  },
  {
    certification: "Full Stack Software Developer Assessment",
    company: "Coursera",
    issued: "August 2023",
    credentialid: "View Certificate",
    image:
      "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1704326400&v=beta&t=NJMDK_L9K8U4OFU5oTdWlt4EkDQmIE7Evkd_eAMUyEQ",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/KAHXDFVP44DT",
  },
  {
    certification: "Full Stack Cloud Development Capstone Project",
    company: "Coursera",
    issued: "August 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/340x340/images/fa418e1b-119d-4e79-b663-e6c20dfff214/Full_Stack_Cloud_Development_Capstone_Project.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/C82R6D4QE92E",
  },
  {
    certification: "Application Development using Microservices and Serverless",
    company: "Coursera",
    issued: "August 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/340x340/images/973136f8-09b5-439a-a309-45041c83c756/image.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/AQ4R2VTZCPLG",
  },
  {
    certification: "Developing AI Applications with Python and Flask",
    company: "Coursera",
    issued: "August 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/340x340/images/3cd98d8a-c224-4f8f-a839-d0a87422f2c1/Python_Project_for_AI_and_Application_Development.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/NLRHDYJGWJ9H",
  },
  {
    certification: "Developing Applications with SQL, Databases, and Django",
    company: "Coursera",
    issued: "August 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/110x110/images/a3ff2154-3ad0-4bbf-8405-c84e777bdc9a/Developing_Applications_with_SQL__Databases__and_Django.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/S7DSXHACLKHA",
  },
  {
    certification:
      "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    company: "Coursera",
    issued: "August 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/110x110/images/5e15f28e-93cb-4e91-9813-febd4b72c53f/image.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/RWZRPWQFLBZY",
  },
  {
    certification: "Python for Data Science, AI & Development",
    company: "Coursera",
    issued: "August 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/110x110/images/0571ab1d-f43b-43d9-9c68-8ebd0ebd61b7/Python_for_Data_Sci_and_AI_Foundational.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/7CUKTJ4EXP85",
  },
  {
    certification: "Developing Back-End Apps with Node.js and Express",
    company: "Coursera",
    issued: "July 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/110x110/images/482f703c-e221-4667-91e6-4322c3210bc0/image.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/CUNYFWHRR9ZK",
  },
  {
    certification: "Developing Front-End Apps with React",
    company: "Coursera",
    issued: "July 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/110x110/images/9dcdc294-79a6-47e5-a769-708c29c7c497/image.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/PXQCY6C6KBAV",
  },
  {
    certification: "Getting Started with Git and GitHub",
    company: "Coursera",
    issued: "July 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/110x110/images/23859131-d0ff-4f44-900f-bac86165b941/image.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/M44A3ZB7R45L",
  },
  {
    certification: "Introduction to Web Development with HTML, CSS, JavaScript",
    company: "Coursera",
    issued: "July 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/110x110/images/6240e108-1407-4773-8621-cc2e4736d4e6/Web_Development_with_HTML-CSS-JavaScript_Essentials.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/NHFRBQ5RJ3F8",
  },
  {
    certification: "Introduction to Cloud Computing",
    company: "Coursera",
    issued: "July 2023",
    credentialid: "View Certificate",
    image:
      "https://images.credly.com/size/110x110/images/2d178f89-4816-4190-8c4a-3bdbfec9db01/Dev_Skills_Network_-_Cloud_Computing_Core.png",
    credentialurl:
      "https://www.coursera.org/account/accomplishments/certificate/87QL2P2QG72K",
  },
];

const projects = [
  {
    name: "Xarothi FSM",
    description:
      "A Comprehensive Data-backed Food Service Management System. Designed entirely by myself for Otenga Initiatives Pvt. Ltd. as a part of my final year Graduation Project at Design School",
    tags: [
      {
        name: "POS_System",
        color: "blue-text-gradient",
      },
      {
        name: "UI_Design",
        color: "green-text-gradient",
      },
      {
        name: "Solo_Project",
        color: "pink-text-gradient",
      },
    ],
    image: xarothi,
    source_code_link_a: "https://www.behance.net/gallery/181692031/Xarothi-FSM",
    source_code_link_a_img: behance,
    source_title_a: "Behance",
    source_code_link_b:
      "https://www.scribd.com/document/676064085/Xarothi-FSM-A-Comprehensive-Data-backed-Food-Service-Management-System",
    source_code_link_b_img: scribd,
    source_title_b: "Scribd",
  },
  {
    name: "MumbaiKar",
    description:
      "Mobile App concept that gamifies the experience of discovering the city of Mumbai by turning it into a scavenger hunt. Solo Project done for the Interaction Design Methods-II Module at University.",
    tags: [
      {
        name: "Travel_App",
        color: "blue-text-gradient",
      },
      {
        name: "UI_Design",
        color: "green-text-gradient",
      },
      {
        name: "Solo_Project",
        color: "pink-text-gradient",
      },
    ],
    image: mumbaikar,
    source_code_link_a: "https://www.behance.net/gallery/133482519/Mumbai-Kar",
    source_code_link_a_img: behance,
    source_title_a: "Behance",
  },
  {
    name: "Len-Den: User Research",
    description:
      "A user research study Analysing the Accessibility of Digital Banking Services for Women from Marginalised Backgrounds. Group Project done for the User Research-II Module at University. I was responsible for data processing, insight generation and project compilation.",
    tags: [
      {
        name: "Finance",
        color: "blue-text-gradient",
      },
      {
        name: "UX_Research",
        color: "green-text-gradient",
      },
      {
        name: "Team_Project",
        color: "pink-text-gradient",
      },
    ],
    image: lenden,
    source_code_link_a:
      "https://www.behance.net/gallery/181693349/-A-User-Research-Case-Study",
    source_code_link_a_img: behance,
    source_title_a: "Behance",
    source_code_link_b:
      "https://www.scribd.com/document/677030186/%E0%A4%B2%E0%A5%87%E0%A4%A8-%E0%A4%A6%E0%A5%87%E0%A4%A8-Analysing-the-accessibility-of-digital-banking-services-for-Women-from-marginalised-communities",
    source_code_link_b_img: scribd,
    source_title_b: "Scribd",
  },
  {
    name: "Boxari",
    description:
      "A Cloud-based game testing service concept that allows game developers to test their games in an affordable fashion whilst incentivising testers to give accurate reports through an in-app currency. Team Project done for the Interaction Design Methods-I Module at University. I was responsible for creating the prototyped Website UI for the Game Developer Interface and for creating the video trailer.",
    tags: [
      {
        name: "Gaming",
        color: "blue-text-gradient",
      },
      {
        name: "UI_Design",
        color: "green-text-gradient",
      },
      {
        name: "Team_Project",
        color: "pink-text-gradient",
      },
    ],
    image: boxari,
    source_code_link_a: "https://www.behance.net/gallery/121760695/Boxari",
    source_code_link_a_img: behance,
    source_title_a: "Behance",
  },
  {
    name: "Flavourette",
    description:
      "An e-cigarette redesign concept based on the design style of Philip Starck. The product was accompanied by a mobile app that allowed users to keep track of usage. Team Project done for the Interaction Design Methods-II Module at University. I was responsible for creating the prototyped Mobile app UI and compilation of final presentation.",
    tags: [
      {
        name: "eCigarette",
        color: "blue-text-gradient",
      },
      {
        name: "UI_Design",
        color: "green-text-gradient",
      },
      {
        name: "Team_Project",
        color: "pink-text-gradient",
      },
    ],
    image: flavourette,
    source_code_link_a: "https://www.behance.net/gallery/129909249/FLAVOURETTE",
    source_code_link_a_img: behance,
    source_title_a: "Behance",
  },
  {
    name: "Personal Portfolio",
    description:
      "Inception. This project is the very website that you are currently viewing. This was made using react-three-fiber and has email.js functionality. It is a solo project that highlight's my prowess with front end development. Inspired by a tutorial from JavaScript Mastery",
    tags: [
      {
        name: "Portfolio",
        color: "blue-text-gradient",
      },
      {
        name: "Developer",
        color: "green-text-gradient",
      },
      {
        name: "Solo_Project",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link_a:
      "https://github.com/Manas-SICS/ManasP-threejs-portfolio-website",
    source_code_link_a_img: github,
    source_title_a: "Github",
  },
];

export { navLinks, technologies, experiences, certifications, projects };
