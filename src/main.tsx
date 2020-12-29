import React, { useState } from 'react';
import WelcomeImage from './public/images/WelcomeImage.jpeg';

export default function main() {
  const [ copyright, setCopyright ] = useState<Date>(new Date());

  return (
    <div>
      <header id="main-header" className="fixed bg-blue-400 shadow-lg  z-50 w-full">
        <nav id="navbar" className="px-5 py-2 flex justify-between items-center">
          <a className="text-2xl text-white">My App</a>
              <ul className="flex">
                  <li>
                      <a className="text-white hover:bg-gray-700 px-3 rounded py-1" href="#welcome-section">About</a>
                  </li>
                  <li>
                      <a className="text-white hover:bg-gray-700 px-3 rounded py-1" href="#project-section">Work</a>
                  </li>
                  <li>
                      <a className="text-white hover:bg-gray-700 px-3 rounded py-1" href="#social-media">Contact</a>
                  </li>
              </ul>
          </nav>
      </header>
      <section id="welcome-section" className="h-screen flex items-center">
        <div className="col-half skew-y-20">
          <h1>Hey I'm Sulenchy</h1>
          <p className="text-green"><span className="profession"></span> I am a meticulous software engineer who loves using technology to be creative, innovative and solve real problems. I have 3+ years of experience in software engineering. I love getting things better.</p>
          <p style={{ color: 'green', borderBottom: '2px solid' } }>My stack is PERN(Postgres Express React and Node). I can write Javescript, Typescript and C#.</p>
        </div>
        <div className="col-half rotate">
          <img src={ WelcomeImage } alt="welcome image"/>
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
