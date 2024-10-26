export interface Experience {
    title: string;
    company: string;
    location?: string; // Optional field
    startDate: string;
    endDate: string; // Use 'Present' if it's a current position
    description: string;
  }

  const experiences: Experience[] = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "San Francisco, CA",
      startDate: "January 2022",
      endDate: "Present",
      description: "Developed responsive web applications using React, Tailwind CSS, and TypeScript. Worked closely with the design team to create interactive UI components."
    },
    {
      title: "Junior Web Developer",
      company: "Web Studio",
      location: "Remote",
      startDate: "June 2020",
      endDate: "December 2021",
      description: "Built and maintained websites using HTML, CSS, and JavaScript. Collaborated with senior developers to improve website performance and SEO."
    },
    {
      title: "Intern - Web Developer",
      company: "Creative Agency",
      location: "New York, NY",
      startDate: "June 2019",
      endDate: "August 2019",
      description: "Assisted in the development of client websites, focusing on front-end tasks. Gained experience with modern web technologies and best practices."
    }
  ];

  export default experiences;
  
  
  