import React from 'react';
import avatar from  './avatar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="w-full md:h-20 items-center md:flex bg-blue-400 text-white text-2xl fixed z-50">
        <div className="w-full md:w-1/3 flex  justify-between">
          <span className="md:ml-5 p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-in-out"><a href="#about-me">abi.dev</a></span>
          <span className="md:hidden">breadcrumb</span>
        </div>
        <div className="w-full md:w-2/3 hidden md:block">
          <nav className="list-none text-left  md:flex justify-end">
            <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out">Skills</li>
            <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out">Experiences</li>
            <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out">Projects</li>
            <li className="p-5 rounded-r-2xl hover:bg-blue-500 cursor-pointer transition delay-150 duration-300 ease-out">Contact</li>
          </nav>
        </div>
      </header>
      <article>
        <section id="about-me" className="w-full h-screen bg-about-image bg-repeat-round mix-blend-multiply">
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
        <section id="#skills" className="w-full h-screen">
          <header>
            <img src="" alt=""/>
            <span>Skills</span>
          </header>
        </section>
        <section id="#experiences" className="w-full h-screen">
          <header>
            <img src="" alt=""/>
            <span>Experiences</span>
          </header>
        </section>
        <section id="#projects" className="w-full h-screen">
          <header>
            <img src="" alt=""/>
            <span>Projects</span>
          </header>
        </section>
        <section id="#contacts" className="w-full h-screen">
          <header>
            <img src="" alt=""/>
            <span>Contacts</span>
          </header>
        </section>
      </article>
      <footer>
        <span>Design with <img className="inline" src="" alt="love"/> by me with ReactJs, TailwindCss and little bit of Typescript</span>
      </footer>
    </div>
  );
}

export default App;
