import React, { FC, ChangeEvent, SyntheticEvent } from 'react';

interface InputProps {
	labelText: string;
	placeholderText: string;
	onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ labelText, placeholderText, onChange }) => {
	return (
		<div>
			<label>{labelText}</label>
			<input
				type='text'
				name='input'
				placeholder={placeholderText}
				onChange={onChange}
				required
			/>
		</div>
	);
};

export default Input;
