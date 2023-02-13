import React, { FC, ChangeEvent, SyntheticEvent } from 'react';

interface InputProps {
	labelText: string;
	placeholderText: string;
	type: string;
	onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
	value?: string;
}

const Input: FC<InputProps> = ({
	labelText,
	placeholderText,
	type,
	onChange,
	value,
}) => {
	return (
		<div>
			<label>{labelText}</label>
			<input
				type={type}
				name='input'
				value={value}
				placeholder={placeholderText}
				onChange={onChange}
				required
			/>
		</div>
	);
};

export default Input;
