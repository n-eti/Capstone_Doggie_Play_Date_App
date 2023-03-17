import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import ZipCodeSearchBar from "../ZipCodeSearchBar/ZipCodeSearchBar";
import "./NavBar.css";
import searchZipCode from "../ZipCodeSearchBar/ZipCodeSearchBar"
import axios from "axios";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchZipCode, setSearchZipCode] = useState('');
  const [filteredZipCodes, setFilteredZipCodes] = useState(zipCodes)

  const zipCodeCards = filteredZipCodes.map(zipCode => <zipCodeCard zipCode={zipCode}/>)
  
  const handleSearch = () => {
    const newFilteredZipCodes = zipCodes.filter((zipCode) => 
    zipCode.title.toLowerCase().includes(searchZipCode.toLowerCase()),
    );

    setFilteredZipCodes(newFilteredZipCodes)
  };

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "green" }}>
            <b>Frienzies</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Sign In</button>
          )}
          <ZipCodeSearchBar value={searchZipCode} onChange= {setSearchZipCode} onSubmit={handleSearch}/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
