"use client"
import React from 'react';
import FilterOptionsSection from './components/FilterOptionsSection';
import FilterResultsSection from './components/FilterResultsSection';

export default function SearchResultsPage({params}) {
    const slug = params.slug;

    return (
        <div className='main'>
            <FilterOptionsSection/>
            <FilterResultsSection/>
            
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

                .main{
                    display: flex;
                    border-top: solid 1px #ccc;
                    margin-bottom: 5px;
                }
                `
            }
            </style>
        </div>
    )
}
