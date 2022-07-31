type githubType = "Public" | "Private"

interface IGithub {
    githubType?: githubType,
    link: string 
}
interface ILink {
    github: IGithub,
    deployed: string
}

export interface IProject {
    id: string,
    name: string,
    description: string,
    skillDemonstrated: string[]
    languages: string[]
    isDeployed: boolean
    links: ILink
}

export interface IProjectSet {
    [key: string]: IProject
}

export interface ISkill {
    id: string,
    description: string,
    name: string,
    yearsOfExperience: number
}

export interface ISkillSet {
    [key: string]: ISkill
}

export interface ICompanyLinks {
    [key: string]: string
}

export interface IExpr {
    id: string,
    companyName: string,
    skillsDemonstrated: string[],
    achievement: string,
    startDate: string,
    endDate: string,
    links: ICompanyLinks,
    location: string,
    role: string,
}

export interface IExprSet {
    [key: string]: IExpr
}