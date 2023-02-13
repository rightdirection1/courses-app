import React, { FC } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Header.css';

const Header: FC = () => {
	const logOut = () => {
		console.log('Log Out');
	};

	return (
		<header className='header'>
			<Logo />
			<div className='auth'>
				<p>Lyubima</p>
				<Button text='Log Out' onClick={logOut} />
			</div>
		</header>
	);
};

export default Header;
