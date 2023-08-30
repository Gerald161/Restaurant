"use client"

import React from 'react';
import styles from "../../styles/mealtypeselectiontab.module.css";

export default function MealTypeSelectionTab() {
  return (
    <nav className={styles.nav}>
        <button data-id="breakfast">Breakfast</button>
        <button data-id="lunch">Lunch</button>
        <button data-id="supper">Supper</button>
        <button data-id="drink">Drinks</button>
        <button data-id="snack">Snacks</button>
    </nav>
  )
}
