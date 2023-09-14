"use client"

import styles from "../../styles/mealresults.module.css";
import styles2 from "../../styles/mealtypeselectiontab.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { useState } from "react";


export default function MealResults({data}){
    const [allFoods, setAllFoods] = useState(data);

    const mealChoices = ["Breakfast", "Lunch", "Supper", "Drinks"];

    async function changeMealCategory(meal){
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API}food/category/${meal}`
        );

        const data = await res.json();

        setAllFoods(data);
    }

    return (
        <div>
            <div className={styles2.div}>
                {
                    mealChoices.map((meal, index)=>(
                        <button key={index} onClick={(e)=>{changeMealCategory(meal)}}>{meal}</button>
                    ))
                }
            </div>

            <div className={styles.meal_results}>
            {
                allFoods.map((food, index)=>{
                    return <div key={index} className={styles.meal_result}>
                        <Link href={`/food/${food.slug}`} className={styles.meal_result_image_container}>
                        {/* <Image
                            src={`http://127.0.0.1:8000/media/${food["image"]}`}
                            alt="Food Image"
                            quality={100}
                            height={100}
                            width={100}
                            className={styles.meal_image}
                        /> */}
                        <img loading="lazy" src={`http://127.0.0.1:8000/media/${food["image"]}`} alt="" />
                        </Link>
                        <h4>{food["name"]}</h4>
                        
                        <div className={styles.bottom_section}>
                            <h4><span>{food["price"]} $</span></h4>
                            <Link href={`/edit/${food.slug}`}>
                                <FontAwesomeIcon icon={faPencil} />
                            </Link>
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}