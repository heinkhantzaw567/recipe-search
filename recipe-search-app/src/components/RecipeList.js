import React, { MouseEvent, useState } from 'react';

const RecipeList = ({ recipes }) => {
  const message = !recipes && "No recipe is found";
  const [selected, setSelectedIndex] =useState(-1);
  
  return (
    <div>
      {message}
      {recipes && recipes.length > 0 && (
        <ul className='list-group'>
          {recipes.map((recipe, index) => (
            <li
              className={selected === index ? "list-group-item active" : "list-group-item"}
              key={index} // Use index as a unique key
              onClick={()=>
              {
                setSelectedIndex(index);
              }
              }
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