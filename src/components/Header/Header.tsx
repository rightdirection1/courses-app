import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Header.css';

const Header: FC = () => {
	const logOut = () => {
		console.log('Log Out');
	};

	return (
		<div className='header'>
			<Logo />
			<div>
				<p>Lyubima</p>
				<Button text='Log Out' onClick={logOut} />
			</div>
		</div>
	);
};

export default Header;
