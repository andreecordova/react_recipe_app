//React
import React from 'react';
import { Link } from "react-router-dom";

//Components
import Ingredients from './Ingredients';

function RecipeDetail({recipeSelected}) {
	return (
		<div className="recipe">
			<div className="back_button_container">
				<Link className="back_button" to="/">Regresar</Link>
			</div>

			<div className="recipe_detail_container">
				<div className="recipe_image_container">
					<img
						className="recipe_image" 
						src={recipeSelected.recipe.image} 
						alt={`Receta de ${recipeSelected.recipe.label}`}
					/>
				</div>
				<div className="recipe_information_container">
					<h1 className="title">{recipeSelected.recipe.label}</h1>
					<Ingredients ingredients={recipeSelected.recipe.ingredients} />
				</div>
			</div>
		</div>
	);
}

export default RecipeDetail;