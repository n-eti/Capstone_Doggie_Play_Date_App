import React, { useState } from 'react';
import DisplaySection from '../../components/DisplaySection/DisplaySection';
import Navbar from '../../components/NavBar/NavBar';
import YourPets from '../../components/YourPets/YourPets';
import ZipCodeSearchBar from '../../components/ZipCodeSearchBar/ZipCodeSearchBar';
import PetsList from '../../components/PetsList/PetsList';
import DisplayPlayDateSection from '../../components/DisplayPalyDateSection/DisplayPalyDateSection';


const HomePageDisplay = ({}) => {
    return ( 
        <section id="container">
        <div>
        <ZipCodeSearchBar/>
        <DisplaySection/>
        {/* <DisplayPalyDateSection/> */}
        </div>
        </section>
     );
}
 
export default HomePageDisplay;