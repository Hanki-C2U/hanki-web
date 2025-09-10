// Mock data to replace Supabase data
// This file contains all hardcoded data for the app

export interface MockUser {
  id: string;
  email: string;
  userType: "mentor" | "mentee";
  firstName: string;
  lastName: string;
  profilePicture?: string;
}

export const mockUsers: MockUser[] = [
  {
    id: "user-1",  
    email: "bienvenu@example.com",
    userType: "mentee",
    firstName: "Bienvenu",
    lastName: "Cyuzuzo",
    profilePicture: "/professional-headshot-of-confident-hispanic-sales-.png",
  },
  {
    id: "user-2",
    email: "alice@example.com",
    userType: "mentee",
    firstName: "Alice",
    lastName: "Mukamana",
    profilePicture: "/professional-headshot-of-african-woman-hr-professi.png",
  },
  {
    id: "user-3",
    email: "emmanuel@example.com",
    userType: "mentor",
    firstName: "Emmanuel",
    lastName: "Ntagungira",
    profilePicture: "/professional-headshot-of-young-hispanic-freelancer.png",
  },
];

export interface MockMentee {
  id: number;
  supabaseId: string;
  firstName: string;
  lastName: string;
  role: string;
  organization: string;
  profilePicture: string;
  bio: string;
  languages: string[];
  achievementBadges: {
    id: number;
    name: string;
    icon: string;
    earned: boolean;
  }[];
  skills: string[];
  goals: string[];
  professionalBackground: {
    education: string;
    experience: {
      position: string;
      company: string;
      duration: string;
    }[];
  };
  learningPreferences: {
    mentorshipStyle: string;
    preferredSessionFormat: string;
    learningGoals: string;
    availability: string;
  };
  progressData: {
    skill: string;
    progress: number;
    learningGoal?: string;
  }[];
  completedMilestones: {
    name: string;
    date: string;
  }[];
  location: string;
  timezone: string;
  socials?: {
    linkedin?: string;
    website?: string;
  };
}

export const mockMentees: MockMentee[] = [
  {
    id: 1,
    supabaseId: "user-1",
    firstName: "Bienvenu",
    lastName: "Cyuzuzo",
    role: "Student",
    organization: "African Leadership University",
    profilePicture: "/professional-headshot-of-confident-hispanic-sales-.png",
    bio: "I'm a software engineering student passionate about building web applications. I'm currently focused on full-stack development using JavaScript, React, and SQL. I'm seeking mentorship to strengthen my system design, problem-solving, and career navigation skills.",
    languages: ["English", "Français", "Ikinyarwanda"],
    achievementBadges: [
      { id: 1, name: "First Session Complete", icon: "🎯", earned: true },
      { id: 2, name: "Goal Setter", icon: "📋", earned: true },
      { id: 3, name: "Network Builder", icon: "🤝", earned: true },
      { id: 4, name: "Knowledge Seeker", icon: "📚", earned: true },
    ],
    skills: ["React", "JavaScript", "Node.js", "SQL", "HTML/CSS"],
    goals: [
      "Master system design patterns",
      "Improve problem-solving skills",
      "Prepare for technical interviews",
      "Build a professional network",
    ],
    professionalBackground: {
      education:
        "B.S. Computer Science, African Leadership University, 2025 (Expected)",
      experience: [
        {
          position: "Software Engineering Intern",
          company: "Andela",
          duration: "Summer 2024",
        },
        {
          position: "Web Developer",
          company: "Student Projects",
          duration: "2023 - Present",
        },
      ],
    },
    learningPreferences: {
      mentorshipStyle: "Practical guidance with hands-on examples",
      preferredSessionFormat: "1:1 video calls with follow-up tasks",
      learningGoals: "Career development and technical skill improvement",
      availability: "Evenings and weekends",
    },
    progressData: [
      {
        skill: "React",
        progress: 70,
        learningGoal:
          "Build complex applications with React hooks and context API",
      },
      {
        skill: "JavaScript",
        progress: 85,
        learningGoal: "Master advanced JavaScript concepts and design patterns",
      },
      {
        skill: "SQL",
        progress: 60,
        learningGoal: "Learn database optimization and complex query patterns",
      },
      {
        skill: "Node.js",
        progress: 55,
        learningGoal: "Develop RESTful APIs and microservices architecture",
      },
      {
        skill: "HTML/CSS",
        progress: 90,
        learningGoal: "Master responsive design and CSS animations",
      },
    ],
    completedMilestones: [
      { name: "Built first React application", date: "June 15, 2025" },
      { name: "Completed SQL fundamentals course", date: "July 3, 2025" },
      { name: "Created personal portfolio website", date: "August 20, 2025" },
    ],
    location: "Kigali, Rwanda",
    timezone: "GMT+02:00",
    socials: {
      linkedin: "https://linkedin.com/in/bienvenu-cyuzuzo",
      website: "https://portfolio-bienvenu.com",
    },
  },
  {
    id: 2,
    supabaseId: "user-2",
    firstName: "Alice",
    lastName: "Mukamana",
    role: "Frontend Developer",
    organization: "TechRwanda",
    profilePicture: "/professional-headshot-of-african-woman-hr-professi.png",
    bio: "Frontend developer with 2 years of experience. Passionate about creating beautiful and accessible user interfaces. Looking to advance my career and take on more challenging projects.",
    languages: ["English", "Français", "Ikinyarwanda"],
    achievementBadges: [
      { id: 1, name: "First Session Complete", icon: "🎯", earned: true },
      { id: 2, name: "Goal Setter", icon: "📋", earned: true },
      { id: 5, name: "UI Master", icon: "🎨", earned: true },
      { id: 6, name: "Consistent Learner", icon: "📆", earned: true },
    ],
    skills: ["React", "Angular", "UI/UX", "CSS", "JavaScript"],
    goals: [
      "Become a senior developer",
      "Master advanced React patterns",
      "Improve UI/UX skills",
      "Learn about design systems",
    ],
    professionalBackground: {
      education: "B.S. Information Technology, University of Rwanda, 2023",
      experience: [
        {
          position: "Frontend Developer",
          company: "TechRwanda",
          duration: "2023 - Present",
        },
        {
          position: "Web Design Intern",
          company: "Digital Solutions Ltd",
          duration: "2022 - 2023",
        },
      ],
    },
    learningPreferences: {
      mentorshipStyle: "Detailed code reviews and UI feedback",
      preferredSessionFormat: "Video calls and pair programming sessions",
      learningGoals: "Frontend specialization and UI/UX mastery",
      availability: "Weekday evenings",
    },
    progressData: [
      {
        skill: "React",
        progress: 80,
        learningGoal: "Master React state management libraries like Redux",
      },
      {
        skill: "Angular",
        progress: 65,
        learningGoal:
          "Learn advanced component architecture and state management",
      },
      {
        skill: "UI/UX",
        progress: 85,
        learningGoal:
          "Improve accessibility implementation and user testing methods",
      },
      {
        skill: "CSS",
        progress: 90,
        learningGoal: "Master CSS Grid and advanced animations",
      },
      {
        skill: "JavaScript",
        progress: 75,
        learningGoal:
          "Improve knowledge of ES6+ features and functional programming",
      },
    ],
    completedMilestones: [
      { name: "Redesigned company website", date: "May 10, 2025" },
      { name: "Implemented accessible UI components", date: "July 25, 2025" },
      {
        name: "Completed Advanced React Patterns course",
        date: "August 15, 2025",
      },
    ],
    location: "Kigali, Rwanda",
    timezone: "GMT+02:00",
  },
];

export interface MockMentor {
  id: number;
  supabaseId: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  role: string;
  company: string;
  bio: string;
  expertise: string[];
  experience: number;
  languages: string[];
  education: string[];
  location: string;
  timezone: string;
  rating: number;
  sessionCount: number;
  availability: {
    days: string[];
    times: string[];
  };
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const mockMentors: MockMentor[] = [
  {
    id: 1,
    supabaseId: "user-3",
    firstName: "Emmanuel",
    lastName: "Ntagungira",
    email: "emmanuel@example.com",
    profilePicture: "/professional-headshot-of-young-hispanic-freelancer.png",
    role: "Engineering Manager",
    company: "Google",
    bio: "Engineering leader with 10+ years of experience in software development. Passionate about mentoring early-career engineers and helping them build scalable systems.",
    expertise: [
      "Software Architecture",
      "Career Development",
      "Leadership",
      "System Design",
      "Backend Development",
    ],
    experience: 10,
    languages: ["English", "French", "Kinyarwanda"],
    education: [
      "MSc Computer Science, MIT",
      "BSc Computer Engineering, Carnegie Mellon",
    ],
    location: "Berlin, Germany",
    timezone: "GMT+01:00",
    rating: 4.9,
    sessionCount: 48,
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      times: ["18:00 - 20:00"],
    },
    socials: {
      linkedin: "https://linkedin.com/in/emmanuel-ntagungira",
      twitter: "https://twitter.com/entagungira",
      website: "https://emmanueltech.dev",
    },
  },
  {
    id: 2,
    supabaseId: "user-4",
    firstName: "Marie Claire",
    lastName: "Uwimana",
    email: "marieclaire@example.com",
    profilePicture: "/professional-headshot-of-african-woman-hr-professi.png",
    role: "Digital Marketing Director",
    company: "McKinsey & Company",
    bio: "Marketing expert with a focus on digital transformation and growth strategies. Experienced in helping businesses scale through effective digital marketing.",
    expertise: [
      "Digital Marketing",
      "Brand Strategy",
      "Growth Hacking",
      "Social Media",
      "Content Strategy",
    ],
    experience: 8,
    languages: ["English", "French", "Kinyarwanda"],
    education: [
      "MBA, Harvard Business School",
      "BA Communications, University of Toronto",
    ],
    location: "Toronto, Canada",
    timezone: "GMT-05:00",
    rating: 4.8,
    sessionCount: 32,
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      times: ["10:00 - 12:00", "17:00 - 19:00"],
    },
    socials: {
      linkedin: "https://linkedin.com/in/marieclaire-uwimana",
      website: "https://marieclaire-digital.com",
    },
  },
];

// Store the currently logged in user for mock authentication
export const mockCurrentUser: { user: MockUser | null } = {
  user: null,
};
