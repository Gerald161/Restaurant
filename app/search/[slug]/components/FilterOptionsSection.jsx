"use client"

import React, { useState } from 'react';
import styles from "../styles/filterOptionsSection.module.css";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firstImage from "./icons/1.png";
import secondImage from "./icons/2.png";
import thirdImage from "./icons/3.png";
import fourthImage from "./icons/price.png";
import fifthImage from "./icons/5.png";
import Link from 'next/link';

export default function FilterOptionsSection() {
  var images = [
      {
        img_src: firstImage,
        img_alt: "First Image",
        name: "Diet",
      },
      {
        img_src: secondImage,
        img_alt: "Second Image",
        name: "Cuisine",
      },
      {
        img_src: thirdImage,
        img_alt: "Third Image",
        name: "Health",
      },
      {
        img_src: fourthImage,
        img_alt: "fourth Image",
        name: "Price",
      },
      {
        img_src: fifthImage,
        img_alt: "Fifth Image",
        name: "Chef's Special",
      },
  ];

  const [searchResults, setSearchResults] = useState([]);

  const resetSearchBox = () => {
    setSearchResults([]);
  }

  async function getSearchSuggestion(e){
    if(e.target.value.trim() !== ""){
      const res = await fetch(`${process.env.NEXT_PUBLIC_API}food/search/${e.target.value}`); 

      const data = await res.json();

      setSearchResults(data);
    }
  }

  return (
    <div className={styles.filter_options_section}>
        <form method="post">
            <div className={styles.search_block}>
                <input onChange={(e)=>{getSearchSuggestion(e)}} type="text" placeholder="Search..." id="search_box" name=""/>

                <FontAwesomeIcon icon={faXmark} onClick={(e)=>{resetSearchBox()}}/>
            </div>

            <div className={
                `${styles.search_suggestions} ${searchResults.length !== 0 && styles.show_border}`
              }>
              {
                searchResults.map((result,index)=>(
                  <Link href={`/food/${result["slug"]}`} key={index}>{result["name"]}</Link>
                ))
              }
            </div>
        </form>

        <h3>Filter</h3>

        <div className={styles.filter_section}>
          {
            images.map((image, index)=>{
              return <div key={index} className={styles.filter_options_section_option}>
                <div className={styles.icon_and_text_container}>
                  <Image
                      src={image.img_src}
                      alt={image.img_alt}
                      placeholder="blur"
                      quality={20}
                  />

                  <p>{image["name"]}</p>
                </div>

                <a href="#">&#9660;</a>
              </div>
            })
          }
        </div>

        <div className={styles.apply_clear_options}>
          <button data-id="breakfast">Cancel</button>
          <button data-id="lunch">Apply</button>
        </div>

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

                @media(max-width: 800px){
                  .main{
                    flex-direction: column;
                  }
                }
                `
            }
            </style>
    </div>
  )
}
