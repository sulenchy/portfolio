import React, { useRef, useState } from 'react';
import Resume from './resume.pdf';
import {
  ShieldCheckIcon,
  BriefcaseIcon,
  DocumentReportIcon,
  ExternalLinkIcon,
  HeartIcon,
  MenuIcon,
  MoonIcon
} from '@heroicons/react/solid'
import avatar from  './avatar.jpg';
import { 
  IExpr,
  IProject,
  ISkill,
  getSkillArr,
  getProjectArr,
  getExprArr,
  skills } from './data';

function App() {
  const headerRef = useRef<HTMLDivElement>(null);
  const experienceArr : Array<IExpr> = getExprArr();
  const projectArr :  Array<IProject> = getProjectArr();
  const skillArr :  Array<ISkill> = getSkillArr();

  const [darkMode, setDarkMode] = useState(false);

  const toggleNav = (): void => {
    const classList: DOMTokenList | undefined = headerRef.current?.classList;
    classList?.value.split(' ').includes('hidden') ?
      headerRef.current?.classList.remove('hidden') :
      headerRef.current?.classList.add('hidden');
  }

  const toggleDarkMode = () : void => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark')
  }
  
  return (
    <div className="dark:bg-black dark:text-white text-center sm:w-full">
      <header className="w-full md:h-20 items-center md:flex bg-blue-400 dark:bg-black border-b-2 border-white text-white text-2xl fixed z-20">
        <div className="w-full md:w-1/3 flex  justify-between">
          <div className="flex flex-row w-1/3 items-center">
            <div id="bulb-wrapper" className='cursor-pointer bg-white' title="dark mode switch" onClick={ toggleDarkMode } style={{ borderRadius: '50%',height: '20px', width: '20px', marginLeft: '10px' }}>
              <MoonIcon id="bulb" className={`w-5 ${darkMode ? 'text-blue-400' : 'text-black'}`} />
            </div>
            <span className="md:ml-5 p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-in-out">
              <a href="#about-me">abi.dev</a>
            </span>
          </div>
          <MenuIcon className="md:hidden w-5 ml-10" onClick={ toggleNav } />
        </div>
        <div className="w-full md:w-2/3 hidden md:block" ref={ headerRef }>
          <nav className="">
            <ul className="list-none text-left  md:flex justify-end">
              <li key="skills" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#skills">Skills</a></li>
              <li key="experiences" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#experiences">Experiences</a></li>
              <li key="projects" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#projects">Projects</a></li>
              <li key="contacts" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#contacts">Contacts</a></li>
              <li key="resume" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href={ Resume } download="abi-resume.pdf" title='download resume'>resume</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <article className="filter drop-shadow">
        <section id="about-me" className="w-full md:h-screen bg-about-image pt-20 md:bg-repeat-round mix-blend-multiply" style={{
          backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
        }}>
          <div className="w-60 h-60 absolute inset-24">
            <img className="rounded-full opacity-50" src={avatar} alt=""/>
            <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-blue-900 opacity-75"></span>
          </div>
          <div className="text-white text-3xl flex flex-col justify-center items-center md:w-2/3 md:h-screen m-auto space-x-9 font-serif p-5 relative">
            <h2>Hello, I am Abi</h2>
            <div className="text-2xl mt-10 font-light leading-10" style={{ marginLeft: '0' }}>
              <p>I am a fullstack software engineer. I am interested in automation of systems.</p>
              <p>I program with Javascript, Typescript and c#(currently rusty). I am open to new opportunities especially ones that allow learning new skills set.</p>
            </div>
            <div className="flex justify-start text-sm" style={{ marginLeft: '0' }}>
              <ul className="text-black flex flex-wrap items-center justify-center">
                {
                skillArr.map(({ name, yearsOfExperience }: ISkill, index) => (
                  <li key={ `${name}-${index}` } id={ name } className="h-50 rounded bg-gray-400 m-1 p-5">{ name } { yearsOfExperience } yrs</li>
                ) )
              }
              </ul>
              
            </div>
          </div>
        </section>
        <section id="skills" className="w-full md:h-screen pt-20 flex flex-col justify-center items-center">
          <header className="flex justify-center items-center">
            <ShieldCheckIcon className="h-10 w-10 text-blue-500" />
            <span className="pl-5 text-3xl text-opacity-95">Skills</span>
          </header>
          <nav className="pl-10 md:w-2/3 flex-col mx-auto">
            <ul className="list-square text-2xl font-light leading-10 flex flex-wrap flex-col">
              <li key="skill1" className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Programming with Javascript, Typescript and C#</li>
              <li key="skill2" className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Web development using ReactJS and Redux</li>
              <li key="skill3" className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Restful microservices development using NodeJS and express</li>
              <li key="skill4" className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Web scrapping using scrapping packages such as pupetteer</li>
              <li key="skill5" className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Mobile development using Java and React-Native</li>
              <li key="skill6" className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Containerization with Docker</li>
            </ul>
          </nav>
        </section>
        <section id="experiences" className="w-full md:h-screen pt-20 flex flex-col justify-center items-center">
          <header className="flex justify-center items-center">
            <BriefcaseIcon className="h-10 w-10 text-blue-500" />
            <span className="pl-5 text-3xl text-opacity-95">Experiences</span>
          </header>
          <div className="flex flex-col w-full md:p-10 p-2">
            {
                experienceArr.map((expr: IExpr, index) => (
                  <div key={ `${expr.companyName}-${index}` } id={ expr.companyName } className="mb-5 p-5 md:p-10 md:flex hover:shadow text-left">
                    <div className="md:w-1/3">
                      <h3 className="text-blue-500 text-xl">{ expr.companyName }</h3>
                      <h4>{ expr.location }</h4>
                      <span className="text-gray-400">{ expr.startDate } - { expr.endDate ? expr.endDate : 'current' }</span>
                      <span className="text-blue-400 block"><a href={`http://${expr.links.companyUrl}`} target="_blank" rel="noreferrer">{expr.links.companyUrl}</a></span>
                    </div>
                    <div className="md:w-2/3">
                      <div className="mb-5">
                        <span>Role</span>
                        <p className="text-gray-400">{expr.role}</p>
                      </div>
                      <div className="mb-5">
                        <span>Accomplishment</span>
                        <p className="text-gray-400">{expr.achievement}</p>
                      </div>
                      <div className="mb-5">
                        <span>Skills, Tools and specializations</span>
                        <p className="text-gray-400">{expr.skillsDemonstrated.map((skill: string, index) => (<span key={`${skill}-${index}`}>{skills[skill].name}, </span>))}</p>
                      </div>
                    </div>
                  </div>
                  ))
                }
          </div>
        </section>
        <section id="projects" className="w-full md:h-screen flex flex-col justify-center items-center">
          <header className="flex justify-center items-center">
            <DocumentReportIcon className="h-10 w-10 text-blue-500" />
            <span className="pl-5 text-3xl text-opacity-95">Projects</span>
          </header>
          <div className="flex flex-col w-full">
              <div className="mb-5 md:flex items-center justify-center flex-wrap md:w-full">
                {
                    projectArr.map((project: IProject) => (
                      <div key={ project.name } id={ project.name } className="md:w-2/5 m-2 p-5 rounded transition delay-150 duration-300 ease-out text-left drop-shadow filter hover:shadow">
                        <div>
                          <span className="text-xl font-medium text-black dark:text-white">{project.name}</span>
                          <p className="text-gray-500 text-justify">{project.description}</p>
                          <div>
                            <span className="font-medium text-black dark:text-white">Technologies</span>
                            <ul className="my-2 text-gray-500 flex flex-wrap">{ project.languages.map((lang: string, index) => (<li key={ `${index}-${lang}-${project.name}` } className="inline p-2 mr-2">{lang}</li>))}</ul>
                          </div>
                          <div>
                            <span className="font-medium text-black dark:text-white block">Github Link</span>
                            <a href={ project.links.github.link } target="_blank" rel="noreferrer" className="my-2 text-blue-500">{ `${ project.links.github.link } (${ project.links.github.githubType })`}</a>
                          </div>
                        </div>
                      </div>
                    ))
                  }
              </div>
          </div>
        </section>
        <section id="contacts" className="w-full md:h-screen pt-20 flex flex-col justify-center items-center">
          <header className="flex justify-center items-center">
            <ExternalLinkIcon className="h-10 w-10 text-blue-500" />
            <span className="pl-5 text-3xl text-opacity-95">Contacts</span>
          </header>
          <nav className="md:flex">
            <ul className="list-none text-left  md:flex justify-end">
              <li key="facebook" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="https://www.facebook.com/sulenchy" target="_blank" rel="noreferrer">Facebook</a></li>
              <li key="github" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="https://www.github.com/sulenchy" target="_blank" rel="noreferrer">Github</a></li>
              <li key="twitter" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="https://www.twitter.com/ababsul" target="_blank" rel="noreferrer">Twitter</a></li>
              <li key="linkedIn" className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="https://www.linkedin.com/in/abudu-abiodun-751b12b0/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </nav>
        </section>
      </article>
      <footer  className="text-center">
        <span>Design with <HeartIcon className="inline w-5" /> by abi with ReactJs, TailwindCss and little bit of Typescript</span>
      </footer>
    </div>
  );
}

export default App;
