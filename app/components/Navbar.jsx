import React from 'react';
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from 'next/image';
import Logo from "./logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_section}>
        <Link href="/">
          <Image
            src={Logo}
            alt="Restaurant Logo"
            placeholder="blur"
            className={styles.logo_img}
            quality={30}
          />

          <p>Food Hub</p>
        </Link>
      </div>

      <div>
        <Link href="#" className={styles.nav_link}>
          Meal
        </Link>
        <a href="#diets" className={styles.nav_link}>
          Diets
        </a>
        <Link href="#" className={styles.nav_link}>
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
