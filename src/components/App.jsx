//React
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Main from './Main';
import RecipeDetail from './RecipeDetail';

function App() {
  let [query, setQuery] = useState("");
  let [recipes, SetRecipes] = useState([]);
  let [recipeSelected, SetRecipeSelected] = useState(null);

  return (
    <div className={recipeSelected != null ? "App recipe_details" : recipes.length > 0 ? "App results" : "App"}>
      <Router>
        <Route path="/" exact render={props => (
          <Main {...props} recipes={recipes} query={query} setQuery={setQuery} SetRecipes={SetRecipes} SetRecipeSelected={SetRecipeSelected} />
        )} />
        <Route path="/recipe/:label" render={props => (
          <RecipeDetail {...props} recipeSelected={recipeSelected} />
        )} />
      </Router>
    </div>
  );
}

export default App;
