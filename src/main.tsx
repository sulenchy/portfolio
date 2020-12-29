import React, { useState } from 'react';
import WelcomeImage from './public/images/WelcomeImage.jpeg';

export default function main() {
  const [ copyright, setCopyright ] = useState<Date>(new Date());

  return (
    <div>
      <header id="main-header" className="fixed bg-blue-400 shadow-lg  z-50 w-full">
        <nav id="navbar" className="px-5 py-2 flex justify-between items-center">
          <a className="text-2xl text-white" href="/"><img src={ WelcomeImage } className="w-16" alt="Logo for sulenchy"/></a>
              <ul className="flex">
                  <li>
                      <a className="text-white hover:bg-indigo-200 px-3 rounded py-1" href="#welcome-section">About</a>
                  </li>
                  <li>
                      <a className="text-white hover:bg-indigo-200 px-3 rounded py-1" href="#project-section">Work</a>
                  </li>
                  <li>
                      <a className="text-white hover:bg-indigo-200 px-3 rounded py-1" href="#social-media">Contact</a>
                  </li>
              </ul>
          </nav>
      </header>
      <section id="welcome-section" className="h-screen flex items-center lg:flex-row flex-col">
        <main className="w-1/2 mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 align-center">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hey, I'm Sulenchy. I code with </span>
              <span className="block text-indigo-600 xl:inline">js and ts</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            I am a meticulous software engineer who loves using technology to be creative, innovative and solve real problems. I have 3+ years of experience in software engineering. I love getting things better.
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Proficiency: React, Node, ExpressJs, Postgres, Rest API.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <a href="mailto:sulaimanabiodun172@gmail.com?subject=Hi%20,%20can%20we%20work%20together&body=Add%20your%20content%20here.%20Please,%20be%20brief." className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Mail me
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="https://github.com/sulenchy" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Github
                </a>
              </div>
            </div>
          </div>
        </main>
        <div className="w-1/2 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={ WelcomeImage } alt="" />
        </div>
      </section>
      <section id="project-section" className="h-screen flex">
        <header className="project-title">
            <h3>These are some of my recent projects..</h3>
        </header>
        
        <article className="projects">
          <div className="card">
              <a href="#">
                  <img src="#" alt="#" />
              </a>
              <footer>
                  <p>Web scrapper</p>
              </footer>                
          </div>
          <div className="card">
              <a href="#">
                  <img src="#" alt="#" />
              </a>
              <footer>
                  <p>Edugate(Backend)</p>
              </footer>
          </div>
          <div className="card">
              <a href="#">
                  <img src="#" alt="#" />
              </a>
              <footer>
                  <p>Edugate(Frontend)</p>
              </footer>
          </div>
          <div className="card">
              <a href="#">
                  <img src="#" alt="#" />
              </a>
              <footer>
                  <p>Name of the project</p>
              </footer>
          </div>
          <div className="control">
              <input type="button" className="btn" value="Show all" />
          </div>
        </article>
      </section>
      <section id="social-media" className="h-screen flex">
        <h1>Let's work together...</h1>
        <p>How do you take your coffee?</p>
        <div id="social-link">
            <a href="https://web.facebook.com/sulenchy/" target="_blank">Facebook</a>
            <a href="https://github.com/sulenchy" target="_blank">Github</a>
            <a href="https://twitter.com/ababsul" target="_blank">Twitter</a>
            <a href="https://www.linkedin.com/in/abudu-abiodun-751b12b0/" target="_blank">LinkedIn</a>
        </div>
      </section>
      <footer id="footer" className="bg-blue-400 shadow-lg  z-50 w-full text-white text-center">
          <p>Copyright &copy; { copyright.getFullYear() }</p>
      </footer>
    </div>
  );
}
