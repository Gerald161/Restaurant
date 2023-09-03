import React from 'react';
import styles from "./styles/firstSection.module.css";
import firstImage from "./Images/1.jpg";
import secondImage from "./Images/2.jpg";
import thirdImage from "./Images/3.jpg";
import fourthImage from "./Images/4.jpg";
import Image from 'next/image';

export default function FirstSection() {
  var all_images = [
    {
      img: firstImage,
      style_class: "featured",
      name: "Pizza"
    },
    {
      img: secondImage,
      style_class: "",
      name: "Shake"
    },
    {
      img: thirdImage,
      style_class: "featured_vertical",
      name: "Cake"
    },
    {
      img: fourthImage,
      style_class: "",
      name: "Rice"
    },
  ];

  return (
    <div className={styles.first_section}>
      <div className={styles.first}>
        <div className={styles.slider}>
          {
            all_images.map((image,index)=>(
              <div key={index} className={styles.img}>
                <Image
                  src={image.img}
                  alt={image.name}
                  placeholder="blur"
                  quality={20}
                />
              </div>
            ))
          }
        </div>

        <a className={styles.prev}>&#10094;</a>
        <a className={styles.next}>&#10095;</a> 
      </div>

      <div className={styles.extra_info}>
        <h3>Food Name</h3>

        <div className={styles.additional_images}>
          {
            all_images.map((image, index)=>(
              <div key={index} className={styles.additional_image}>
                <Image
                  src={image.img}
                  alt={image.name}
                  placeholder="blur"
                  quality={20}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}