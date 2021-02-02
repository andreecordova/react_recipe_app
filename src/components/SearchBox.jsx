//React
import React from 'react';

const SearchBox = ({ change, query, search }) => {
	return (
		<div className="search_box">
			<input 
				type="text" 
				className="input_search"
				aria-label="Recipe search" 
				placeholder="Search..."
				onChange={change}
				value={query}
				onKeyPress={search} 
			/>
		</div>
	)
};

export default SearchBox;