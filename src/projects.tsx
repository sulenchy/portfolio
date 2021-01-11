import React from 'react';
import defaultImage from './public/images/WelcomeImage.jpeg';
import { truncateText, projectList } from './utils';

export default function projects() {
    return (
        <section id="Projects" className="lg:h-screen flex items-center flex-col pt-20">
          <h3 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Recent Works</span>
          </h3>
          <main className="container mx-auto px-4 pt-4 flex w-full flex-wrap justify-between">
            {
                projectList.map(project => 
                    <figure className="md:flex bg-gray-100 rounded-xl md:p-0 lg:w-5/12 shadow-lg m-10 mb-2 cursor-pointer h-72" onClick={ () => {} } key={ project.id }>
                        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ project.image || defaultImage } alt="" width="384" height="512" />
                        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <h1 id="project-title" className="font-semibold text-xl">{ project.title }</h1>
                        <blockquote>
                            <p id="project-desc" className="text-gray-500">
                                { truncateText( { len: 100, text: project.description }) }
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-cyan-600">
                            Technologies
                            </div>
                            <div id="project-technologies" className="text-gray-500">
                                { truncateText({ len: 50, text: project.technologies }) }
                            </div>
                        </figcaption>
                        </div>
                    </figure>
                )
            }
          </main>
      </section>
    )
}