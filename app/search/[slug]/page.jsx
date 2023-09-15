import React from 'react';
import FilterOptionsSection from './components/FilterOptionsSection';
import FilterResultsSection from './components/FilterResultsSection';

async function getDishData(slug){
    const res = await fetch(
      `${process.env.API}food/search/${slug}`,
      {
        next: {
          revalidate: 0 //no caching of response
        }
      }
    );
  
    return res.json();
  }

export default async function SearchResultsPage({params}) {
    const slug = params.slug;

    const data = await getDishData(slug);

    return (
        <div className='main'>
            <FilterOptionsSection/>
            <FilterResultsSection data={data} slug={slug}/>
        </div>
    )
}
