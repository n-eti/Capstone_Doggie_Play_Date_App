import React, { useState } from "react";
import PetsList from "../PetsList/PetsList";
import YourPlayDatesList from "../YourPlayDatesList/YourPlayDatesList";

function DisplaySection() {
  const [pets, setPets] = useState([
    {
      name: "Amien",
      breed: "Maltipoo",
      gender: "Male",
      age: "1",
      weight: "24 lbs",
      spayedOrNeutered: "Yes",
    },
  ]);

  return (
    <div id="DisplaySection">
      <PetsList data={pets} />
      <YourPlayDatesList />
    </div>
  );
};

export default DisplaySection;
