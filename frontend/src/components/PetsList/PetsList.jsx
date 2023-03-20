import React from "react";
import Pet from "../Pet/Pet";
import YourPets from "../YourPets/YourPets";

const PetsList = (props) => {
  let pets = props.data.map((pet) => {
    return (
     <Pet pet={pet}/>
    );
  });

  return <div>{pets}</div>;
};

export default PetsList;
