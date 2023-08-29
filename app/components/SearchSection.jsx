import React from 'react';
import styles from "../styles/searchSection.module.css";

export default function SearchSection() {
  return (
    <main className={styles.main}>
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
