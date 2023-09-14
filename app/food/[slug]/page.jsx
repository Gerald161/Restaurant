import React from 'react'
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import styles from "./food.module.css";

async function getDishData(slug){
    const res = await fetch(
      `${process.env.API}food/${slug}`,
      {
        next: {
          revalidate: 0 //no caching of response
        }
      }
    );
  
    return res.json();
  }

export default async function FoodPage({params}) {
    const slug = params.slug;

    const data = await getDishData(slug);

    return (
        <div className={styles.main}>
            <FirstSection data={data}/>

            <SecondSection data={data}/>
        </div>
    )
}
