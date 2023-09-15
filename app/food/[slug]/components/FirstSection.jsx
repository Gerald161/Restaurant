"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from "./styles/firstSection.module.css";
import styles2 from "./styles/SecondSection.module.css";

export default function FirstSection({data}){
  const allImages = data.images;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const sliderRef = useRef(null);

  const leftValueResized = useRef(0);

  const leftValue = useRef(0);

  function slideImage(e, index){
    setSelectedIndex(index);

    leftValueResized.current = e.target.dataset.left2;

    leftValue.current = e.target.dataset.left;

    if(window.innerWidth <= '800'){
      sliderRef.current.style.left = `-${e.target.dataset.left2}vw`;
    }else{
      sliderRef.current.style.left = `-${e.target.dataset.left}vw`;
    }
  }

  function handleResize(){
    if(sliderRef.current !== null){
      if(window.innerWidth <= '800'){
        sliderRef.current.style.left = `-${leftValueResized.current}vw`;
      }else{
        sliderRef.current.style.left = `-${leftValue.current}vw`;
      }
    }
  }

  useEffect(()=>{
    if(sliderRef.current !== null){
      window.addEventListener('resize', handleResize);
    }
  },[])

  return (
    <div onResize={(e)=>{checkWindowSize()}} className={styles.first_section}>
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
      </div>

      <div className={styles.extra_info}>
        <h3>{data.name}</h3>

        <div className={styles.additional_images}>
          {
            allImages.map((image, index)=>(
              <div key={index} 
                onClick={(e)=>{slideImage(e, index)}}
                className={styles.additional_image}>
                <img className={index !== selectedIndex && styles.inactive}
                 data-left={index * 70} data-left2={index * 100} 
                 loading="lazy" src={`http://127.0.0.1:8000/media/${image}`} 
                 alt="" />
              </div>
            ))
          }
        </div>

        <div className={styles2.second_section}>
          <p><span className={styles2.price}>Price:</span><span>{data.price}</span>$</p>

          <div>
            <label htmlFor="amount">Amount:</label>
            <input id="amount" type="number" min="1" name=""/>
          </div>

          <button className={styles2.order_button}>Add to Orders</button>
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

          nav div:nth-child(3) a:hover svg{
            color: black;
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