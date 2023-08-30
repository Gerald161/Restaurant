import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.foot}>
          <h2>Contact Us</h2>
          <a href="tel: +1245894738">Phone: +1245894738</a>
          <a href="mailto: foodhub@gmail.com">Email: foodhub@gmail.com</a>
        </div>
        <div className={styles.foot}>
          <h2>Follow Us</h2>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube}/>
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </div>
        <div className={styles.foot}>
          <h2>Newsletter</h2>

          <div className={styles.newsletter}>
            <input type="text" placeholder="Enter your email" name=""/>

            <a href="#">Subscribe</a>
          </div>
        </div>
      </footer>
      <p className={styles.copyright}>Copyright FoodHub 2023 All rights reserved</p>
    </div>
  )
}
