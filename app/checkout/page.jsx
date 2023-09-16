import React from 'react';
import Image from "next/image";
import styles from "./style.module.css";
import Pic from "./Images/6.png";
import OrderSummary from './components/OrderSummary';
import PaymentDetails from './components/PaymentDetails';

export default function page() {
  return (
    <div>
        <div className={styles.order_icon_container}>
          <Image
            src={Pic}
            alt="Food Image"
            quality={30}
          />

          <h3>All Orders</h3>
        </div>

        <OrderSummary/>

        <PaymentDetails/>
    </div>
  )
}
