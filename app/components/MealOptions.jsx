import React from 'react';
import MealResults from './MealComponents/MealResults';

async function getInitialMeals(){
  const res = await fetch(
    `${process.env.API}food/category/breakfast`,
    {
      next: {
        revalidate: 0 //no caching of response
      }
    }
  );

  return res.json();
}

export default async function MealOptions() {
  const data = await getInitialMeals();

  return (
    <div>
      <MealResults data={data}/>
    </div>
  )
}
