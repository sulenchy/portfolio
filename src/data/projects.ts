export interface Project {
    title: string,
    description: string,
    technologies: string[],
    liveLink: string,
    githubLink: string
}

const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built using Astro, Tailwind CSS, and TypeScript. It features a modern, responsive design with dynamic content sections.",
      technologies: ["Astro", "Tailwind CSS", "TypeScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "E-Commerce Store",
      description: "A fully functional e-commerce platform with product listings, shopping cart, and checkout. Integrated with Stripe for payments.",
      technologies: ["React", "Tailwind CSS", "Decap CMS", "Stripe API"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather App",
      description: "A weather forecasting app that displays real-time weather data for any city using the OpenWeather API.",
      technologies: ["React", "Tailwind CSS", "TypeScript", "OpenWeather API"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Manager",
      description: "A simple task management app with CRUD functionality, allowing users to create, update, and delete tasks.",
      technologies: ["Astro", "Tailwind CSS", "TypeScript", "Firebase Authentication"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Blogging Platform",
      description: "A blogging platform where users can create and manage blog posts. Includes a markdown editor and user authentication.",
      technologies: ["Astro", "Tailwind CSS", "TypeScript", "Decap CMS"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Crypto Dashboard",
      description: "A dashboard that tracks cryptocurrency prices in real-time. Users can view price charts, historical data, and market trends.",
      technologies: ["Astro", "Tailwind CSS", "TypeScript", "CoinGecko API"],
      liveLink: "#",
      githubLink: "#"
    }
  ];
  
  export default projects;