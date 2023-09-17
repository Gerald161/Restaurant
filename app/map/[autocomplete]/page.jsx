"use client"

import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
}

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  return (
    <>
    <input 
      type="text"
      onChange={(e)=> setValue(e.target.value)} 
      value={value}
      disabled={!ready}
      placeholder="Search an address"
    />

    <ul>
      {
        status === "OK" && 
        data.map(({place_id, description})=>(
          <p key={place_id} onClick={(e)=>{handleSelect(description)}}>{description}</p>
        ))
      }
    </ul>

    {/* <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox> */}

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
    </>
  );
};
