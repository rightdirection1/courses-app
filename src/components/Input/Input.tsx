import React, { FC } from 'react';

interface InputProps {
	labelText: string;
	placeholderText: string;
	onChange: () => void;
}

const Input: FC<InputProps> = ({ labelText, placeholderText, onChange }) => {
	return (
		<div>
			<label>{labelText}</label>
			<input
				type='text'
				name='search'
				placeholder={placeholderText}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
