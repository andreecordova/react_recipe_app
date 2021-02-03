//React
import React from 'react';

//Functions 
import filteredRecipes from '../js/functions/filteredRecipes';

//Variables
import api from '../js/variables/api';

const SearchBox = ({ query, setQuery, SetRecipes }) => {
	const change = (e) => {
    const value = e.target.value; 
    setQuery(value);
	};

	const search = (e) => {
    if (e.key === "Enter") {
      const url = `${api.base}/search?q=${query}&app_id=${api.id}&app_key=${api.key}`;

      fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const { hits } = response;
        const temp_recipes = hits.length > 0 ? hits : [];
        const recipes_data = temp_recipes.length > 0 ? (filteredRecipes(temp_recipes).length) > 0 ? filteredRecipes(temp_recipes) : ['empty'] : ['empty'];
        
        SetRecipes(recipes_data);
        setQuery("");
      });
    }
  };
	
	return (
		<div className="search_box">
			<input 
				type="text" 
				className="input_search"
				aria-label="Recipe search" 
				placeholder="Search..."
				onChange={change}
				value={query}
				onKeyPress={search} 
			/>
		</div>
	)
};

export default SearchBox;