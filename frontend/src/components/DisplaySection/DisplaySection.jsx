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
    {
      name: "Tink",
      breed: "Golden Retriever",
      gender: "Male",
      age: "3",
      weight: "65 lbs",
      spayedOrNeutered: "Yes",
    },
    {
      name: "Rosy",
      breed: "Pit Bull",
      gender: "Female",
      age: "12",
      weight: "72 lbs",
      spayedOrNeutered: "Yes",
    },
  ]);

  return (
    <div id="DisplaySection">
      <PetsList data={pets} />
    </div>
  );
};

export default DisplaySection;
