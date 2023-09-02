import React from 'react';
import styles from "./styles/orderSummary.module.css";
import ItemsAdded from './ItemsAdded';
import DiscountAndTotal from './DiscountAndTotal';

export default function OrderSummary() {
  return (
    <div className={styles.order_summary}>
        <ItemsAdded/>
        <DiscountAndTotal/>
    </div>
  )
}
