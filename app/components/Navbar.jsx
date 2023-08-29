import React from 'react';
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from 'next/image';
import Logo from "./logo.png";

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
          />

          <p>Food Hub</p>
        </Link>
      </div>

      <div>
        <Link href="#" className={styles.nav_link}>
          Meal
        </Link>
        <Link href="#" className={styles.nav_link}>
          Diets
        </Link>
        <Link href="#" className={styles.nav_link}>
          Upload
        </Link>
      </div>

      <div className={styles.sign_options}>
        <Link href="#">Login</Link>
        <Link href="#">Join</Link>
      </div>
    </nav>
  )
}
