//React
import React from 'react';
import { Link } from "react-router-dom";

//Components
import Recipe from './Recipe';

//Functions
import formatLabel from '../js/functions/formatLabel';

const Recipes = ({recipes, selected}) => {
	return (
		<div className="recipes_container">
			{
				recipes.map((recipe, index) => (
					<Link className="link_recipe_item" key={index} to={`/recipe/${formatLabel(recipe.recipe.label)}`} onClick={() => { selected(recipe) }}>
						<Recipe recipe={recipe} />
					</Link>
				))
			}
		</div>
	);
} 

export default Recipes;