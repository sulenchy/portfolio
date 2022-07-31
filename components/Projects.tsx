import useSWR from 'swr';
import styles from './Skills.module.scss'
import { DocumentReportIcon } from '@heroicons/react/solid';
import { IProject } from '../utils/types';
const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Skills() {
  const { data, error } = useSWR('/api/projects', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div id="projects" className={styles.skillsWrapper}>
      <header className={styles.header}>
        <DocumentReportIcon className={styles.shieldCheckIcon}/>
        <span className={styles.title}>Projects</span>
      </header>
      <main>
        {
          Object.values(data).map((project: IProject) => (
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
      </main>
    </div>
  )
}
  export default Skills