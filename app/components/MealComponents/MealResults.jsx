"use client"

import styles from "../../styles/mealresults.module.css";
import styles2 from "../../styles/mealtypeselectiontab.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";


export default function MealResults({data}){
    const [allFoods, setAllFoods] = useState(data);

    const mealChoices = ["Breakfast", "Lunch", "Supper", "Drinks"];

    const [selectedIndex, setSelectedIndex] = useState(0);

    const [showEditButton, setShowEditButton] = useState(false);

    useEffect(()=>{
        var username = localStorage.getItem("username");

        if(username !== null){
            setShowEditButton(true);
        }
    }, [])

    async function changeMealCategory(meal, index){
        setSelectedIndex(index);

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
                        <button
                            className={index === selectedIndex ? styles2.active : ""}
                            key={index} onClick={(e)=>{changeMealCategory(meal, index)}}
                        >{meal}</button>
                    ))
                }
            </div>

            <div className={styles.meal_results}>
            {
                allFoods.map((food, index)=>{
                    return <div key={index} className={styles.meal_result}>
                        <Link href={`/food/${food.slug}`} className={styles.meal_result_image_container}>
                            <img loading="lazy" src={`http://127.0.0.1:8000/media/${food["image"]}`} alt="" />
                        </Link>
                        <h4>{food["name"]}</h4>
                        
                        <div className={styles.bottom_section}>
                            <h4><span>{food["price"]}$</span></h4>
                            {
                                showEditButton == true &&
                                <Link href={`/edit/${food.slug}`}>
                                    <FontAwesomeIcon icon={faPencil} />
                                 </Link>
                            }
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}