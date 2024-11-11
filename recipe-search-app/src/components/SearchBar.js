// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ setRecipes }) => {
  const [inputValue, setInputValue] = useState(''); // Manage search term state
  const API_KEY = 'YOUR_ACTUAL_API_KEY'; // Replace with your actual API key

  const handleSearch = async () => {
    if (!inputValue) { // Handle empty search term gracefully
      console.warn('Please enter a search term.');
      return;
    }

    const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}&app_id=12345&app_key=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data.meals); // Set recipes only if data.meals exists
    } catch (error) {
      console.error("Error fetching the recipes:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for recipes..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;