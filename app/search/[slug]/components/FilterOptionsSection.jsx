import React, { useState } from 'react';
import styles from "../styles/filterOptionsSection.module.css";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firstImage from "./icons/1.png";
import secondImage from "./icons/2.png";
import thirdImage from "./icons/3.png";
import fourthImage from "./icons/4.png";
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
        name: "Time",
      },
      {
        img_src: fifthImage,
        img_alt: "Fifth Image",
        name: "Chef's Special",
      },
  ];

  const [searchResults, setSearchResults] = useState(["a","b","c"]);

  const resetSearchBox = () => {
    setSearchResults([]);
  }

  return (
    <div className={styles.filter_options_section}>
        <form method="post">
            <div className={styles.search_block}>
                <input type="text" placeholder="Search..." id="search_box" name=""/>

                <FontAwesomeIcon icon={faXmark} onClick={(e)=>{resetSearchBox()}}/>
            </div>

            <div className={styles.search_suggestions}>
              {
                searchResults.map((result,index)=>(
                  <Link href="#" key={index}>{result}</Link>
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
    </div>
  )
}
