"use client";

import React, { useEffect } from 'react';
import styles from "../signup/signup.module.css";
import Link from 'next/link';
import Image from "next/image";
import LogoImage from "../signup//Icons/logo.png";
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    function handleCallbackResponse(response){
        // console.log(`Encoded JWT ID token: ${response.credential}`)

        var userObject = jwtDecode(response.credential);

        console.log(userObject)

        router.push(`/`);
    }

    function initializeSignOptions(){
        console.log('Google script has loaded.');
        
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );

        google.accounts.id.prompt();
    }

    useEffect(()=>{
        // Define a function to load the Google Identity Services API script
        function loadGoogleScript() {
            const script = document.createElement('script');

            script.src = 'https://accounts.google.com/gsi/client';

            script.async = true;
            
            script.onload = () => {
                // The script has loaded, now you can use the 'google' object
                initializeSignOptions();
            };
            document.head.appendChild(script);
        }
    
        // Check if 'google' is already defined
        if (typeof google === 'undefined') {
            // Load the Google Identity Services API script dynamically
            loadGoogleScript();
        } else {
            // 'google' is already defined, you can use it immediately
            console.log("Google is already defined.");

            initializeSignOptions();
        }
    }, [])

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

            <div id='signInDiv'></div>

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
