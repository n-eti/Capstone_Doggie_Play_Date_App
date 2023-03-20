import React, { useState } from 'react';
import DisplaySection from '../../components/DisplaySection/DisplaySection';
import Navbar from '../../components/NavBar/NavBar';
import YourPets from '../../components/YourPets/YourPets';
import ZipCodeSearchBar from '../../components/ZipCodeSearchBar/ZipCodeSearchBar';
import PetsList from '../../components/PetsList/PetsList';


const HomePageDisplay = ({}) => {
    return ( 
        <section id="container">
        <div>
            <p>dashboard</p>
        <ZipCodeSearchBar/>
        <DisplaySection/>
        </div>
        </section>
     );
}
 
export default HomePageDisplay;