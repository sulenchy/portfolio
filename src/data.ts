type githubType = "Public" | "Private"

interface IGithub {
    githubType?: githubType,
    link: string 
}
interface ILink {
    github: IGithub,
    deployed: string
}

interface IProject {
    id: string,
    name: string,
    description: string,
    skillDemonstrated: string[]
    languages: string[]
    isDeployed: boolean
    links: ILink
}

interface IProjectSet {
    [key: string]: IProject
}

interface ISkill {
    id: string,
    description: string,
    name: string,
    yearsOfExperience: number
}

interface ISkillSet {
    [key: string]: ISkill
}

interface ICompanyLinks {
    [key: string]: string
}

interface IExpr {
    id: string,
    companyName: string,
    skillsDemonstrated: string[],
    achievement: string,
    startDate: string,
    endDate: string,
    links: ICompanyLinks
}

interface IExprSet {
    [key: string]: IExpr
}

export const experiences: IExprSet = {
    "1": {
        id: "1",
        companyName: "Andela",
        skillsDemonstrated: ["1", "4", "9", "5"],
        achievement: "I was assigned to work with snaps inc",
        startDate: "Oct, 2018",
        endDate: "",
        links: {
            "companyUrl": "www.andela.com"
        }
    },
    "2": {
        id: "2",
        companyName: "Snaps Media Inc(Now Quiq)",
        skillsDemonstrated: ["1", "4", "9", "5"],
        achievement: "Built edit tag functionality into the CMS. Collaborated with a team member to build web actions functionality which increases the flexibility and efficiency of snaps bot. Resolved some parities between users and journey properties and transcript properties which causes confusion among users who expected no difference between the properties. Built multi-select functionality for the bot UI",
        startDate: "July, 2019",
        endDate: "Aug, 2021",
        links: {
            "companyUrl": "www.app.snaps.io"
        }
    },
}

export const skills: ISkillSet = {
    "1": {
        id: "1",
        description: "Programming with Javascript",
        name: "Javascript",
        yearsOfExperience: 3
    },
    "2": {
        id: "2",
        description: "Programming with Typescript",
        name: "Typescript",
        yearsOfExperience: 2
    },
    "3": {
        id: "3",
        description: "Programming with C#",
        name: "C#",
        yearsOfExperience: 2
    },
    "4": {
        id: "4",
        description: "Web development using ReactJS, React Context API, and React Hooks",
        name: "ReactJS",
        yearsOfExperience: 3
    },
    "5": {
        id: "5",
        description: "State management using Redux and Redux Hooks",
        name: "Redux",
        yearsOfExperience: 3
    },
    "6": {
        id: "6",
        description: "Restful Microservice development using NodeJS",
        name: "NodeJS",
        yearsOfExperience: 3
    },
    "7": {
        id: "7",
        description: "Containerisation with Docker",
        name: "Docker",
        yearsOfExperience: 2
    },
    "8": {
        id: "8",
        description: "Mobile App development with Java and React-Native",
        name: "Mobile App Development",
        yearsOfExperience: 2
    },
    "9": {
        id: "9",
        description: "Web development using HTML and CSS",
        name: "HTML and CSS",
        yearsOfExperience: 2
    },
}

export const projects : IProjectSet = {
    "1" : {
        id: "1",
        name: "Twitter Clone",
        description: "",
        skillDemonstrated: [],
        languages: ["ReactJS", "Redux", "Javascript"],
        isDeployed: false,
        links: {
            github: {
                githubType: "Public",
                link: "https://github.com/sulenchy/twitter-clone"
            },
            deployed: ""
        }
    },
    "2": {
        id: "2",
        name: "Would You Rather?",
        description: "It is a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering 'neither' or 'both' is against the rules.",
        skillDemonstrated: [],
        languages: ["Javascript", "React", "Redux", "TailwindCss"],
        isDeployed: false,
        links: {
            github: {
                githubType: "Public",
                link: "https://github.com/sulenchy/would-you-rather"
            },
            deployed: ""
        }
    },
    "3": {
        id: "3",
        name: "Edugate",
        description: "It isa web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering 'neither' or 'both' is against the rules.",
        skillDemonstrated: [],
        languages: ["Javascript", "Redux", "Javascript"],
        isDeployed: false,
        links: {
            github: {
                githubType: "Private",
                link: "https://github.com/sulenchy/Edugate"
            },
            deployed: ""
        }
    },
    "4": {
        id: "4",
        name: "Vertical Search Engine",
        description: "A vertical search engine for students who want to apply for postgraduate research studies and look for potential supervisors at a UK university(Imperial, lancaster and coventry university)",
        skillDemonstrated: [],
        languages:["Javascript", "Redux", "Javascript"],
        isDeployed: false,
        links: {
            github: {
                githubType: "Private",
                link: "https://github.com/sulenchy/Edugate"
            },
            deployed: ""
        }
    },
}
