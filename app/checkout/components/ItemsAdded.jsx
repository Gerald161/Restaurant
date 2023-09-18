"use client"

import React, { useEffect, useState } from 'react';
import styles from "./styles/itemsAdded.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { decrement } from "../../redux/counter";

export default function ItemsAdded({data}){
    const [orders, setOrders] = useState(data);

    const [prices, setPrices] = useState(data.map((info)=>(info.price * info.amount)))

    const [totalPrice, setTotalPrice] = useState(0);

    const dispatch = useDispatch();

    const calculateTotalPrice = () => {
        const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        setTotalPrice(total);
    };

    async function increaseOrderCount(slug, amount, index){
        if(amount.trim() !== "" && parseInt(amount) !== 0){
            const oldPrices = [...prices];

            oldPrices.splice(index, 1, parseInt(amount) * orders[index].price);

            setPrices(oldPrices);

            calculateTotalPrice();

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
        dispatch(decrement())

        const oldOrders = [...orders];

        oldOrders.splice(index, 1);

        const oldPrices = [...prices];

        oldPrices.splice(index, 1);

        setPrices(oldPrices);

        calculateTotalPrice();

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

    useEffect(() => {
        calculateTotalPrice();
    }, [prices]);

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

            <div className={styles.discount_place}>
                <p style={{padding: "0 1.2em"}}>Gift Card/Discount Code</p>

                <div className={styles.discount_code_container}>
                    <input type="text" placeholder="Discount" name=""/>

                    <button>Apply</button>
                </div>

                <div className={styles.total}>
                    <div className={styles.total_item_and_description}>
                        <p>Total</p>
                        <p>{totalPrice}$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}