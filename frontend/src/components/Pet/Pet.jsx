import React, { useState } from 'react';
const Pet = (props) => {
    return ( 
    <div>
        <h4>Name: {props.pet.name}</h4>
        <h4>Breed: {props.pet.breed}</h4>
        <h4>Age: {props.pet.age}</h4>
        <h4>Gender: {props.pet.gender}</h4>
        <h4>Weight: {props.pet.weight}</h4>
        <h4>Spayed/Neutered: {props.pet.spayedorneutered}</h4>
      </div>
     );
}
 
export default Pet;