import React from 'react';
import styles from "../styles/diet.module.css";
import VeganImage from "./Images/vegan.jpg";
import CauliImage from "./Images/cauli.jpg";
import Falafel from "./Images/falafel.jpg";
import firstImage from "./Images/1.jpg";
import secondImage from "./Images/2.jpg";
import thirdImage from "./Images/3.jpg";
import fourthImage from "./Images/4.jpg";
import fifthImage from "./Images/5.jpg";
import sixthImage from "./Images/6.jpg";
import seventhImage from "./Images/7.jpg";
import Image from 'next/image';

export default function Diet() {
    var all_diets_info = [
        {
            img_src: VeganImage,
            img_alt: "Vegan Image",
            name: "Vegan Diet",
            desc: "A vegan diet is a plant-based eating approach that excludes all animal"
        },
        {
            img_src: CauliImage,
            img_alt: "Cauli Image",
            name: "Low Carb Diet",
            desc: "A low-carb diet restricts carbohydrates and emphasizes proteins and fats for energy. It can promote weight loss and blood sugar control."
        },
        {
            img_src: Falafel,
            img_alt: "Falafel Image",
            name: "Mediterranean Diet",
            desc: "The Mediterranean diet emphasizes the consumption of fruits, vegetables, whole grains, legumes, nuts, seeds, olive oil, and moderate amounts of fish, poultry, and dairy products."
        },
    ];

    var gallery = [
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
        {
            img: fifthImage,
            style_class: "featured_horizontal",
            name: "Noodles"
        },
        {
            img: sixthImage,
            style_class: "",
            name: "Ice Cream"
        },
        {
            img: seventhImage,
            style_class: "featured_horizontal",
            name: "Pizza"
        }
    ];

    return (
        <div className={styles.main_container}>
            <h1 id="diets">Select your preferred diet</h1>

            <div className={styles.featured_meals}>
                {
                    all_diets_info.map((diet, index)=>(
                        <div key={index} className={`${styles.product} ${styles.featured_vertical}`}>
                            <Image
                                src={diet.img_src}
                                alt={diet.img_alt}
                                placeholder="blur"
                                quality={5}
                                className={styles.cover_image}
                            />
                            <a href="#" download>
                                <div className={styles.text}>
                                    <div className={styles.textcontent}>
                                        <h3>{diet.name}</h3>
                                        <p>{diet.desc}</p>
                                    </div>  
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>

            <h1>Featured in our Gallery</h1>

            <div className={styles.featured_meals}>
                {
                    gallery.map((info, index)=>(
                        <div key={index} className={`${styles.product} ${styles[info.style_class]}`}>
                            
                            <Image
                                src={info.img}
                                alt={`${index} picture`}
                                placeholder="blur"
                                quality={5}
                                // className={styles.featured_image}
                            />

                            <a href="#" download>
                            <div className={styles.text}>
                                <div className={styles.textcontent}>
                                    <h3>{info.name}</h3>
                                </div>  
                            </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
