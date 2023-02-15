import React, { FC } from 'react';
import Button from '../Button/Button';
import './AuthorItem.css';

interface AuthorItemProps {
	name: string;
	buttonText: string;
	onClick: (e: React.SyntheticEvent) => void;
}

const AuthorItem: FC<AuthorItemProps> = ({ name, buttonText, onClick }) => {
	return (
		<div className='container-auth'>
			<p>{name}</p>
			<Button text={buttonText} onClick={onClick} />
		</div>
	);
};

export default AuthorItem;
