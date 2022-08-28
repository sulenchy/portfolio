import useSWR from 'swr';
import { Layout, Experience, Skills, Projects, Intro, Contacts } from './components';

import 'normalize.css/normalize.css';
import './style.scss';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function HomePage() {

  return (
    <Layout title="abi.dev">
      <>
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </>
    </Layout>
  )
}
  export default HomePage