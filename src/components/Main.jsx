//React
import React from 'react';

//Components
import SearchBox from './SearchBox';
import EmptyResults from './EmptyResults';
import Recipes from './Recipes';

function Main({ change, search, recipes, selected }) {
	return (
		<div className="main">
			<section className="title_container">
				<h1 className="title">Recipe Search</h1>
			</section>

			<section className="search_box_container">
				<SearchBox search={search} change={change} />
			</section>

			{ recipes.length > 0 ? 
				recipes.length === 1 && recipes[0] === 'empty' ?
				<EmptyResults /> : 
				<Recipes recipes={recipes} selected={selected} /> : null
			}
		</div>
	)
}

export default Main;