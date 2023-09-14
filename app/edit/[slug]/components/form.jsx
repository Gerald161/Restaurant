"use client";

import React, { useState } from 'react';
import styles from "../../../upload/styles/upload.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import AddExtra from "../../../upload/add_extra.png";
import Image from "next/image";

export default function Form({slug, data}) {
    const [extraImagesList, setExtraImagesList] = useState(data.images);

    const [name, setName] = useState(data.name);

    const [category, setCategory] = useState(data.category);

    const mealChoices = ["Breakfast", "Lunch", "Supper", "Drinks"];

    const [price, setPrice] = useState(data.price);

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
            <h3>Please edit your dish</h3>

            <label>Dish Name</label>

            <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Dish Name" name=""/>

            <label htmlFor="">Category</label>

            <select onChange={(e)=>{setCategory(e.target.value)}} defaultValue={category} className={styles.select} name="" id="">
                {
                    mealChoices.map((meal,index)=>(
                        <option value={meal.toLowerCase()} key={index}>{meal}</option>
                    ))
                }
            </select>

            <label>Dish Price</label>

            <div className={styles.pricing}>
                <input type="number" min={1} value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Price'/> 
                <span>$</span>
            </div>

            <label>Images</label>

            <div className={styles.selected_images_container}>
                {
                extraImagesList.map((extra_image, index)=>(
                    <div key={index} className={styles.selected_image}>
                        {
                            data.images.includes(extra_image) ?
                            <img src={`http://127.0.0.1:8000/media/${extra_image}`} alt="Food Image"/>
                            :
                            <img src={extra_image} alt="Food Image"/>
                        }

                        <FontAwesomeIcon icon={faXmark} onClick={()=>{removeExtraImage(index)}}/>
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

            <button>Save Changes</button>

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
