const Recipe = ({recipe}) => {
	return (
		<div className="recipe_item">
			<img
				className="image_item" 
				src={recipe.recipe.image} 
				alt={`Receta de ${recipe.recipe.label}`}
			/>
			<div className="item_body">
				<h2 className="title">{recipe.recipe.label}</h2>
				<p className="calories">{Math.round(recipe.recipe.calories)} calorias</p>
			</div>
		</div>
	);
};

export default Recipe;