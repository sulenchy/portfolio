import React, { useState } from 'react';
import Header from './header';
import Projects from './projects';
import WelcomeImage from './public/images/WelcomeImage.jpeg';
// Todo 1: take an array of recent works and loop through them in 

export default function main() {
  const [ copyright, setCopyright ] = useState<Date>(new Date());

  return (
    <div>
      <Header />
      <section id="About" className="lg:h-screen flex items-center lg:flex-row flex-col pt-20">
        <main className="lg:w-1/2 mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 align-center">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Hey, I'm Sulenchy. </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            I am a meticulous software engineer who loves using technology to be creative, innovative and solve real problems. I have 3+ years of experience in software engineering. I am passionate about building from scratch and getting things better.
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            I am proficient at React, Node, ExpressJs, Postgres, Rest API, Javascript.
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              I am an employee of <a className="text-blue-300 hover:text-blue-700" href="https://www.andela.com" target="_blank">Andela</a> working with <a className="text-blue-300 hover:text-blue-700" href="https://www.snaps.io" target="_blank">Snaps</a>. For your info, Snaps is a client of Andela. Most times in Snaps, I work on the frontend app.
            </p>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
              I am open to work with you.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <a href="mailto:sulaimanabiodun172@gmail.com?subject=Hi%20,%20can%20we%20work%20together&body=Tell%20me%20more%20how%20we%20can%20collaborate.%20Please,%20be%20brief." className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
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
      <Projects />
      <section id="Contact" className="lg:h-screen flex items-center flex-col pt-40">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">Let's work together...</h1>
        <p>How do you take your coffee?</p>
        <div className="flex flex-wrap pt-10" id="social-link">
          <a className="lg:w-auto w-full m-2 text-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10" href="https://web.facebook.com/sulenchy/" target="_blank">Facebook</a>
          <a className="lg:w-auto w-full m-2 text-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10" href="https://github.com/sulenchy" target="_blank">Github</a>
          <a className="lg:w-auto w-full m-2 text-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10" href="https://twitter.com/ababsul" target="_blank">Twitter</a>
          <a className="lg:w-auto w-full m-2 text-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10" href="https://www.linkedin.com/in/abudu-abiodun-751b12b0/" target="_blank">LinkedIn</a>
        </div>
      </section>
      <footer id="footer" className="bg-blue-400 shadow-lg  z-50 w-full text-white text-center">
          <p>Copyright &copy; { copyright.getFullYear() }</p>
      </footer>
    </div>
  );
}
