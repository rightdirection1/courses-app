import { FC, useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import './SearchBar.css';

interface SearchBarProps {
	onChange: (parm: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onChange }) => {
	const [searchedValue, setSearchedValue] = useState('');

	/*
   User should have ability to search course by title and id;
The search is performed by the occurrence of characters in  string, and not just by a match at the beginning of the string;
Case-insensitive search;
When user clicks on Search button it displays all courses that match the search query;
All courses are displayed when user cleans search field.
   */

	return (
		<div className='search-bar-container'>
			<Input
				labelText=''
				value={searchedValue}
				onChange={(e) => setSearchedValue(e.currentTarget.value)}
				placeholderText='Search...'
				type='text'
			/>
			<Button text='Search' onClick={() => onChange(searchedValue)} />
		</div>
	);
};

export default SearchBar;
