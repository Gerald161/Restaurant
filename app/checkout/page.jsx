"use client"

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
        
        <style jsx global>
        {
            `
            nav{
              position: relative;
            }

            nav div:nth-child(1) a div{
              background: url("/logo2.png") no-repeat center/cover;
            }

            nav div:nth-child(3) a:hover svg{
              color: black;
            }

            nav svg{
              color: black;
            }

            a{
              color: black;
            }

            .quick_nav{
              display: none;
            }

            .main{
              display: flex;
              border-top: solid 1px #ccc;
              margin-bottom: 5px;
            }
            `
        }
      </style>
    </div>
  )
}
