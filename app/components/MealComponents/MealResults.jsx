// 'use client'

import styles from "../../styles/mealresults.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Image from "next/legacy/image";


export default function MealResults() {
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
    <div className={styles.meal_results}>
        {
            foods.map((food)=>{
                return <div className={styles.meal_result}>
                    <Link href="#" className={styles.meal_result_image_container}>
                    <Image
                        src={`/food/${food["image"]}`}
                        alt="Food Image"
                        layout="fill"
                        objectFit="cover"
                        quality={30}
                        className={styles.meal_image}
                        // onError={}
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
  )
}