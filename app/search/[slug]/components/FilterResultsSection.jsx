import React from 'react';
import styles from "../styles/filterResultsSection.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from "next/legacy/image";
import Link from "next/link";

export default function FilterResultsSection() {
    var foods = [
        {
            name: "Noodles",
            price: "15$",
            image: "1.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            name: "Cake",
            price: "10$",
            image: "2.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            name: "Rice",
            price: "12$",
            image: "3.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            name: "Pizza",
            price: "5$",
            image: "4.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            name: "Choco Cake",
            price: "6$",
            image: "5.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            name: "Shake",
            price: "13$",
            image: "6.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            name: "Cake",
            price: "25$",
            image: "7.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
        {
            name: "Noodles",
            price: "13$",
            image: "8.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        },
      ]

    return (
        <div className={styles.filter_results_section}>
            <h3>Results for food...</h3>

            <div className={styles.search_results}>
            {
                foods.map((food)=>{
                    return <div className={styles.search_result}>
                        <Link href="#" className={styles.search_result_image_container}>
                        <Image
                            src={`/food/${food["image"]}`}
                            alt="Food Image"
                            layout="fill"
                            objectFit="cover"
                            quality={30}
                        />
                        </Link>
                        <h4>{food["name"]}</h4>
                        
                        <div className={styles.bottom_section}>
                            <h4><span>{food["price"]}</span></h4>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}
