import React, { Component } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const YourPlayDatesList = (props) => {
    const {title, content} = props;

    return (
    <div className="PlayDatesList">
      <h1>Your Play Dates:</h1>
      <ol>
        <li>Street:</li>
        <li>City:</li>
        <li>State:</li>
        <li>Zip Code:</li>
        <li>Date:</li>
        <li>Time:</li>
      </ol>
    </div>
  );
};
 
export default YourPlayDatesList;