import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ZipCodeSearchBar = () => { 
  const [user,token]= useAuth()
  const [searchZipCode, setSearchZipCode] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);


  useEffect(() => { 
    const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getplaydate/', {headers:{Authorization: 'Bearer ' + token}});
      console.log(response.data);
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
   user.zipcode == searchZipCode
  );
  console.log(results)

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
     
        {filteredUsers.map((thing) => (
          <div key={thing.id}>
            {thing.street} - {thing.city} - {thing.state} - {thing.zipcode} - {thing.date} - {thing.time}
          </div>
        ))}
  
    </div>
  );
  };

export default ZipCodeSearchBar;
