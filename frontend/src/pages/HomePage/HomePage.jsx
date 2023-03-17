import React, { useState } from 'react';
import DisplaySection from '../../components/DisplaySection/DisplaySection';
import Navbar from '../../components/NavBar/NavBar';
import ZipCodeSearchBar from '../../components/ZipCodeSearchBar/ZipCodeSearchBar';
const HomePageDisplay = ({}) => {
    return ( 
        <section id="container">
        <div>
            <p>dashboard</p>
        <DisplaySection/>
        <Navbar/>
        </div>
        </section>
     );
}
 
export default HomePageDisplay;