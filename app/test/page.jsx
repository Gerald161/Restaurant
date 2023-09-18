"use client"

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from "../redux/counter";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function page() {
    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    const notify = () => {
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide
        });

        toast.error('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div>
            <p style={{textAlign: "center", margin: "20px 0 0 0 "}}>{count}</p>

            <button onClick={notify}>Notify!</button>

            <ToastContainer/>

            <button onClick={(e)=>{
                console.log("clicked")

                dispatch(increment())}
            }>Add</button>

            <button onClick={(e)=>{dispatch(decrement())}}>Reduce</button>

            <button onClick={(e)=>{dispatch(incrementByAmount(33))}}>Add variably</button>

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

                    nav div:nth-child(3) a:hover svg{
                    color: black;
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
