//React
import React from 'react';

//Components
import Ingredient from './Ingredient';

function RecipeDetail({recipeSelected}) {
	return (
		<div className="recipe">
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
					<p className="sub_title">Ingredientes:</p>
					<ul className="ingredients_list">
					{
						recipeSelected.recipe.ingredients.map((ingredient, index) => (
							<Ingredient key={index} ingredient={ingredient} />
						))
					}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetail;