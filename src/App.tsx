import React from 'react';
import { ShieldCheckIcon, BriefcaseIcon, DocumentReportIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import avatar from  './avatar.jpg';
import './App.css';
import { skills } from './data';

function App() {
  console.log(skills)
  return (
    <div className="App">
      <header className="w-full md:h-20 items-center md:flex bg-blue-400 text-white text-2xl fixed z-50">
        <div className="w-full md:w-1/3 flex  justify-between">
          <span className="md:ml-5 p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-in-out"><a href="#about-me">abi.dev</a></span>
          <span className="md:hidden">breadcrumb</span>
        </div>
        <div className="w-full md:w-2/3 hidden md:block">
          <nav className="">
            <ul className="list-none text-left  md:flex justify-end">
              <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#skills">Skills</a></li>
              <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#experiences">Experiences</a></li>
              <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#projects">Projects</a></li>
              <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <article>
        <section id="about-me" className="w-full h-screen bg-about-image pt-20 bg-repeat-round mix-blend-multiply">
          <div className="w-60 h-60 absolute inset-24">
            <img className="rounded-full opacity-50" src={avatar} alt=""/>
            <span className="animate-ping absolute inline-flex h-10 w-10 rounded-full bg-blue-900 opacity-75"></span>
          </div>
          <div className="text-white text-3xl flex flex-col justify-center items-center w-1/2 h-screen m-auto space-x-9 font-serif p-5 relative">
            <h2>Hello, I am Abi</h2>
            <div className="text-2xl mt-10 font-light leading-10">
              <p>I am a software engineer and I major in Frontend. I am interested in automation of systems that leads to positivity.</p>
              <p>I program with Javascript, Typescript and c#(currently rusty). I am open to new opportunities especially ones that allow learning new skills set.</p>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full h-screen pt-20 flex flex-col justify-center items-center">
          <header className="flex justify-center items-center">
            <ShieldCheckIcon className="h-10 w-10 text-blue-500" />
            <span className="pl-5 text-3xl text-opacity-95">Skills</span>
          </header>
          <nav className="pl-10 md:w-2/3 flex-col mx-auto">
            <ul className="list-square text-2xl font-light leading-10">
              <li className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Programming with Javascript, Typescript and C#</li>
              <li className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Web development using ReactJS and Redux</li>
              <li className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Restful microservices development using NodeJS and express</li>
              <li className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Web scrapping using scrapping packages such as pupetteer</li>
              <li className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Mobile development using Java and React-Native</li>
              <li className="p-3 hover:bg-blue-500 hover:text-blue-200 transition delay-150 duration-300 ease-out">Containerization with Docker</li>
            </ul>
          </nav>
        </section>
        <section id="experiences" className="w-full h-screen pt-20 flex flex-col justify-center items-center">
          <header className="flex justify-center items-center">
            <BriefcaseIcon className="h-10 w-10 text-blue-500" />
            <span className="pl-5 text-3xl text-opacity-95">Experiences</span>
          </header>
          <div className="md:flex">
              <div className="mb-5 md:p-10 md:w-1/2">
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-black">Name of the company</div>
                    <div>
                      <span>Accomplishment</span>
                      <p className="text-gray-500">You have a new message!</p>
                      <span>start date - end date</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="projects" className="w-full h-screen pt-20 flex flex-col justify-center items-center">
          <header className="flex justify-center items-center">
            <DocumentReportIcon className="h-10 w-10 text-blue-500" />
            <span className="pl-5 text-3xl text-opacity-95">Projects</span>
          </header>
          <div className="md:flex">
              <div className="mb-5 md:p-10 md:w-1/2">
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
                  </div>
                  <div>
                    <div className="text-xl font-medium text-black">Project name</div>
                    <p className="text-gray-500">Description of the project</p>
                    <span>Tools</span>
                    <span>Github Link: ...(Private/Public)</span>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section id="contacts" className="w-full h-screen pt-20 flex flex-col justify-center items-center">
          <header className="flex justify-center items-center">
            <ExternalLinkIcon className="h-10 w-10 text-blue-500" />
            <span className="pl-5 text-3xl text-opacity-95">Contacts</span>
          </header>
          <nav className="md:flex">
            <ul className="list-none text-left  md:flex justify-end">
              <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="https://www.facebook.com/sulenchy" target="_blank" rel="noreferrer">Facebook</a></li>
              <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="https://www.github.com/sulenchy" target="_blank" rel="noreferrer">Github</a></li>
              <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="https://www.twitter.com/ababsul" target="_blank" rel="noreferrer">Twitter</a></li>
              <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out"><a href="https://www.linkedin.com/in/abudu-abiodun-751b12b0/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </nav>
        </section>
      </article>
      <footer>
        <span>Design with <img className="inline" src="" alt="love"/> by me with ReactJs, TailwindCss and little bit of Typescript</span>
      </footer>
    </div>
  );
}

export default App;
