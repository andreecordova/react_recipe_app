//React
import React from 'react';

//Components
import Ingredient from './Ingredient';

function Ingridients({ingredients}) {
	return (
		<ul className="ingredients_list">
			{
				ingredients.map((ingredient, index) => (
					<Ingredient key={index} ingredient={ingredient} />
				))
			}
		</ul>
	)
}

export default Ingridients
