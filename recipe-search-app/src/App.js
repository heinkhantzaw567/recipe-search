// App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeList from './components/RecipeList';
function App() {
  const [recipes, setRecipes] = useState([]); // Manage fetched recipes state
  const handleClick = () => {
    window.location.href = '/new-page'; // Replace '/new-page' with your desired path
};
  return (
    <div className="App">
      <SearchBar setRecipes={setRecipes} />
      {/* Display the fetched recipes here */}
      
      <RecipeList recipes={recipes}/>
    <button onClick={handleClick}>Redirect to New Page</button>

    </div>
  );
}

export default App;
