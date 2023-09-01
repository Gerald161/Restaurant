"use client"

import React, { useState } from 'react';
import styles from "../styles/searchSection.module.css";
import CoverImage from "./food.jpg";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function SearchSection() {
  const router = useRouter();

  const [word, setWord] = useState("");

  function handleSearch(e){
    e.preventDefault();

    router.push(`/search/${word}`);
  }

  return (
    <main className={styles.main}>
      <Image
          src={CoverImage}
          alt="Restaurant Welcome Image"
          placeholder="blur"
          quality={15}
          className={styles.cover_image}
      />
      <div className={styles.overlay}>
        <h3>Welcome to the Food Hub</h3>

          <form onSubmit={(e)=>{handleSearch(e)}} action="search.html?search=aa" method="get">
            <input onChange={(e)=>{setWord(e.target.value)}} type="text" value={word} name="word" placeholder="Search for food..." id="searchInputField" required/>
            <button><FontAwesomeIcon icon={faSearch}/></button>
          </form>
      </div>

      <style jsx global>
        {`
          a{
            color: white;
          }

          nav div:nth-child(1) a div{
            background: url("/logo.png") no-repeat center/cover;
          }

          nav div:nth-child(3) a{
            border: 1.5px solid white;
          }

          nav div:nth-child(3) a:hover{
            border: black;
            color: black;
            background: white;
          }
        `}
      </style>
    </main>
  )
}
