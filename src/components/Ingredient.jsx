import React from 'react'

function Ingredient({ingredient}) {
	return (
		<li className="ingredient_item">{ingredient.text}</li>
	)
}

export default Ingredient
