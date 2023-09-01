import React from 'react';
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_section}>
        <Link href="/">
          <div className={styles.logo}></div>

          <p>Food Hub</p>
        </Link>
      </div>

      <div className='quick_nav'>
        <Link href="/checkout" className={styles.nav_link}>
          Checkout
        </Link>
        <a href="#diets" className={styles.nav_link}>
          Diets
        </a>
        <Link href="/upload" className={styles.nav_link}>
          Upload
        </Link>
      </div>

      <div className={styles.sign_options}>
        <Link href="#">Login</Link>
        <Link href="#">Join</Link>
      </div>

      <FontAwesomeIcon icon={faBars} />
    </nav>
  )
}
