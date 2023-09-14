import React from 'react';
import Form from './components/form';
import { redirect } from 'next/navigation';

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

export default async function EditDish({params}) {
  const slug = params.slug

  const data = await getDishData(slug);

  if(data.status !== undefined){
    redirect("/");
  }else{
    return (
      <Form slug={slug} data={data}/>
    )
  }
}
