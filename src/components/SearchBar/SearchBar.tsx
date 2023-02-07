import React, { FC } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const SearchBar: FC = () => {
	const onSearch = () => {
		console.log('Search');
	};

	const onChange = () => {
		console.log('text');
	};
	/*
   User should have ability to search course by title and id;
The search is performed by the occurrence of characters in the string, and not just by a match at the beginning of the string;
Case-insensitive search;
When user clicks on Search button it displays all courses that match the search query;
All courses are displayed when user cleans search field.
   */

	return (
		<>
			<Input
				labelText='Search'
				placeholderText='Search...'
				onChange={onChange}
			/>
			<Button text='Search' onClick={onSearch} />
		</>
	);
};

export default SearchBar;
