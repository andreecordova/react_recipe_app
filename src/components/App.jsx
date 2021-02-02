//React
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Main from './Main';
import RecipeDetail from './RecipeDetail';

//Functions 
import filteredRecipes from '../js/functions/filteredRecipes';

//Variables
import api from '../js/variables/api';

function App() {
  let [query, setQuery] = useState("");
  let [recipes, SetRecipes] = useState([]);
  let [recipeSelected, SetRecipeSelected] = useState(null);

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

  const selected = (item) => { 
    SetRecipeSelected(item);
  };

  return (
    <div className={recipeSelected != null ? "App recipe_details" : recipes.length > 0 ? "App results" : "App"}>
      <Router>
        <Route path="/" exact render={props => (
          <Main {...props} change={change} search={search} recipes={recipes} selected={selected} />
        )} />
        <Route path="/recipe/:label" render={props => (
          <RecipeDetail {...props} recipeSelected={recipeSelected} />
        )} />
      </Router>
    </div>
  );
}

export default App;
