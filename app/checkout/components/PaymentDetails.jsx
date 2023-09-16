"use client"

import React from 'react';
import styles from "./styles/paymentDetails.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export default function PaymentDetails() {
  return (
    <div className={styles.payment}>
        <h3>Payment Details</h3>

        <div className={styles.payment_choice}>
          <label htmlFor="credit_card" className={styles.option}>
            <div className={styles.option_description}>
              <FontAwesomeIcon icon={faCreditCard} />

              <p>Credit Card</p>
            </div>
            
            <input id="credit_card" checked onChange={(e)=>{}} type="radio" name="payment_method" value=""/>
          </label>

          <label htmlFor="cash" className={styles.option}>
            <div className={styles.option_description}>
              <FontAwesomeIcon icon={faMoneyBill} />
              <p>Cash</p>
            </div>
            
            <input id="cash" type="radio" name="payment_method" value=""/>
          </label>
        </div>

        <div className={styles.card_information}>
          <div className={styles.card_user_info}>
            <p>CardHolder Name</p>

            <input type="text" placeholder="Enter card user" name=""/>
          </div>

          <div className={styles.card_user_info}>
            <p>Card Number</p>

            <input type="number" placeholder="Enter card number" name=""/>
          </div>
        </div>

        <div className={styles.card_information}>
          <div className={styles.card_user_info}>
            <p>Expiration Date</p>

            <div className={styles.expiration_section}>
              <input type="number" placeholder="MM" name=""/>
              <input type="number" placeholder="YY" name=""/>
            </div>
          </div>

          <div className={styles.card_user_info}>
            <p>CVV</p>

            <input type="number" placeholder="Enter card number" name=""/>
          </div>
        </div>

        <button className={styles.payment_button}>Pay $70.00</button>

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
