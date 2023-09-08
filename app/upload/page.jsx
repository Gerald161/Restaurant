"use client"

import React, { useState, useRef } from 'react';
import styles from "./styles/upload.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import AddExtra from "./add_extra.png";
import TestImg from "./3.jpg";
import Image from "next/image";

export default function Upload() {
  const [ingredientList, setIngredientList] = useState([""]);

  const [extraImagesList, setExtraImagesList] = useState([1]);

  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const thumbnailInputRef = useRef();

  function addExtraIngredient(e){
    e.preventDefault();

    setIngredientList([...ingredientList, ""])
  }

  function selectThumbnail(e){
    if(thumbnailInputRef.current.files.length){
      const file = thumbnailInputRef.current.files[0];

      if(file.type.startsWith("image/")){
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          setThumbnailUrl(reader.result);
        }
      }
    }
  }

  return (
    <form className={styles.form}>
      <h3>Please upload your dish</h3>

      <label>Dish Name</label>

      <input type="text" placeholder="Dish Name" name=""/>

      <label>Dish Thumbnail</label>

      <label htmlFor="thumbnail">
        {
          thumbnailUrl == "" ? 
          <FontAwesomeIcon icon={faImage} /> :
          
          <Image
            src={TestImg}
            alt="Food Image"
            quality={30}
          />
        }
      </label>

      <input ref={thumbnailInputRef} onChange={(e)=>{selectThumbnail(e)}} id="thumbnail" type="file" accept="image/*" name=""/>

      <label>Ingredients</label>

      <ol>
        {
          ingredientList.map((ingredient, index)=>(
            <li key={index}><input type="text" placeholder="Name of ingredient" name=""/></li>
          ))
        }
      </ol>

      <button onClick={(e)=>{addExtraIngredient(e)}}>Add Ingredient <FontAwesomeIcon icon={faPlus} /></button>

      <label>Additional Images</label>

      <div className={styles.selected_images_container}>
        {
          extraImagesList.map((extra_image, index)=>(
            <div key={index} className={styles.selected_image}>
              <Image
                src={TestImg}
                alt="Food Image"
                quality={30}
              />

              <FontAwesomeIcon icon={faXmark} />
          </div>
          ))
        }
      </div>

      <label htmlFor="extra_image">
        <Image
            src={AddExtra}
            alt="Add Extra Image"
            quality={30}
        />
      </label>

      <input id="extra_image" type="file" accept="image/*" name=""/>

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
