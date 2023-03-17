import React, { useEffect, useState } from "react";
import axios from "axios";

const ZipCodeSearchBar = ({ value, onChange, onSubmit}) => {

  return (
    <div>
      <label>Search by zip code</label>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default ZipCodeSearchBar;
