"use client"

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


export default function Page() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    return (
        <div>
            <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
                <Marker position={center} />
            </GoogleMap>

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

                nav div:nth-child(3) a:hover svg{
                    color: black;
                }
                
                nav div:nth-child(3) div:nth-child(2) p{
                    color: white;
                    background: rgba(0,0,0,0.7);
                    padding: 7px 10px;
                    margin-right: 23px;
                    text-align: center;
                    bottom: -3px;
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
    );
}