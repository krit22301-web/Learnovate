import chenimage from '../assets/download.jpg';
import smritimage from '../assets/smriti.jpg';
import yuimage from '../assets/pro-3.jpg';
import charlesimage from '../assets/pro-4.jpg';
import foximage from '../assets/pro-5.jpg';
import ngimage from '../assets/pro-6.jpg';
import doeimage from '../assets/pro-7.jpg';
import mariaimage from '../assets/pro-8.jpg';
import rodimage from '../assets/pro-9.jpg';
import carterimage from '../assets/pro-10.jpg';
import whiteimage from '../assets/pro-11.jpg';
import benimage from '../assets/pro-12.jpg';

export const instructorsData = {
  "Dr. Smriti": {
    id: 1,
    name: "Dr. Smriti",
    specialty: "Data Structures & Algorithms",
    bio: "Renowned professor with extensive experience in algorithm optimization and data structure design. Has published over 50 research papers in computer science.",
    image: smritimage,
    courses: ["Introduction to Data-Structures"],
    experience: "15+ years",
    rating: 4.9,
    students: 50000,
    expertise: ["Data Structures", "Algorithms", "Computer Science Theory"]
  },
  "Prof. Marcus Chen": {
    id: 2,
    name: "Prof. Marcus Chen",
    specialty: "Machine Learning & AI",
    bio: "AI researcher specializing in deep learning models and their applications in real-world scenarios. Former Google AI researcher.",
    image: chenimage,
    courses: ["Exploring Machine Learning"],
    experience: "12+ years",
    rating: 4.7,
    students: 35000,
    expertise: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Research"]
  },
  "Harry Kane": {
    id: 3,
    name: "Harry Kane",
    specialty: "Web Development",
    bio: "Full-stack developer and educator with expertise in modern web technologies. Creator of popular programming bootcamps.",
    image: yuimage,
    courses: ["The Complete Web Development Bootcamp"],
    experience: "10+ years",
    rating: 4.8,
    students: 200000,
    expertise: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Full-Stack Development"]
  },
  "Dr. Khushi kulshreshta": {
    id: 4,
    name: "Dr. Khushi kulshreshta",
    specialty: "Python Programming",
    bio: "Professor at University of Michigan, author of 'Python for Everybody' textbook. Passionate about making programming accessible to everyone.",
    image: charlesimage, 
    courses: ["Python for Everybody"],
    experience: "20+ years",
    rating: 4.9,
    students: 300000,
    expertise: ["Python", "Data Analysis", "Web Programming", "Database Design"]
  },
  "Alex Carey": {
    id: 5,
    name: "Alex Carey",
    specialty: "Digital Marketing",
    bio: "Digital marketing strategist with experience working with Fortune 500 companies. Expert in SEO, social media, and data-driven marketing.",
    image: foximage,
    courses: ["Digital Marketing Masterclass"],
    experience: "8+ years",
    rating: 4.5,
    students: 45000,
    expertise: ["SEO", "Social Media Marketing", "Email Marketing", "Analytics", "PPC"]
  },
  "Riya Singh": {
    id: 6,
    name: "Riya Singh",
    specialty: "Artificial Intelligence",
    bio: "Co-founder of Coursera, former Stanford professor, and AI pioneer. Founded Google Brain and was Chief Scientist at Baidu.",
    image: ngimage,
    courses: ["Introduction to Artificial Intelligence"],
    experience: "25+ years",
    rating: 4.8,
    students: 500000,
    expertise: ["AI", "Machine Learning", "Deep Learning", "Computer Vision", "NLP"]
  },
  "Lamine Yamal": {
    id: 7,
    name: "Lamine Yamal",
    specialty: "Graphic Design",
    bio: "Creative director with 15 years of experience in branding and visual design. Has worked with major brands and design agencies.",
    image: doeimage,
    courses: ["Graphic Design Basics"],
    experience: "15+ years",
    rating: 4.4,
    students: 25000,
    expertise: ["Graphic Design", "Typography", "Color Theory", "Branding", "Adobe Creative Suite"]
  },
  "Dr. Maria Garcia": {
    id: 8,
    name: "Dr. Maria Garcia",
    specialty: "Data Science",
    bio: "Data scientist with expertise in statistical analysis and R programming. Works as lead data scientist at a top tech company.",
    image: mariaimage,
    courses: ["Data Science with R"],
    experience: "12+ years",
    rating: 4.7,
    students: 60000,
    expertise: ["R Programming", "Statistical Analysis", "Data Visualization", "Machine Learning", "Big Data"]
  },
  "Michael Rodriguez": {
    id: 9,
    name: "Michael Rodriguez",
    specialty: "Finance",
    bio: "Financial analyst and investment advisor with deep knowledge of market dynamics and investment strategies.",
    image: rodimage,
    courses: ["Financial Markets Explained"],
    experience: "18+ years",
    rating: 4.2,
    students: 40000,
    expertise: ["Financial Markets", "Investment Strategy", "Risk Management", "Portfolio Management"]
  },
  "Ben Carter": {
    id: 10,
    name: "Ben Carter",
    specialty: "Cybersecurity",
    bio: "Cybersecurity expert with experience in enterprise security architecture. Former security consultant for government agencies.",
    image: benimage,
    courses: ["Cybersecurity Fundamentals"],
    experience: "14+ years",
    rating: 4.8,
    students: 30000,
    expertise: ["Network Security", "Threat Analysis", "Penetration Testing", "Security Architecture"]
  },
  "Oliv White": {
    id: 11,
    name: "Oliv White",
    specialty: "Creative Writing",
    bio: "Published author and writing workshop facilitator. Has helped hundreds of aspiring writers develop their craft and find their voice.",
    image: whiteimage,
    courses: ["Creative Writing Workshop"],
    experience: "10+ years",
    rating: 4.6,
    students: 15000,
    expertise: ["Creative Writing", "Storytelling", "Character Development", "Publishing"]
  },
  "Dr. John Carter": {
    id: 12,
    name: "Dr. John Carter",
    specialty: "JavaScript Development",
    bio: "Senior software engineer and JavaScript expert. Contributor to open-source projects and speaker at major tech conferences.",
    image: carterimage,
    courses: ["The Complete JavaScript Course"],
    experience: "11+ years",
    rating: 4.9,
    students: 120000,
    expertise: ["JavaScript", "ES6+", "Node.js", "React", "Vue.js", "TypeScript"]
  }
};

export const getAllInstructors = () => {
  return Object.values(instructorsData);
};