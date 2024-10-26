export interface Skill {
    name: string;
    yearsOfExperience: number;
}


export interface SkillCategory {
    category: string;
    skills: Skill[];
}

const skills: SkillCategory[] = [
    {
        category: "Languages",
        skills: [
            { name: "JavaScript", yearsOfExperience: 3 },
            { name: "TypeScript", yearsOfExperience: 2 },
            { name: "HTML", yearsOfExperience: 4 },
            { name: "CSS", yearsOfExperience: 4 },
            { name: "Python", yearsOfExperience: 1.5 },
        ],
    },
    {
        category: "Frontend Frameworks",
        skills: [
            { name: "React", yearsOfExperience: 2 },
            { name: "Vue", yearsOfExperience: 1 },
            { name: "Next.js", yearsOfExperience: 1.5 },
            { name: "Tailwind CSS", yearsOfExperience: 1 },
        ],
    },
    {
        category: "Backend Technologies",
        skills: [
            { name: "Node.js", yearsOfExperience: 2 },
            { name: "Express", yearsOfExperience: 2 },
            { name: "Deno", yearsOfExperience: 0.5 },
            { name: "GraphQL", yearsOfExperience: 1 },
        ],
    },
    {
        category: "Version Control & Collaboration",
        skills: [
            { name: "Git", yearsOfExperience: 3 },
            { name: "GitHub", yearsOfExperience: 3 },
            { name: "GitLab", yearsOfExperience: 2 },
        ],
    },
    {
        category: "Tools & Platforms",
        skills: [
            { name: "Docker", yearsOfExperience: 1 },
            { name: "Vercel", yearsOfExperience: 1 },
            { name: "Netlify", yearsOfExperience: 1.5 },
            { name: "Jenkins", yearsOfExperience: 0.5 },
        ],
    },
    {
        category: "Databases",
        skills: [
            { name: "MongoDB", yearsOfExperience: 1.5 },
            { name: "PostgreSQL", yearsOfExperience: 1 },
            { name: "SQLite", yearsOfExperience: 1 },
        ],
    },
    {
        category: "Content Management Systems (CMS)",
        skills: [
            { name: "Decap", yearsOfExperience: 0.5 },
            { name: "WordPress", yearsOfExperience: 2 },
            { name: "Strapi", yearsOfExperience: 1 },
        ],
    },
    {
        category: "Testing",
        skills: [
            { name: "Jest", yearsOfExperience: 1.5 },
            { name: "Cypress", yearsOfExperience: 1 },
            { name: "Mocha", yearsOfExperience: 0.5 },
            { name: "Chai", yearsOfExperience: 0.5 },
        ],
    },
];

export default skills;
