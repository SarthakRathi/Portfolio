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
  python,
  tensorflow,
  flutter,
  firebase,
  aws,
  java,
  mysql,
  dl,
  ml,
  istudio
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
];

const services = [
  {
    title: "AI/ML Developer",
    icon: creator,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const skillCategories = {
  webDev: "Web Development",
  appDev: "App Development",
  aiMl: "AI & Machine Learning",
  backend: "Backend",
  languages: "Core Languages"
};

const technologies = [
  // Web Development
  {
    name: "React JS",
    icon: reactjs,
    category: skillCategories.webDev
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: skillCategories.webDev
  },
  {
    name: "Express JS",
    icon: nodejs, // Using NodeJS icon as placeholder for Express
    category: skillCategories.webDev
  },
  {
    name: "HTML 5",
    icon: html,
    category: skillCategories.webDev
  },
  {
    name: "CSS 3",
    icon: css,
    category: skillCategories.webDev
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: skillCategories.webDev
  },
  
  // App Development
  {
    name: "Flutter",
    icon: flutter,
    category: skillCategories.appDev
  },
  {
    name: "Android (Java)",
    icon: java, // Using mobile icon as placeholder for Android
    category: skillCategories.appDev
  },
  
  // AI & ML
  {
    name: "TensorFlow",
    icon: tensorflow,
    category: skillCategories.aiMl
  },
  {
    name: "Machine Learning",
    icon: ml, // Using creator icon as placeholder for ML
    category: skillCategories.aiMl
  },
  {
    name: "Deep Learning",
    icon: dl, // Using creator icon as placeholder for Deep Learning
    category: skillCategories.aiMl
  },
  
  // Backend
  {
    name: "MongoDB",
    icon: mongodb,
    category: skillCategories.backend
  },
  {
    name: "MySQL",
    icon: mysql, // Using MongoDB icon as placeholder for MySQL
    category: skillCategories.backend
  },
  {
    name: "Firebase",
    icon: firebase,
    category: skillCategories.backend
  },
  {
    name: "AWS",
    icon: aws,
    category: skillCategories.backend
  },
  
  // Core Languages
  {
    name: "Python",
    icon: python,
    category: skillCategories.languages
  },
  {
    name: "Java",
    icon: java, // Using React icon as placeholder for Java
    category: skillCategories.languages
  },
  
  // Tools
  {
    name: "Git",
    icon: git,
    category: "Tools"
  }
];

const experiences = [
  {
    title: "Flutter Developer",
    company_name: "Internship Studio",
    icon: istudio,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Jan 2025",
    points: [
      "Developed Android and iOS applications using Flutter framework.",
      "Enhanced app functionality and user interface for improved user experience.",
      "Implemented responsive designs and ensured smooth performance across different devices.",
      "Collaborated with team members to deliver high-quality mobile applications.",
    ],
  },
  {
    title: "MERN Stack Intern",
    company_name: "Internship Studio",
    icon: istudio,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Worked as a supporting web developer on an LMS system using MERN Stack.",
      "Created an online recorded course on Web Design including videos, MCQs, and study materials.",
      "Developed responsive web interfaces using React for improved user interaction.",
      "Collaborated with backend developers to integrate API services and database functionality.",
    ],
  },
  {
    title: "React Web Development Intern",
    company_name: "Skill Universe",
    icon: istudio,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Oct 2023",
    points: [
      "Supported front-end development using the MERN stack for web applications.",
      "Enhanced UI/UX elements to improve user engagement and accessibility.",
      "Collaborated with senior developers to implement new features and functionality.",
      "Participated in code reviews and testing to ensure high-quality deliverables.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sarthak's understanding of AI technologies and application development is truly impressive. His work on our ML project exceeded expectations.",
    name: "Dr. Amit Sharma",
    designation: "Professor",
    company: "Vishwakarma Institute of Information Technology",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "The Flutter application developed by Sarthak was exceptional. His attention to detail and problem-solving skills made him a valuable asset to our team.",
    name: "Priya Desai",
    designation: "Project Manager",
    company: "Internship Studio",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Sarthak's contributions to our MERN stack project were significant. His ability to quickly learn and implement new technologies was impressive.",
    name: "Rajesh Kumar",
    designation: "Senior Developer",
    company: "Skill Universe",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "YouTube NLP Assistant",
    description:
      "A browser extension for YouTube that uses Natural Language Processing to summarize content, create timestamps, analyze sentiment, and generate quiz questions. Implemented using Hugging Face multi-modal analysis.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SarthakRathi/Youtube-Bot",
  },
  {
    name: "Emergency Detection",
    description:
      "An Android application that automatically detects emergency situations using mobile sensors with K-NN Artificial Intelligence. Shows real-time emergency locations in integrated Google Maps to emergency contacts, police, and other authorities.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SarthakRathi/durgawatch",
  },
  {
    name: "Wildlife Detection",
    description:
      "An object detection system using TensorFlow that detects wildlife on roads through infrared cameras. Alerts drivers within the radius using alert lights, enhancing road safety in wildlife-prone areas.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "computer-vision",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SarthakRathi/object-detection",
  },
];

// Updated education array with correct image paths
const education = [
  {
    degree: "B.Tech",
    institution: "VIIT",
    percentage: "CGPA: 8.7 of 10",
    logo: "/src/assets/education/vit.jpg",
  },
  {
    degree: "Diploma",
    institution: "Government Polytechnic, Ahmednagar",
    percentage: "Percentage: 92% of 100%",
    logo: "/src/assets/education/gp_logo.jpeg", 
  },
  {
    degree: "Class X",
    institution: "Bharatiya Vidya Bhavan",
    percentage: "92% of 100%",
    logo: "/src/assets/education/bvb.png",
  }
];


export { services, technologies, experiences, testimonials, projects, education, skillCategories };