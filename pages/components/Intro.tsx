import useSWR from 'swr';
import Image from 'next/image'
import styles from './Intro.module.scss'
import photo from '../../public/images/Abiodun_Abudu.jpg';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Intro() {
  const { data, error } = useSWR('/api/skills', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  
  return (
    <div id="home" className={styles.introWrapper}>
      <div className={styles.textPart}>
        <p>Hello, I am Abi</p>
        <p>I am a fullstack software engineer. I am interested in automation of systems.

I program with Javascript, Typescript and c#(currently rusty). I am open to new opportunities especially ones that involves learning new skills set.</p>
        <div className={styles.skillsWrapper}>
          {
            Object.values(data).map((skill, index) => 
              <div className={styles.skill} key={index}>{`${skill.name} ${skill.yearsOfExperience} yrs`}</div>
          )}
        </div>
      </div>
      <div className={styles.imagePart}>
        <Image
          src={photo}
          alt="Picture of abi"
          width={500}
          height={500}
          style={{ borderRadius: '50%' }}
        />
      </div>
    </div>
  )
}
  export default Intro;