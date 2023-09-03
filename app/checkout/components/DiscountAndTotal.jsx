import React from 'react';
import styles from "./styles/discount_and_total.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function DiscountAndTotal() {
  return (
    <div className={styles.discount_and_total}>
      <div className={styles.discounts}>
          <p>Delivery Address</p>

          <div className={styles.address_container}>
            <div className={styles.delivery_address_section}>
              <input className={styles.delivery_address} type="text" placeholder="Delivery Address" name=""/>
              <FontAwesomeIcon icon={faXmark} />
            </div>

            <div className={styles.address_suggestions}>

            </div>
          </div>

          <p>Gift Card/Discount Code</p>

          <div className={styles.discount_code_container}>
            <input type="text" placeholder="Discount" name=""/>

            <button>Apply</button>
          </div>
      </div>

      <div className={styles.total}>
          <div className={styles.total_item_and_description}>
            <p>Subtotal</p>
            <p>50.00$</p>
          </div>

          <div className={styles.total_item_and_description}>
            <p>Tax</p>
            <p>20.00$</p>
          </div>

          <div className={styles.total_item_and_description}>
            <p>Shipping</p>
            <p>0.00$</p>
          </div>

          <div className={styles.total_item_and_description}>
            <p>Total</p>
            <p>70.00$</p>
          </div>
        </div>
    </div>
  )
}