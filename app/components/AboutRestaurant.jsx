import React from 'react';
import styles from "../styles/aboutrestaurant.module.css";
import CoverImage from "./serve.jpg";
import Image from 'next/image';

export default function AboutRestaurant() {
  return (
    <div className={styles.main_about_container}>
        <h1>About Food Hub</h1>

        <div id="popular" className={styles.parallax}>
          <Image
            src={CoverImage}
            alt="About Image"
            placeholder="blur"
            quality={15}
            className={styles.cover_image}
          />

          <div className={styles.overlay}>
              <div className={styles.popular_show_description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.</p>  
              </div>
          </div>
        </div>
    </div>
  )
}
