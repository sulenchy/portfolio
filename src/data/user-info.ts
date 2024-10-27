export interface UserInfo {
    fullName: string;
    tagline: string;
    shortSummary: string;
    bio: string;
    projects: Project[];
    skills: SkillCategory[];
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
    contactInfo: ContactInfo;
  }

  export interface SkillCategory {
        category: string;
        skills: Skill[];
    }
  
  export interface Skill {
    name: string;
    proficiency: string; // e.g., "Beginner", "Intermediate", "Advanced"
    yearsOfExperience: number;
  }

  export interface Project {
    title: string;
    description: string;
    technologies: string[];
    liveLink: string;
    githubLink: string
  }
  
  export interface Experience {
    title: string;
    company: string;
    location: string;
    startDate: string; // e.g., "January 2020"
    endDate?: string; // null if currently working
    description: string;
  }
  
  export interface Education {
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
  }
  
  export interface Certification {
    name: string;
    institution: string;
    dateEarned: string;
  }
  
  export interface ContactInfo {
    email: string;
    phone?: string;
    website?: string;
    linkedIn?: string;
    github?: string;
    twitter?: string;
  }
  

  export const userInfo: UserInfo = {
    fullName: "Mukoro Joshua",
    tagline: "Empowering Through Data, Development, and Financial Expertise",
    shortSummary: "Data Analyst, Accountant, and Application Developer dedicated to solving real-world challenges through technology.",
    bio: "I am a Data Analyst, Accountant, and Application Developer with experience training over 15,000 people across Nigeria. Skilled in Python, R, Power BI, SQL, Oracle DB, and Sage 50, I focus on providing data-driven solutions and customized software for small and medium-sized businesses.",
    skills: [
      {
        category: "Data Analysis",
        skills: [
          { name: "Python", proficiency: "Advanced", yearsOfExperience: 5 },
          { name: "R", proficiency: "Intermediate", yearsOfExperience: 3 },
          { name: "Power BI", proficiency: "Advanced", yearsOfExperience: 4 },
          { name: "Tableau", proficiency: "Intermediate", yearsOfExperience: 3 },
          { name: "SQL", proficiency: "Advanced", yearsOfExperience: 6 },
          { name: "Advanced Excel", proficiency: "Advanced", yearsOfExperience: 7 }
        ]
      },
      {
        category: "Development",
        skills: [
          { name: "FileMaker Development", proficiency: "Advanced", yearsOfExperience: 5 },
          { name: "Oracle Database Management", proficiency: "Advanced", yearsOfExperience: 6 }
        ]
      },
      {
        category: "Project Management",
        skills: [
          { name: "Project Management", proficiency: "Intermediate", yearsOfExperience: 3 },
          { name: "Microsoft Project", proficiency: "Intermediate", yearsOfExperience: 3 }
        ]
      },
      {
        category: "Accounting",
        skills: [
          { name: "Sage 50 (Peachtree)", proficiency: "Advanced", yearsOfExperience: 8 },
          { name: "Tally ERP", proficiency: "Advanced", yearsOfExperience: 7 },
          { name: "QuickBooks", proficiency: "Advanced", yearsOfExperience: 6 }
        ]
      }
    ],
    experience: [
      {
        title: "Data Analyst & Trainer",
        company: "ICT Training Programs",
        location: "Nigeria",
        startDate: "January 2015",
        endDate: "Present",
        description: "Conducted extensive training sessions in data analytics and ICT, teaching over 15,000 individuals and helping them develop skills in data analysis, project management, and application development."
      },
      {
        title: "Application Developer & Database Administrator",
        company: "Freelance",
        location: "Nigeria",
        startDate: "January 2016",
        endDate: "Present",
        description: "Developed and integrated customized software solutions for SMEs, specializing in FileMaker databases and database management systems like Oracle 11g."
      }
    ],
    projects: [
      {
        title: "Customized ICT Training Program",
        description: "Designed and delivered a training program that has reached over 15,000 people across Nigeria, focusing on data analysis, project management, and software development skills.",
        technologies: ["Python", "Power BI", "Tableau", "Excel"],
        liveLink: '',
        githubLink: ''
      },
      {
        title: "Small Business Software Solutions",
        description: "Developed tailored software solutions for small and medium businesses, using FileMaker and Oracle 11g for efficient database management and operational support.",
        technologies: ["FileMaker", "Oracle 11g", "SQL"],
        liveLink: '',
        githubLink: ''
      }
    ],
    education: [
      {
        institution: "University of Lagos",
        degree: "Bachelor's",
        fieldOfStudy: "Accounting",
        startDate: "2010",
        endDate: "2014"
      }
    ],
    certifications: [
      { name: "Project Management Professional (PMP)", institution: "PMI", dateEarned: "March 2020" }
    ],
    contactInfo: {
      email: "mukoro@example.com",
      linkedIn: "linkedin.com/in/mukorojoshua",
      github: "https://mukorodgreat.github.io/Joshua_Profile/"
    }
  };
  