import {
  Code2, Smartphone, Globe, Palette, Zap, Wrench,
  Github, Linkedin, Twitter, Mail,
  FileCode2, Braces, Atom, GitBranch, Layout, Server,
} from "lucide-react";

export const profile = {
  name: "Tanu thakur",
  role: "Frontend Web Developer",
  intro:
    "I build fast, accessible and beautiful websites with React. Let's turn your idea into a polished digital product.",
  email: "tanutanu25@gmail.com",
  location: "Himachal Pradesh, India",
  photo: "/Users/navgurukul/Downloads/profile photo.jpg", // replace with /profile.jpg in /public
  bio: [
    "I'm a web developer passionate about crafting clean, responsive and user-friendly interfaces. I enjoy turning designs into pixel-perfect, high-performance React applications.",
    "When I'm not coding, I'm exploring new tools, contributing to open source and learning about UI/UX design.",
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/skills", label: "Skills" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/tanutanu25-boop", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tanu-thakur-100b91412/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter },
  { name: "Email", href: "mailto:tanutanu25@gmail.com", icon: Mail },
];

export const education = [
  { title: "BCA in Computer Science", place: "Eternal University", period: "2026 – 2028" },
  { title: " Senior Secondary (Science)", place: "DPS public school", period: "2023 – 2024" },
];

export const experience = [
  { title: "Fullstack Developer", place: "MNM/Metaskill", period: "2023 – Present", desc: "Building React applications and reusable UI components." },
  { title: "Freelance Web Developer", place: "Self-employed", period: "2021 – 2023", desc: "Delivered 15+ responsive websites for small businesses." },
];

export const services = [
  { icon: Code2, title: "Frontend Development", desc: "Modern, maintainable React applications built with clean architecture." },
  { icon: Smartphone, title: "Responsive Design", desc: "Layouts that look and work great on mobile, tablet and desktop." },
  { icon: Globe, title: "Website Development", desc: "Complete business, portfolio and landing page websites from scratch." },
  { icon: Palette, title: "UI Implementation", desc: "Turning Figma or XD designs into pixel-perfect interfaces." },
  { icon: Zap, title: "Performance Optimization", desc: "Faster load times, better Lighthouse scores and smoother UX." },
  { icon: Wrench, title: "Maintenance & Fixes", desc: "Bug fixing, updates and improvements for existing websites." },
];

export const skills = [
  { name: "HTML5", level: 95, icon: FileCode2 },
  { name: "CSS3", level: 90, icon: Layout },
  { name: "JavaScript", level: 88, icon: Braces },
  { name: "React", level: 85, icon: Atom },
  { name: "Git & GitHub", level: 80, icon: GitBranch },
  { name: "Node.js (basics)", level: 60, icon: Server },
  { name: "MongoDB (basics)", level: 60, icon: Server },

];

export const projects = [
  {
    title: "Glow and Grace E-Commerce",
    desc: "A responsive shopping website with cart, filters and checkout flow.",
    image: "https://placehold.co/600x380/4f46e5/ffffff?text=E-Commerce",
    tech: ["React", "Context API", "CSS"],
    live: "https://example.com",
    github: "https://github.com/yourusername/project-one",
  },
  {
    title: "Student Feedback Manager",
    desc: "A platform for students to provide feedback about their courses and instructors.",
    image: "https://placehold.co/600x380/0ea5e9/ffffff?text=Feedback+App",
    tech: ["React", "Node.js", "MongoDB"],
    live: "https://example.com",
    github: "https://github.com/yourusername/project-two",
  },
  {
    title: "ThinkSpark",
    desc: "Drag-and-drop task board with local storage persistence.",
    image: "https://placehold.co/600x380/10b981/ffffff?text=Task+Manager",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://example.com",
    github: "https://github.com/yourusername/project-three",
  },
  {
    title: "Interntrack",
    desc: "Elegant multi-page website with menu, gallery and reservations.",
    image: "https://placehold.co/600x380/f59e0b/ffffff?text=Restaurant",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://example.com",
    github: "https://github.com/yourusername/project-four",
  },
];