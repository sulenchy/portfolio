import useSWR from 'swr';
import { BriefcaseIcon } from '@heroicons/react/solid';
import styles from './Skills.module.scss'
import { skills } from '../utils/index'
import { IExpr } from '../utils/types';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Experience() {
  const { data, error } = useSWR('/api/experience', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div id="experience" className={styles.skillsWrapper}>
      <header className={styles.header}>
        <BriefcaseIcon className={styles.shieldCheckIcon}/>
        <span className={styles.title}>Experience</span>
      </header>
      <main>
        {
          Object.values(data).map((expr: IExpr, index) => (
            <div key={ `${expr.companyName}-${index}` } id={ expr.companyName } className="mb-5 p-5 md:p-10 md:flex hover:shadow text-left">
              <div>
                <h3>{ expr.companyName }</h3>
                <h4>{ expr.location }</h4>
                <span>{ expr.startDate } - { expr.endDate ? expr.endDate : 'current' }</span>
                <span><a href={`http://${expr.links.companyUrl}`} target="_blank" rel="noreferrer">{expr.links.companyUrl}</a></span>
              </div>
              <div>
                <div>
                  <span>Role</span>
                  <p>{expr.role}</p>
                </div>
                <div>
                  <span>Accomplishment</span>
                  <p>{expr.achievement}</p>
                </div>
                <div>
                  <span>Skills, Tools and specializations</span>
                  <p>{expr.skillsDemonstrated.map((skill: string, index) => (<span key={`${skill}-${index}`}>{skills[skill].name}, </span>))}</p>
                </div>
              </div>
            </div>
          ))
        }
      </main>
    </div>
  )
}
  export default Experience;