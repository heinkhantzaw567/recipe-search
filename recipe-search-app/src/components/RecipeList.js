import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes && recipes.length > 0 && (
        <ul className='list-group'>
          {recipes.map((recipe, index) => (
            <li
              className="list-group-item"
              key={index} // Use index as a unique key
            >
              {recipe.strMeal} - {recipe.strArea}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;