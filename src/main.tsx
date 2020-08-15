// message.ts
import * as React from 'react';

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
                      <a href="#social-media">Contact</a>
                  </li>
              </ul>
          </nav>
        </header>
        <section id="welcome-section">
          <h1>Hey I'm Sulenchy</h1>
          <p className="text-green"><span className="profession"></span> I am a meticulous software engineer who loves using technology to be creative, innovative and solve real problems. I have 3+ years of experience in software engineering. I love getting things better.</p>
        </section>
        <section id="project-section">
          <header className="project-title">
              <h3>These are some of my projects..</h3>
          </header>
          
          <article className="projects">
            <div className="card">
                <a href="#">
                    <img src="#" alt="#" />
                </a>
                <footer>
                    <p>Name of the project</p>
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
            <div className="card">
                <a href="#">
                    <img src="#" alt="#" />
                </a>
                <footer>
                    <p>Name of the project</p>
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