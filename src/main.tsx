import React, { useState } from 'react';
import Header from './header';
import WelcomeImage from './public/images/WelcomeImage.jpeg';
// Todo 1: take an array of recent works and loop through them in 

export default function main() {
  const [ copyright, setCopyright ] = useState<Date>(new Date());

  return (
    <div>
      <Header />

      <section id="welcome-section" className="lg:h-screen flex items-center lg:flex-row flex-col pt-20">
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
      <section id="project-section" className="lg:h-screen flex items-center flex-col pt-20">
          <h3 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Recent Works</span>
          </h3>
          <main className="container mx-auto px-4 pt-4 flex w-full flex-wrap justify-between">
            <figure className="md:flex bg-gray-100 rounded-xl md:p-0 lg:w-5/12 shadow-lg m-10">
              <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ WelcomeImage } alt="" width="384" height="512" />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <h1 className="font-semibold text-xl">Vertical Search Engine For School Research</h1>
                <blockquote>
                  <p className="text-gray-500">
                  A vertical search engine for students who want to apply for postgraduate research studies and look for potential supervisors at the following UK university: Imperial, lancaster and coventry university. It is a web scrapper.
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-cyan-600">
                    Technologies
                  </div>
                  <div className="text-gray-500">
                  Nodejs, expressJs, cheerio, requestJs and minisearch
                  </div>
                </figcaption>
              </div>
            </figure>
            <figure className="md:flex bg-gray-100 rounded-xl md:p-0 lg:w-5/12 shadow-lg m-10">
              <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ WelcomeImage } alt="" width="384" height="512" />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <h1 className="font-semibold text-xl">Edugate(Backend)</h1>
                <blockquote>
                  <p className="text-gray-500">
                  Edugate centers around providing result management system to schools expecially high school.
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-cyan-600">
                    Technologies
                  </div>
                  <div className="text-gray-500">
                    Nodejs, Javascript, express, sequelize, Postgres, nodemailer, excel, mailgun-js, mocha and chai
                  </div>
                </figcaption>
              </div>
            </figure>
            <figure className="md:flex bg-gray-100 rounded-xl md:p-0 lg:w-5/12 shadow-lg m-10">
              <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ WelcomeImage } alt="" width="384" height="512" />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <h1 className="font-semibold text-xl">Edugate(Frontend)</h1>
                <blockquote>
                  <p className="text-gray-500">
                    Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-cyan-600">
                    Technologies
                  </div>
                  <div className="text-gray-500">
                    Nodejs, Javascript ...
                  </div>
                </figcaption>
              </div>
            </figure>
          </main>
      </section>
      <section id="social-media" className="lg:h-screen flex items-center flex-col pt-40">
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
