"use client";

import React from 'react';
import styles from "../signup/signup.module.css";
import Link from 'next/link';
import Image from "next/image";
import GoogleImage from "../signup/Icons/google.png";
import LogoImage from "../signup//Icons/logo.png";

export default function Login() {
  return (
    <main className={styles.main}>
      <Image
          src={LogoImage}
          alt="Google Image"
          placeholder="blur"
          quality={40}
      />

      <h1>Welcome Back</h1>

      <form method="post" action="#">
          <input type="text" name="" placeholder="Email or username"/>

          <button>Continue</button>	
      </form>

      <p>Don't have an account? <Link href="/signup">Sign up</Link></p>

      <h4>OR</h4>

      <button className={styles.google_sign_up}>
          <Image
              src={GoogleImage}
              alt="Google Image"
              placeholder="blur"
              quality={40}
          />
          <span>Continue with Google</span>
      </button>

      <p><a href="#">Terms and agreements</a></p>

      <style jsx global>
          {
              `
              nav{
                  display: none;
              }
              `
          }
      </style>
    </main>
  )
}
