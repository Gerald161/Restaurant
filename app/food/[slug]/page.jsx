"use client"

import React from 'react'
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import styles from "./food.module.css";

export default function FoodPage({params}) {
    const slug = params.slug;

    return (
        <div className={styles.main}>
            <FirstSection slug={slug}/>

            <SecondSection slug={slug}/>

            <style jsx global>
                {
                    `
                    nav{
                        position: relative;
                    }

                    nav div:nth-child(1) a div{
                        background: url("/logo2.png") no-repeat center/cover;
                    }

                    nav div:nth-child(3) a{
                        border: 1.5px solid black;
                        }
            
                        nav div:nth-child(3) a:hover{
                        border: white;
                        color: white;
                        background: black;
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
                    `
                }
            </style>
        </div>
    )
}
