import React, { useState } from "react";
import YourPetsList from "../YourPetsList/YourPetsList";
import YourPlayDatesList from "../YourPlayDatesList/YourPlayDatesList";
const DisplaySection = ({}) => {
  return (
    <section id="container">
      <div>
        <p>container</p>
        <YourPetsList/>
        <YourPlayDatesList/>
      </div>
    </section>
  );
};

export default DisplaySection;
