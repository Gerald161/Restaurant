import React, { useState } from 'react';
import styles from "./styles/itemsAdded.module.css";
import firstImage from "../Images/1.jpg";
import secondImage from "../Images/2.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ItemsAdded(){
    let data = [
        {
            image: firstImage,
            price: 12,
            name: "Noodles One Pack",
            value: "1"
        },
        {
            image: secondImage,
            price: 30,
            name: "Chocolate Cake",
            value: "3"
        },
    ];

    const [minVal, setMinVal] = useState("1");

    return (
        <div className={styles.items_added}>
            <h3>Order Summary</h3>

            <div className={styles.all_orders}>
                {
                    data.map((info,index)=>(
                        <div key={index} className={styles.item_ordered}>
                            <div className={styles.image_and_details_container}>
                                <Link href="/">
                                    <Image
                                        src={info.image}
                                        alt="Added Item Image"
                                        quality={20}
                                    />
                                </Link>

                                <div className={styles.item_details}>
                                    <p>{info.name}</p>

                                    <div className={styles.price_calculator_container}>
                                        <input type="number" onChange={(e)=>{}} placeholder="Num" value={minVal} min="1" name=""/>
                                        
                                        <p><span>{info.price}</span>$</p>
                                    </div>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}