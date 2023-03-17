import React, { useEffect, useState } from "react";
import axios from "axios";

const ZipCodeSearchBar = () => { 
  const [searchZipCode, setSearchZipCode] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);


  useEffect(() => { 
    const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getplaydate?zipcode=');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data');
    }
  };

  fetchData();
}, []);

useEffect(() => {
  const results = users.filter((user) =>
    user.name.toLowerCase().inculdes(searchZipCode.toLowerCase())
);

setFilteredUsers(results);
}, [searchZipCode, users]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Zip Code"
        value={searchZipCode}
        onChange={(event) => setSearchZipCode(event.target.value)}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
  };

export default ZipCodeSearchBar;
