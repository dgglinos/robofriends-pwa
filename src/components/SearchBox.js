import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	console.log('SearchBox')
	return (
		<div className='pa2'>
			<label>
				Robot search field
				<input
					className='pa3 ba b--green bg-lightest-blue' 
					type='search' 
					placeholder='search robots'
					onChange={searchChange} 
				/>
			</label>
		</div>
	);
}

export default SearchBox;