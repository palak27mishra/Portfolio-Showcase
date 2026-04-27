import { Code2, BrainCircuit, Database, Github, GitBranch, Terminal, Blocks, Cpu, BarChart, Globe, Palette, MonitorSmartphone, LayoutTemplate } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Neelima Mishra",
  tagline: "Building Beautiful Interfaces & Intelligent Systems.",
  roles: [
    "Frontend Developer",
    "AI/ML Enthusiast",
    "Data Science Explorer",
    "BCA Student @ GEU"
  ],
  bio: "I'm Neelima Mishra, a passionate Frontend Developer and AI/ML enthusiast pursuing my BCA at Graphic Era University, Dehradun. I love crafting responsive, beautiful web interfaces and building intelligent ML models that make sense of data. I believe in clean code, creative UI, and continuous learning.",
  email: "nileemamishra07@gmail.com",
  phone: "+91 7906671065",
  location: "Dehradun, Uttarakhand",
  socials: {
    github: "#",
    linkedin: "#",
    email: "mailto:nileemamishra07@gmail.com"
  }
};

export const STATS = [
  { label: "Projects Built", value: 5, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "" },
  { label: "Hours of Coding", value: 500, suffix: "+" },
  { label: "ML Models Deployed", value: 3, suffix: "+" },
];

export const SKILLS = {
  frontend: [
    { name: "HTML5", icon: Globe },
    { name: "CSS3", icon: Palette },
    { name: "JavaScript (ES6)", icon: Code2 },
    { name: "Bootstrap", icon: LayoutTemplate },
    { name: "Responsive Design", icon: MonitorSmartphone },
    { name: "DOM Manipulation", icon: Blocks },
  ],
  programming: [
    { name: "Python", icon: Terminal },
    { name: "C", icon: Terminal },
    { name: "C++", icon: Terminal },
    { name: "Java", icon: Terminal },
  ],
  dataScience: [
    { name: "NumPy", icon: Database },
    { name: "Pandas", icon: Database },
    { name: "Matplotlib", icon: BarChart },
    { name: "Seaborn", icon: BarChart },
    { name: "Scikit-learn", icon: BrainCircuit },
    { name: "Machine Learning", icon: BrainCircuit },
    { name: "EDA", icon: BarChart },
  ],
  aiConcepts: [
    { name: "Regression", icon: BarChart },
    { name: "Classification", icon: Blocks },
    { name: "Feature Engineering", icon: Cpu },
    { name: "Data Preprocessing", icon: Database },
    { name: "Model Evaluation", icon: BarChart },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "VS Code", icon: Code2 },
    { name: "Jupyter Notebook", icon: Terminal },
    { name: "Google Colab", icon: Terminal },
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript"],
    description: "Fully responsive portfolio with smooth scroll, dark/light theme toggle, mobile-first design, and SEO-optimized structure. Hosted live on GitHub Pages.",
    links: { live: "#", github: "#" },
    accent: "violet", // #A78BFA
    color: "#A78BFA"
  },
  {
    id: 2,
    title: "House Price Prediction — ML Model",
    category: "ML/AI",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    description: "ML regression model predicting house prices using Linear Regression, Ridge, and Random Forest. Achieved R² score of ~0.87. Includes EDA, feature engineering, and data visualizations.",
    links: { github: "#" },
    badge: "R² Score: 0.87",
    accent: "cyan", // #22D3EE
    color: "#22D3EE"
  },
  {
    id: 3,
    title: "AI Code Reviewer",
    category: "Tools",
    tags: ["JavaScript", "DOM", "API Integration"],
    description: "Web-based AI tool that analyzes source code and gives quality feedback. Uses async JavaScript and real-time API integration for instant code analysis.",
    links: { live: "#", github: "#" },
    accent: "rose", // #F472B6
    color: "#F472B6"
  },
  {
    id: 4,
    title: "Dynamic Process Scheduling Webpage",
    category: "Frontend & Tools",
    tags: ["HTML5", "CSS3", "JavaScript"],
    description: "Interactive OS process scheduling algorithm simulator with real-time input handling and live output rendering. Hosted on GitHub Pages.",
    links: { live: "#", github: "#" },
    accent: "amber", // #F59E0B
    color: "#F59E0B"
  },
  {
    id: 5,
    title: "Responsive Websites Collection",
    category: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript"],
    description: "Multiple responsive websites with clean UI, cross-browser compatibility, and beginner-level API integration, following component-based development practices.",
    links: { github: "#" },
    accent: "green", // #10B981
    color: "#10B981"
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage",
    topic: "Cloud Hosting Architecture Design"
  },
  {
    id: 2,
    title: "GenAI Powered Data Analytics Simulation",
    issuer: "Tata Group (Forage)",
    topic: "AI Predictions & Data Storytelling"
  },
  {
    id: 3,
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata Group (Forage)",
    topic: "IAM Fundamentals & Strategy"
  },
  {
    id: 4,
    title: "Software Engineering Job Simulation",
    issuer: "Quantium (Forage)",
    topic: "Data Processing, Dashboard & Test Automation"
  },
  {
    id: 5,
    title: "UX Design Introduction Simulation",
    issuer: "Lloyds Banking Group (Forage)",
    topic: "User Research & Design Principles"
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Graphic Era University, Dehradun",
    period: "2023 – 2026 (Ongoing)",
    relevant: "Web Dev, Data Structures, DBMS, AI/ML fundamentals"
  },
  {
    id: 2,
    degree: "Senior Secondary (12th) — Commerce",
    institution: "Shri Guru Ram Rai, Dehradun",
    period: "2023",
    relevant: ""
  },
  {
    id: 3,
    degree: "Secondary (10th)",
    institution: "Raksha Anusandhan Vidyalaya",
    period: "2021",
    relevant: ""
  }
];
