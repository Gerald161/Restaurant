import React from 'react';
import styles from "./styles/orderSummary.module.css";
import ItemsAdded from './ItemsAdded';
import DiscountAndTotal from './DiscountAndTotal';

async function getAllOrders(){
  var myHeaders = new Headers();

  myHeaders.append("Authorization", `Token ${process.env.TOKEN}`);

  const res = await fetch(
    `${process.env.API}food/order/`,
    {
      next: {
        revalidate: 0 //no caching of response
      },
      method: "GET",
      headers: myHeaders
    }
  );

  return res.json();
}

export default async function OrderSummary() {
  const data = await getAllOrders();

  return (
    <div className={styles.order_summary}>
        <ItemsAdded data={data}/>
        <DiscountAndTotal/>
    </div>
  )
}
