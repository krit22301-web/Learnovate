import img from '../assets/sample.png'
import img2 from '../assets/ml-1.jpg'
import img3 from '../assets/bootcamp.png'
import img4 from '../assets/python.png'
import img5 from '../assets/marketing.png'
import img6 from '../assets/artinte.png'
import img7 from '../assets/graphic.png'
import img8 from '../assets/datasc.png'
import img9 from '../assets/fin.png'
import img10 from '../assets/cyber.png'
import img11 from '../assets/creative.png'
import img12 from '../assets/java.png'

export const courses = [
  {
    id: 1,
    title: "Introduction to Data-Structures",
    instructor: "Dr. Smriti",
    price: 0,
    free: true,
    difficulty: "Beginner",
    rating: 4.7,
    lectures: 24,
    category: "Beginner",
    cover: img,
    description: "Learn the basics of Data Structures and Algorithms (DSA) to efficiently organize and process data. Explore arrays, linked lists, stacks, queues, and key algorithms like searching and sorting. Improve problem-solving skills and code efficiency.",
    modules: [
      {
        id: 1,
        title: "What is a Data Structure?",
        duration: "45:23",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      },
      {
        id: 2,
        title: "Understanding Arrays",
        duration: "52:14",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        free: false
      },
      {
        id: 3,
        title: "Exploring Linked Lists",
        duration: "1:12:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        free: false
      },
      {
        id: 4,
        title: "What is a Stack?",
        duration: "58:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        free: false
      },
      {
        id: 5,
        title: "Queues",
        duration: "47:22",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        free: false
      },
      {
        id: 6,
        title: "Big-O Notation",
        duration: "1:05:10",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        free: false
      }
    ]
  },
  {
    id: 2,
    title: "Exploring Machine Learning",
    instructor: "Prof. Marcus Chen",
    price: 99.99,
    free: false,
    difficulty: "Advanced",
    rating: 3.9,
    lectures: 32,
    category: "Advanced",
    cover: img2,
    description: "Dive deep into machine learning algorithms and techniques. Learn supervised and unsupervised learning, neural networks, and practical applications of ML in real-world scenarios.",
    modules: [
      {
        id: 1,
        title: "Introduction to Machine Learning",
        duration: "1:15:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      },
      {
        id: 2,
        title: "Supervised Learning Basics",
        duration: "58:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        free: false
      },
      {
        id: 3,
        title: "Neural Networks Fundamentals",
        duration: "1:22:10",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        free: false
      },
      {
        id: 4,
        title: "Deep Learning Introduction",
        duration: "1:35:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        free: false
      }
    ]
  },
  {
    id: 3,
    title: "The Complete Web Development Bootcamp",
    instructor: "Angela Yu",
    price: 129.99,
    free: false,
    difficulty: "Intermediate",
    rating: 4.8,
    lectures: 55,
    category: "Intermediate",
    cover: img3,
    description: "Master modern web development with HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and become a full-stack developer.",
    modules: [
      {
        id: 1,
        title: "HTML & CSS Foundations",
        duration: "2:10:15",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      },
      {
        id: 2,
        title: "JavaScript Fundamentals",
        duration: "1:45:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        free: false
      },
      {
        id: 3,
        title: "React.js Deep Dive",
        duration: "2:30:20",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        free: false
      }
    ]
  },
  {
    id: 4,
    title: "Python for Everybody",
    instructor: "Dr. Charles Severance",
    price: 0.00,
    free: true,
    difficulty: "Beginner",
    rating: 4.9,
    lectures: 40,
    category: "Beginner",
    cover: img4,
    description: "Learn Python programming from scratch. Perfect for beginners with no prior programming experience. Covers data structures, file handling, and web scraping.",
    modules: [
      {
        id: 1,
        title: "Getting Started with Python",
        duration: "1:20:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      },
      {
        id: 2,
        title: "Variables and Data Types",
        duration: "55:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        free: true
      },
      {
        id: 3,
        title: "Control Structures",
        duration: "1:10:15",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        free: true
      }
    ]
  },
  {
    id: 5,
    title: "Digital Marketing Masterclass",
    instructor: "Eva Fox",
    price: 79.99,
    free: false,
    difficulty: "Intermediate",
    rating: 4.5,
    lectures: 30,
    category: "Intermediate",
    cover: img5,
    description: "Master digital marketing strategies including SEO, social media marketing, email campaigns, and analytics. Learn to create effective marketing campaigns.",
    modules: [
      {
        id: 1,
        title: "Digital Marketing Fundamentals",
        duration: "1:05:20",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      },
      {
        id: 2,
        title: "SEO Strategies",
        duration: "1:35:15",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        free: false
      },
      {
        id: 3,
        title: "Social Media Marketing",
        duration: "1:20:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        free: false
      }
    ]
  },
  {
    id: 6,
    title: "Introduction to Artificial Intelligence",
    instructor: "Prof. Andrew Ng",
    price: 199.99,
    free: false,
    difficulty: "Advanced",
    rating: 4.6,
    lectures: 48,
    category: "Advanced",
    cover: img6,
    description: "Explore the fascinating world of AI, including machine learning, deep learning, and neural networks. Build intelligent systems and understand AI ethics and applications in various industries.",
    modules: [
      {
        id: 1,
        title: "What is Artificial Intelligence?",
        duration: "1:25:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      },
      {
        id: 2,
        title: "AI History and Evolution",
        duration: "1:10:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        free: false
      },
      {
        id: 3,
        title: "Machine Learning vs AI",
        duration: "58:20",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        free: false
      },
      {
        id: 4,
        title: "Neural Networks Basics",
        duration: "1:35:15",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        free: false
      },
      {
        id: 5,
        title: "AI Ethics and Society",
        duration: "1:20:10",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        free: false
      }
    ]
  },
  {
    id: 7,
    title: "Graphic Design Basics",
    instructor: "John Doe",
    price: 29.99,
    free: false,
    difficulty: "Beginner",
    rating: 4.4,
    lectures: 20,
    category: "Beginner",
    cover: img7,
    description: "Learn fundamental graphic design principles, color theory, typography, and design software. Create stunning visuals and develop your creative eye.",
    modules: [
      {
        id: 1,
        title: "Design Principles",
        duration: "45:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      },
      {
        id: 2,
        title: "Color Theory",
        duration: "52:15",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        free: false
      }
    ]
  },
  {
    id: 8,
    title: "Data Science with R",
    instructor: "Dr. Maria Garcia",
    price: 89.99,
    free: false,
    difficulty: "Intermediate",
    rating: 4.7,
    lectures: 35,
    category: "Intermediate",
    cover: img8,
    description: "Master data science using R programming. Learn statistical analysis, data visualization, and machine learning techniques for data-driven insights.",
    modules: [
      {
        id: 1,
        title: "Introduction to R",
        duration: "1:15:20",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      }
    ]
  },
  {
    id: 9,
    title: "Financial Markets Explained",
    instructor: "Michael Rodriguez",
    price: 59.99,
    free: false,
    difficulty: "Beginner",
    rating: 4.2,
    lectures: 28,
    category: "Beginner",
    cover: img9,
    description: "Understand how financial markets work, investment strategies, and economic principles. Perfect for beginners wanting to learn about finance and investing.",
    modules: [
      {
        id: 1,
        title: "Market Basics",
        duration: "55:45",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      }
    ]
  },
  {
    id: 10,
    title: "Cybersecurity Fundamentals",
    instructor: "Ben Carter",
    price: 149.99,
    free: false,
    difficulty: "Advanced",
    rating: 4.8,
    lectures: 42,
    category: "Advanced",
    cover: img10,
    description: "Learn essential cybersecurity concepts, threat analysis, network security, and how to protect systems from cyber attacks.",
    modules: [
      {
        id: 1,
        title: "Security Fundamentals",
        duration: "1:30:20",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      }
    ]
  },
  {
    id: 11,
    title: "Creative Writing Workshop",
    instructor: "Olivia White",
    price: 0.00,
    free: true,
    difficulty: "Beginner",
    rating: 4.6,
    lectures: 18,
    category: "Beginner",
    cover: img11,
    description: "Develop your creative writing skills through exercises, techniques, and feedback. Perfect for aspiring writers and storytellers.",
    modules: [
      {
        id: 1,
        title: "Finding Your Voice",
        duration: "48:15",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      }
    ]
  },
  {
    id: 12,
    title: "The Complete JavaScript Course",
    instructor: "Dr. Emily Carter",
    price: 119.99,
    free: false,
    difficulty: "Intermediate",
    rating: 4.9,
    lectures: 60,
    category: "Intermediate",
    cover: img12,
    description: "Master JavaScript from fundamentals to advanced concepts. Learn ES6+, async programming, DOM manipulation, and modern JavaScript development.",
    modules: [
      {
        id: 1,
        title: "JavaScript Basics",
        duration: "1:25:30",
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        free: true
      }
    ]
  }
];