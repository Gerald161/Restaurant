import React from 'react';
import styles from "./styles/secondSection.module.css";

export default function SecondSection() {
  return (
    <div className={styles.second_section}>
      <h3>Description</h3>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor.</p>

      <p><span className={styles.price}>Price:</span><span>20</span>$</p>

      <div>
        <label htmlFor="amount">Number:</label>
        <input id="amount" type="number" min="1" name=""/>
      </div>

      <button>Add to Orders</button>
    </div>
  )
}
