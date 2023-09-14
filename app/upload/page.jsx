"use client"

import React, { useState } from 'react';
import styles from "./styles/upload.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import AddExtra from "./add_extra.png";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Upload() {
  const [extraImagesList, setExtraImagesList] = useState([]);

  const [imageFiles, setImageFiles] = useState([]);

  const [price, setPrice] = useState(1);

  const [name, setName] = useState("");

  const [category, setCategory] = useState("breakfast");

  const mealChoices = ["Breakfast", "Lunch", "Supper", "Drinks"];

  const router = useRouter();

  function addExtraImage(e){
    if(e.target.files.length){
      const file = e.target.files[0];

      if(file.type.startsWith("image/")){
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
          setImageFiles([...imageFiles, file]);

          setExtraImagesList([...extraImagesList, reader.result]);
        }
      }
    }
  }

  function removeExtraImage(index){
    const updatedImages = [...extraImagesList];

    const oldExtra = [...imageFiles];

    updatedImages.splice(index, 1);

    oldExtra.splice(index, 1);

    setImageFiles(oldExtra);

    setExtraImagesList(updatedImages);
  }

  async function uploadDish(e){
    e.preventDefault();

    if(name.trim() !== "" && price.toString().trim() !== "" && extraImagesList.length !== 0 && price !== 0){
      var myHeaders = new Headers();

      myHeaders.append("Token", process.env.TOKEN);

      var formdata = new FormData();

      formdata.append("name", name);

      formdata.append("price", price);

      formdata.append("category", category);

      imageFiles.forEach((image, index)=>{
        formdata.append(`image_${index}`, image)
      })

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
      };

      var res = await fetch(`${process.env.NEXT_PUBLIC_API}food/upload`, requestOptions);

      var data = await res.json();

      if(data["status"] == "complete"){
        router.refresh();

        router.push(`/`);
      }
    }else{
      console.log("Some fields need filling buddy, error check later")
    }
  }

  return (
    <form className={styles.form}>
      <h3>Please upload your dish</h3>

      <label>Dish Name</label>

      <input required value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Dish Name" name=""/>

      <label htmlFor="">Category</label>

      <select onChange={(e)=>{setCategory(e.target.value)}} value={category} className={styles.select} name="" id="">
        {
          mealChoices.map((meal,index)=>(
              <option value={meal.toLowerCase()} key={index}>{meal}</option>
          ))
        }
      </select>

      <label>Dish Price</label>

      <div className={styles.pricing}>
        <input required type="number" min={1} value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Price'/> 
        <span>$</span>
      </div>

      <label>Images</label>

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

      <button onClick={(e)=>{uploadDish(e)}}>Upload</button>

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
