// App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './components/RecipeList';
function App() {
  const [recipes, setRecipes] = useState([]); // Manage fetched recipes state
  
  return (
    <div className="App">
      <SearchBar setRecipes={setRecipes} />
      {/* Display the fetched recipes here */}
      
      <RecipeList recipes={recipes}/>
    </div>
  );
}

export default App;
