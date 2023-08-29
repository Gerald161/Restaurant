import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div class="foot">
        <h2>Contact Us</h2>
        {/* <a href="tel: +1245894738">Phone: +1245894738</a>
        <a href="mailto: foodhub@gmail.com">Email: foodhub@gmail.com</a> */}
      </div>
      <div class="foot social_media">
        <h2>Follow Us</h2>
        <Link href="#">
          <FontAwesomeIcon icon={faTwitter}/>
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faTwitter}/>
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faTwitter}/>
        </Link>
      </div>
      <div class="foot">
        <h2>Newsletter</h2>
        {/* <input style="padding: 7px 6px; width: 250px;" type="text" placeholder="Enter your email" name=""/>
        <a href="">Subscribe</a> */}
      </div>
    </footer>
  )
}
