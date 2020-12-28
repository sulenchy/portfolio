// message.ts
import * as React from 'react';
import WelcomeImage from './public/images/WelcomeImage.jpeg';

export default class main extends React.Component {
  copyright: Date = new Date();

  
  render () {
    return (
      <div>
        <header id="header">
          <nav id="navbar">
              <ul>
                  <li>
                      <a href="#welcome-section">About</a>
                  </li>
                  <li>
                      <a href="#project-section">Work</a>
                  </li>
                  <li>
                      <a href="#social-media">Conthdv hxbccxct</a>
                  </li>
              </ul>
          </nav>
        </header>
        <section id="welcome-section">
          <div className="col-half skew-y-20">
            <h1>Hey I'm Sulenchy</h1>
            <p className="text-green"><span className="profession"></span> I am a meticulous software engineer who loves using technology to be creative, innovative and solve real problems. I have 3+ years of experience in software engineering. I love getting things better.</p>
            <p style={{ color: 'green', borderBottom: '2px solid' } }>My stack is PERN(Postgres Express React and Node). I can write Javescript, Typescript and C#.</p>
          </div>
          <div className="col-half rotate">
            <img src={ WelcomeImage } alt="welcome image"/>
          </div>
        </section>
        <section>
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
            </div>
            <div>
              <div className="text-xl font-medium text-black">ChitChat</div>
              <p className="text-gray-500">You have a new message!</p>
            </div>
          </div>
          <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src={ WelcomeImage } alt="Woman's Face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p className="text-gray-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>
        </section>
        <section id="project-section">
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
        <section id="social-media">
          <h1>Let's work together...</h1>
          <p>How do you take your coffee?</p>
          <div id="social-link">
              <a href="https://web.facebook.com/sulenchy/" target="_blank">Facebook</a>
              <a href="https://github.com/sulenchy" target="_blank">Github</a>
              <a href="https://twitter.com/ababsul" target="_blank">Twitter</a>
              <a href="https://www.linkedin.com/in/abudu-abiodun-751b12b0/" target="_blank">LinkedIn</a>
          </div>
        </section>
        <footer id="footer">
            <p>Copyright &copy; { this.copyright.getFullYear() }</p>
        </footer>
      </div>
    );
  }
}
