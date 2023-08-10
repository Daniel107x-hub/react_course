import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleTermChange = (e) => {
    const value = e.target.value;
    setTerm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter search term</label>
        <input type="text" onChange={handleTermChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar;
