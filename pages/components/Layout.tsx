import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import {
  ExternalLinkIcon,
  HeartIcon,
  MenuIcon,
  MoonIcon
} from '@heroicons/react/solid'
import styles from './Layout.module.scss'
import { runInContext } from 'vm'

type Props = {
  children?: ReactNode
  title?: string
}

const darkModeSwitchHandler = () => {
  const body : HTMLElement = document.querySelector('body');
  const isDarkMode = body.classList.contains('darkMode');
  if (!isDarkMode) {
    body.classList.add('darkMode');
  } else {
    body.classList.remove('darkMode');
  }
}

const hamburgerhandler = () => {
  const hamburgerIcon : HTMLElement | null = document.getElementById('link-main-wrapper');
  const hamburgerIconStyles = window.getComputedStyle(hamburgerIcon);
  if (hamburgerIconStyles.display === 'none') {
    hamburgerIcon.style.display = 'block'
  } else {
    hamburgerIcon.style.display = 'none'
  }
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.body}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className={styles.nav}>
        <div className={styles.navHeader}>
          <div id="bulb-wrapper" title="dark mode switch" style={{ borderRadius: '50%',height: '20px', width: '20px', cursor: 'pointer', backgroundColor: '#fff' }}>
            <MoonIcon id="bulb" onClick={ darkModeSwitchHandler } />
          </div>
          <div style={{ paddingLeft: '10px' }}>
            <span>
              <Link href="/#home">
                <a>abi.dev</a>
              </Link>
            </span>
          </div>
        </div>
        <div className={styles.navBody}>
          <ul id="link-main-wrapper" className={styles.linkMainWrapper}>
            <li className={styles.link}>
              <Link href="/#skills">
                <a>Skills</a>
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="/#experience">
                <a>Experience</a>
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="/#projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="/#contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <div className={styles.hamburgerIcon} onClick={ hamburgerhandler }>
            <MenuIcon style={{ width: '15px', height: '15px' }}/>
          </div>
        </div>
      </nav>
    </header>
    <main className={styles.mainContainer}>
    {children}
    </main>
    <footer style={{ display: 'flex', justifyContent: 'center'}}>
    <span>Design with <HeartIcon style={{ width: '15px', height: '15px' }} /> by abi</span>
    </footer>
  </div>
)

export default Layout