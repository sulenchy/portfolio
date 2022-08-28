import useSWR from 'swr';
import { BriefcaseIcon } from '@heroicons/react/solid';
import styles from './Skills.module.scss'
import { IExpr } from '../../utils/types';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Contacts() {
  const { data, error } = useSWR('/api/experience', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div id="contact" className={styles.skillsWrapper}>
      <header className={styles.header}>
        <BriefcaseIcon className={styles.shieldCheckIcon}/>
        <span className={styles.title}>Contacts</span>
      </header>
      <main>
        Facebook | Twitter | Google | LinkedIn 
      </main>
    </div>
  )
}
  export default Contacts;