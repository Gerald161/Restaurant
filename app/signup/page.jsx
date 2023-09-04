"use client";

import React from 'react';
import styles from "./signup.module.css";
import Image from "next/image";
import GoogleImage from "./Icons/google.png";
import LogoImage from "./Icons/logo.png";
import Link from 'next/link';

export default function SignUp() {
  return (
    <main className={styles.main}>
        <Image
            src={LogoImage}
            alt="Google Image"
            placeholder="blur"
            quality={40}
        />

        <h1>Create your account</h1>

        <form method="post" action="#">
            <input type="text" name="" placeholder="Email"/>

            <input type="text" name="" placeholder="Username"/>

            <button>Continue</button>	
        </form>

        <p>Already have an account? <Link href="/login">Log in</Link></p>

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
