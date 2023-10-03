import React from 'react'
import FirstSection from './components/FirstSection';
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

// export const metadata = {
//   title: 'Product Page',
// description: 'This is the product page',
// }

export async function generateMetadata({params}){
  return {
    title: params.slug.split("-")[0]
  }
}

export default async function FoodPage({params}) {
    const slug = params.slug;

    const data = await getDishData(slug);

    return (
        <div className={styles.main}>
            <FirstSection data={data} slug={slug}/>
        </div>
    )
}
