import React, { Component } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const YourPetsList = (props) => {
  const { title, content } = props;
  
  // const response = axios.get("http://127.0.0.1:8000/api/1/");
  // console.log(response.data);

  return (
    <div className="YourPetsList">
      <h1>Your Pets:</h1>
      <ol>
        <li>Name:</li>
        <li>Breed:</li>
        <li>Gender:</li>
        <li>Weight:</li>
        <li>Age:</li>
        <li>Spayed or Neutered:</li>
        <li>Image:</li>
      </ol>
    </div>
  );
};

export default YourPetsList;

// async function getVideoGames() {
//     const response = await axios.get("http://localhost:8080/all/");
//     setVideoGames(response.data);
