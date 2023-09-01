"use client"

import React from 'react';

export default function page() {
  return (
    <div>
        Checkout Page
        
        <style jsx global>
        {
            `
            nav{
                position: relative;
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
    </div>
  )
}
