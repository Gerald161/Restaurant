import React from 'react';
import styles from "../styles/searchSection.module.css";
import CoverImage from "./food.jpg";
import Image from 'next/image';

export default function SearchSection() {
  return (
    <main className={styles.main}>
      <Image
          src={CoverImage}
          alt="Restaurant Welcome Image"
          placeholder="blur"
          quality={15}
          className={styles.cover_image}
      />
      <div className={styles.overlay}>
        <h3>Welcome to the Food Hub</h3>

          <form id="searchForm" action="search.html?search=aa" method="get">
            <input type="text" name="" placeholder="Search for food..." id="searchInputField" required/>
            {/* <button><i class="fa-solid fa-magnifying-glass"></i></button> */}
          </form>
      </div>
    </main>
  )
}
