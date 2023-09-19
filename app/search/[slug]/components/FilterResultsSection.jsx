"use client"

import React from 'react';
import styles from "../styles/filterResultsSection.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function FilterResultsSection({data, slug}) {
    return (
        <div className={styles.filter_results_section}>
            <h3>Results for "{slug.replace(/-/g, " ")}"</h3>

            <div className={styles.search_results}>
            {
                data.map((food, index)=>{
                    return <div key={index} className={styles.search_result}>
                        <Link href={`/food/${food["slug"]}`} className={styles.search_result_image_container}>
                            <img src={`http://127.0.0.1:8000/media/${food["images"][0]}`} alt="" />
                        </Link>
                        <h4>{food["name"]}</h4>
                        
                        <div className={styles.bottom_section}>
                            <h4><span>{food["price"]}$</span></h4>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                })
            }
            </div>
        </div>
    )
}
