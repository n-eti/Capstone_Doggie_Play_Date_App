import React, { Component } from "react";
import axios from "axios";
import { useEffect, useState } from "react";


function YourPets()

{const [pets, setPets] = useState([
{
    name: "Amien",
    breed: "Maltipoo",
    gender: "Male",
    age: "1",
    weight: "24 lbs",
    spayedOrNeutered: "Yes",

  },
]);

const YourPetsList = (props) => {
  const { title, content } = props;
  
  const response = axios.get("http://127.0.0.1:8000/api/1/");
  console.log(response.data);

  return (
    <div id="YourPetsList">
  
    </div>
  );
}}

export default YourPets;

// async function getVideoGames() {
//     const response = await axios.get("http://localhost:8080/all/");
//     setVideoGames(response.data);
