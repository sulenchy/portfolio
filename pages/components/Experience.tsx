import useSWR from 'swr';
import { BriefcaseIcon } from '@heroicons/react/solid';
import styles from './Experience.module.scss'
import { skills } from '../../utils/index'
import { IExpr } from '../../utils/types';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Experience() {
  const { data, error } = useSWR('/api/experience', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div id="experience" className={styles.experienceWrapper}>
      <header className={styles.header}>
        <BriefcaseIcon className={styles.shieldCheckIcon}/>
        <span className={styles.title}>Experience</span>
      </header>
      <div className={styles.slider}>
        <header>
          <ul className={styles.listWrapper}>
            <li><a className={styles.listItem} href="#slide-1">1</a></li>
            <li><a className={styles.listItem} href="#slide-2">2</a></li>
          </ul>
        </header>
        <div className={styles.slides}>
          {
            Object.values(data).map((expr: IExpr, index) => (
              <div key={ `${expr.companyName}-${index}` } id={ `slide-${index+1}` } className={styles.slide}>
                <div className={styles.col}>
                  <h3>{ expr.companyName }</h3>
                  <h4>{ expr.location }</h4>
                  <span>{ expr.startDate } - { expr.endDate ? expr.endDate : 'current' }</span>
                  <span><a href={`http://${expr.links.companyUrl}`} target="_blank" rel="noreferrer">{expr.links.companyUrl}</a></span>
                </div>
                <div className={styles.col}>
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
        </div>
      </div>
    </div>
  )
}
  export default Experience;