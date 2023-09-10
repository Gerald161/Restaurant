"use client"

import React, { useState } from 'react';
import styles from "./styles/upload.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faXmark } from '@fortawesome/free-solid-svg-icons';
import AddExtra from "./add_extra.png";
import Image from "next/image";

export default function Upload() {
  const [extraImagesList, setExtraImagesList] = useState([]);

  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const [price, setPrice] = useState(1);

  function selectThumbnail(e){
    if(e.target.files.length){
      const file = e.target.files[0];

      if(file.type.startsWith("image/")){
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          setThumbnailUrl(reader.result);
        }
      }
    }
  }

  function addExtraImage(e){
    if(e.target.files.length){
      const file = e.target.files[0];

      if(file.type.startsWith("image/")){
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          setExtraImagesList([...extraImagesList, reader.result]);
        }
      }
    }
  }

  function removeExtraImage(index){
    const updatedImages = [...extraImagesList];

    updatedImages.splice(index, 1);

    setExtraImagesList(updatedImages);
  }

  return (
    <form className={styles.form}>
      <h3>Please upload your dish</h3>

      <label>Dish Name</label>

      <input type="text" placeholder="Dish Name" name=""/>

      <label htmlFor="">Category</label>

      <select className={styles.select} name="" id="">
        <option value="">Breakfast</option>
        <option value="">Lunch</option>
        <option value="">Supper</option>
        <option value="">Drinks</option>
        <option value="">Snacks</option>
      </select>

      <label>Dish Price</label>

      <div className={styles.pricing}>
        <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Price'/> 
        <span>$</span>
      </div>

      <label>Dish Thumbnail</label>

      <label htmlFor="thumbnail">
        {
          thumbnailUrl == "" ? 
          <FontAwesomeIcon icon={faImage} /> :
          <img src={thumbnailUrl} alt="Thumbnail Image"/>
        }
      </label>

      <input onChange={(e)=>{selectThumbnail(e)}} id="thumbnail" type="file" accept="image/*" name=""/>

      <label>Additional Images</label>

      <div className={styles.selected_images_container}>
        {
          extraImagesList.map((extra_image, index)=>(
            <div key={index} className={styles.selected_image}>
              <img src={extra_image} alt="Food Image"/>

              <FontAwesomeIcon icon={faXmark} onClick={()=>{removeExtraImage(index)}} />
          </div>
          ))
        }
      </div>

      {
        extraImagesList.length < 5 &&
        <label htmlFor="extra_image">
          <Image
              src={AddExtra}
              alt="Add Extra Image"
              quality={30}
              className={styles.extra_button}
          />
        </label>
      }

      <input onChange={(e)=>{addExtraImage(e)}} id="extra_image" type="file" accept="image/*" name=""/>

      <button>Upload</button>

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
    </form>
  )
}
