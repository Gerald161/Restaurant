"use client";

import React, { useRef, useState } from 'react';
import styles from "./styles/firstSection.module.css";

export default function FirstSection({data}){
  const allImages = data.images;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const sliderRef = useRef();

  function nextImageSwitch(){
    if(window.innerWidth <= '800'){

    }else{
      sliderRef.current.style.left = `-70vw`;

      setSelectedIndex(selectedIndex + 1);
    }
  }

  return (
    <div className={styles.first_section}>
      <div className={styles.first}>
        <div className={styles.slider} ref={sliderRef}>
          {
            allImages.map((image,index)=>(
              <div key={index} className={styles.img}>
                <img loading="lazy" src={`http://127.0.0.1:8000/media/${image}`} alt="" />
              </div>
            ))
          }
        </div>

        <a className={styles.prev}>&#10094;</a>
        <a onClick={()=>{nextImageSwitch()}} className={styles.next}>&#10095;</a> 
      </div>

      <div className={styles.extra_info}>
        <h3>{data.name}</h3>

        <div className={styles.additional_images}>
          {
            allImages.map((image, index)=>(
              <div key={index} 
              onClick={()=>{setSelectedIndex(index)}}
                className={
                  `${styles.additional_image} 
                  ${
                    index !== selectedIndex && styles.inactive
                  }`
                }>
                <img loading="lazy" src={`http://127.0.0.1:8000/media/${image}`} alt="" />
              </div>
            ))
          }
        </div>
      </div>

      <style jsx global>
      {
          `
          nav{
            position: relative;
            color: black;
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
          
          nav div:nth-child(3) div:nth-child(2) p{
            color: white;
            background: rgba(0,0,0,0.7);
            padding: 7px 10px;
            margin-right: 23px;
            text-align: center;
            bottom: -3px;
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