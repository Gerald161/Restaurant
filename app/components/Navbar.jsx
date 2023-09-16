"use client"

import React, { useEffect, useState } from 'react';
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket, faGear, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function NavBar() {
  const pathName = usePathname();

  const [profileTabVisibility, setProfileTabVisibility] = useState(false);

  const [profileImageUrl, setProfileImageUrl] = useState("");

  const [optionsVisibility, setOptionsVisibility] = useState(false);

  const [orderNumber, setOrderNumber] = useState(0);

  async function getOrderCount(){
    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Token ${process.env.NEXT_PUBLIC_TOKEN}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    var res = await fetch(`${process.env.NEXT_PUBLIC_API}food/order/`, requestOptions);

    var data = await res.json();

    setOrderNumber(data.length);
  }

  useEffect(()=>{
    var username = localStorage.getItem("username");

    var profile_image = localStorage.getItem("profile_image");

    setProfileImageUrl(JSON.parse(profile_image)["profile_image"]);

    if(username !== null){
      setProfileTabVisibility(true);

      //Making sure the toggle of the visibility is always negative
      setOptionsVisibility(false);

      getOrderCount();
    }else{
      setProfileTabVisibility(false);
    }

  }, [pathName])

  function showMoreOptions(){
    if(optionsVisibility){
      setOptionsVisibility(false);
    }else{
      setOptionsVisibility(true);
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo_section}>
        <Link href="/">
          <div className={styles.logo}></div>

          <p>Food Hub</p>
        </Link>
      </div>

      <div className='quick_nav'>
        <a href="#diets" className={styles.nav_link}>
          Diets
        </a>
        <Link href="/upload" className={styles.nav_link}>
          Upload
        </Link>
      </div>

      {
        profileTabVisibility == false ?
        <div className={styles.sign_options}>
          <Link href="/login">Login</Link>
          <Link href="/signup">Join</Link>
        </div> :
        <div className={styles.signed_in_options}>
          <Link href="/checkout">
            <FontAwesomeIcon icon={faCartShopping}/>

            <p>{orderNumber}</p>
          </Link>

          <div className={styles.profile_tab_container}>
            <div className={styles.image_container} onClick={()=>{showMoreOptions()}}>
              <Image
                src={profileImageUrl}
                alt='Profile Image'
                height={100}
                width={100}
              />
            </div>

            <div className={optionsVisibility == true ? styles.profile_options : styles.no_element_visibility}>
              <div className={styles.option}>
                <p className={styles.label}>Settings</p>
                <FontAwesomeIcon icon={faGear}/>
              </div>
              <div className={styles.option}>
                <p className={styles.label}>Log out</p>
                <FontAwesomeIcon icon={faRightFromBracket}/>
              </div>
            </div>
          </div>
        </div>
      }

      <div className={styles.more_button}>
        <FontAwesomeIcon icon={faBars}/>
      </div>

      <style jsx global>
        {`
          nav div:nth-child(3) a:hover svg{
            color: white;
          }
        `}
      </style>
    </nav>
  )
}
