import React, { FC } from 'react';
import './Button.css';

interface ButtonProps {
	text: string;
	disabled?: boolean;
	onClick: (e: React.SyntheticEvent) => void;
}

const Button: FC<ButtonProps> = ({ disabled, text, onClick }) => {
	return (
		<>
			<button
				type='button'
				className='button'
				disabled={disabled}
				onClick={onClick}
			>
				{text}
			</button>
		</>
	);
};

export default Button;
