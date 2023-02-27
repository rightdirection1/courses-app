import { FC, useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { parseJSON } from 'src/utiles/utils';

const Header: FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const logOut = () => {
		// if (localStorage.getItem('token') !== undefined) {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		// }

		navigate('/login');
	};

	return (
		<header className='header'>
			<Logo />
			{location.pathname !== '/register' && location.pathname !== '/login' && (
				<div className='auth'>
					<p>{parseJSON(localStorage.getItem('user'))?.name}</p>
					<Button text='Log Out' onClick={logOut} />
				</div>
			)}
		</header>
	);
};

export default Header;
