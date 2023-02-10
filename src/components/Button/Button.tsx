import React, { FC } from 'react';
import './Button.css';

interface ButtonProps {
	text: string;
	onClick: (e: React.SyntheticEvent) => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<div>
			<button className='button' onClick={onClick}>
				{text}
			</button>
		</div>
	);
};

export default Button;
