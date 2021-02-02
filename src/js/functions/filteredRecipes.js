const filteredRecipes = (recipes) => {
	return recipes.filter(item => item.recipe.image != null );
};

export default filteredRecipes;