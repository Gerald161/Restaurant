"use client"

import React, { useState } from 'react';
import styles from "./styles/itemsAdded.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ItemsAdded({data}){
    const [orders, setOrders] = useState(data);

    const [prices, setPrices] = useState(data.map((info)=>(info.price * info.amount)))

    async function increaseOrderCount(slug, amount, index){
        if(amount.trim() !== "" && parseInt(amount) !== 0){
            const oldPrices = [...prices];

            oldPrices.splice(index, 1, parseInt(amount) * orders[index].price);

            setPrices(oldPrices);

            var myHeaders = new Headers();

            myHeaders.append("Authorization", `Token ${process.env.NEXT_PUBLIC_TOKEN}`);

            var formdata = new FormData();

            formdata.append("amount", amount);

            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: formdata,
            };

            const res = await fetch(`${process.env.NEXT_PUBLIC_API}food/order/${slug}`, requestOptions);

            const data = await res.json();

            if(data["status"] === "updated"){
                console.log("It is done")
            }
        }
    }

    async function removeOrder(slug, index){
        const oldOrders = [...orders];

        oldOrders.splice(index, 1);

        setOrders(oldOrders);

        var myHeaders = new Headers();

        myHeaders.append("Authorization", `Token ${process.env.NEXT_PUBLIC_TOKEN}`);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}food/order/${slug}`, requestOptions);

        const data = await res.json();

        if(data["status"] === "deleted"){
            console.log("Your order is gone, blown to bits, reduced to atoms")
        }
    }

    return (
        <div className={styles.items_added}>
            <h3>Order Summary</h3>

            <div className={styles.all_orders}>
                {
                    orders.length > 0 ? orders.map((order,index)=>(
                        <div key={index} className={styles.item_ordered}>
                            <div className={styles.image_and_details_container}>
                                <Link href={`/food/${order["slug"]}`}>
                                    <img src={`http://127.0.0.1:8000/media/${order["image"]}`} alt="Added Item Image"/>
                                </Link>

                                <div className={styles.item_details}>
                                    <p>{order.name}</p>

                                    <div className={styles.price_calculator_container}>
                                        <input type="number" onChange={(e)=>{increaseOrderCount(order["slug"], e.target.value, index)}} placeholder="Amount" defaultValue={order.amount} min="1" name=""/>
                                        
                                        <p><span>{prices[index]}</span>$</p>
                                    </div>
                                </div>
                            </div>
                            <FontAwesomeIcon onClick={()=>{removeOrder(order["slug"], index)}} icon={faXmark} />
                        </div> 
                    )) : <p>No orders have been made</p>
                }
            </div>
        </div>
    )
}