import React, { useState } from "react";
import PetsList from "../PetsList/PetsList";
import AddPetsButton from "../AddPetsButton/AddPetsButton";

function DisplaySection() {
  const [pets, setPets] = useState([
  ]);

  return (
    <div id="DisplaySection">
      <PetsList data={pets} />
      <AddPetsButton/>
    </div>
  );
};

export default DisplaySection;
