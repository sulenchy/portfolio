import { useRef, useState, useEffect } from 'react';
import Resume from '../public/resume.pdf';
import {
  ShieldCheckIcon,
  BriefcaseIcon,
  DocumentReportIcon,
  ExternalLinkIcon,
  HeartIcon,
  MenuIcon,
  MoonIcon
} from '@heroicons/react/solid'
import aboutData from '../public/content/about.json';
import projectsData from '../public/content/projects.json';
import skillsData from '../public/content/skills.json';
import experienceData from '../public/content/experience.json';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactForm from './contactForm';

interface IAbout {
  greeting: string;
  bio: string;
  avatar: string;
}

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

export interface ISkill {
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

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const experienceArr : Array<IExpr> = experienceData.experience;
  const projectArr :  any = projectsData.projects;
  const skillArr :  Array<ISkill> = skillsData.skills;
  const skills: ISkillSet = skillArr.reduce((acc, skill) => ({...acc, [skill.id]: skill }), {});

  const [about, setAbout] = useState<IAbout | null>(null);

  useEffect(() => {
    setAbout(aboutData);
    
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleNav = (): void => {
    const classList: DOMTokenList | undefined = headerRef.current?.classList;
    classList?.value.split(' ').includes('hidden') ?
      headerRef.current?.classList.remove('hidden') :
      headerRef.current?.classList.add('hidden');
  }

  const toggleDarkMode = () : void => {
    const isDarkMode = !darkMode;
    setDarkMode(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  return (
    <div className="dark:bg-black dark:text-white text-center sm:w-full">
      <header className="w-full md:h-20 items-center md:flex bg-gray-900 dark:bg-black border-b-2 border-white text-white text-2xl fixed z-20">
        <div className="w-full md:w-1/3 flex justify-between">
          <div className="flex flex-row w-1/3 items-center">
            <div id="bulb-wrapper" className='cursor-pointer bg-white' title="dark mode switch" onClick={ toggleDarkMode } style={{borderRadius: '50%',height: '20px', width: '20px', marginLeft: '10px' }}>
              <MoonIcon id="bulb" className={`w-5 ${darkMode ? 'text-blue-400' : 'text-black'}`} />
            </div>
            <span className="md:ml-5 p-2 hover:bg-gray-700 cursor-pointer transition delay-150 duration-300 ease-in-out">
              <a href="#about-me">abi.dev</a>
            </span>
          </div>
          <MenuIcon className="md:hidden w-5 ml-10" onClick={ toggleNav } />
        </div>
        <div className="w-full md:w-2/3 hidden md:block" ref={ headerRef }>
          <nav className="">
            <ul className="list-none text-left  md:flex justify-end">
              <li key="skills" className="p-2 hover:bg-gray-700 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#skills">Skills</a></li>
              <li key="experiences" className="p-2  hover:bg-gray-700 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#experiences">Experiences</a></li>
              <li key="projects" className="p-2  hover:bg-gray-700 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#projects">Projects</a></li>
              <li key="contacts" className="p-2  hover:bg-gray-700 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#contacts">Contacts</a></li>
              <li key="resume" className="p-2  hover:bg-gray-700 cursor-pointer transition delay-150 duration-300 ease-out"><a href={ Resume } download="abi-resume.pdf" title='download resume'>resume</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <article className="filter drop-shadow">
        <section id="about-me" className="w-full md:h-screen pt-20 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 flex justify-center">
                <img className="rounded-full w-60 h-60 mb-4" src={about?.avatar} alt="abi's headshot"/>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4">{about?.greeting}</h2>
                <div className="text-lg">
                  {about?.bio.split('\n').map((paragraph, index) => <p key={index} className="mb-4">{paragraph}</p>)}
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/sulenchy" target="_blank" rel="noreferrer" className="hover:text-blue-500">Facebook</a>
                  <a href="https://www.github.com/sulenchy" target="_blank" rel="noreferrer" className="hover:text-blue-500">Github</a>
                  <a href="https://www.twitter.com/ababsul" target="_blank" rel="noreferrer" className="hover:text-blue-500">Twitter</a>
                  <a href="https://www.linkedin.com/in/abudu-abiodun-751b12b0/" target="_blank" rel="noreferrer" className="hover:text-blue-500">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full pt-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <header className="flex justify-center items-center mb-10">
              <ShieldCheckIcon className="h-10 w-10 text-blue-500" />
              <span className="pl-5 text-3xl text-opacity-95">Skills</span>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {skillArr.map(({ name, description }: ISkill, index) => (
                <div key={index} className="flex flex-col items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <ShieldCheckIcon className="h-16 w-16 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{name}</h3>
                  <p className="text-center">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="experiences" className="w-full pt-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <header className="flex justify-center items-center mb-10">
              <BriefcaseIcon className="h-10 w-10 text-blue-500" />
              <span className="pl-5 text-3xl text-opacity-95">Experiences</span>
            </header>
            <div className="relative">
              <div className="hidden md:block border-l-2 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
              {experienceArr.map((expr: IExpr, index) => (
                <div key={index} className={`mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
                  </div>
                  <div className="order-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-gray-800 dark:text-white text-xl">{expr.companyName}</h3>
                    <p className="text-base leading-snug tracking-wide text-gray-700 dark:text-gray-300">{expr.achievement}</p>
                    <p className="text-sm leading-snug tracking-wide text-gray-500 dark:text-gray-400">{expr.startDate} - {expr.endDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="w-full pt-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <header className="flex justify-center items-center mb-10">
              <DocumentReportIcon className="h-10 w-10 text-blue-500" />
              <span className="pl-5 text-3xl text-opacity-95">Projects</span>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectArr.map((project: IProject) => (
                <div key={project.id} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap mb-4">
                      {project.languages.map((lang: string, index: number) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">{lang}</span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <a href={project.links.github.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">View on Github</a>
                      {project.isDeployed && <a href={project.links.deployed} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">View Deployed</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contacts" className="w-full pt-20 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <header className="flex justify-center items-center mb-10">
              <ExternalLinkIcon className="h-10 w-10 text-blue-500" />
              <span className="pl-5 text-3xl text-opacity-95">Contacts</span>
            </header>
            <div className="flex flex-col md:flex-row justify-center">
              <div className="max-w-lg">
                <GoogleReCaptchaProvider reCaptchaKey="6Lf5heorAAAAACOqr5aDdrfSOaM0KRP_nhcaGk37">
                  <ContactForm />
                </GoogleReCaptchaProvider>
              </div>
            </div>
          </div>
        </section>
      </article>
      <footer className="bg-gray-900 dark:bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2025 abi.dev</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sulenchy" target="_blank" rel="noreferrer" className="hover:text-blue-500">Facebook</a>
              <a href="https://www.github.com/sulenchy" target="_blank" rel="noreferrer" className="hover:text-blue-500">Github</a>
              <a href="https://www.twitter.com/ababsul" target="_blank" rel="noreferrer" className="hover:text-blue-500">Twitter</a>
              <a href="https://www.linkedin.com/in/abudu-abiodun-751b12b0/" target="_blank" rel="noreferrer" className="hover:text-blue-500">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
