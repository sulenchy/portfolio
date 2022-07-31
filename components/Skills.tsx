import useSWR from 'swr';
import styles from './Skills.module.scss'
import { ShieldCheckIcon } from '@heroicons/react/solid';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Skills() {
  const { data, error } = useSWR('/api/skills', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div id="skills" className={styles.skillsWrapper}>
      <header className={styles.header}>
        <ShieldCheckIcon className={styles.shieldCheckIcon}/>
        <span className={styles.title}>Skills</span>
      </header>
      <ul className={styles.listWrapper}>
        {
          Object.values(data).map((skill, index) => <li key={index} className={styles.list}>{skill.description}</li>)
        }
      </ul>
    </div>
  )
}
  export default Skills