import { FC, useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	const logOut = () => {
		navigate('/login');
		if (localStorage.getItem('token') !== undefined) {
			localStorage.removeItem('token');
			setIsLoggedIn(true);
		}
	};

	return (
		<header className='header'>
			<Logo />
			{location.pathname === '/register' || location.pathname === '/login' ? (
				<></>
			) : (
				<div className='auth'>
					<p>{JSON.parse(localStorage.getItem('user')).name}</p>
					{isLoggedIn ? <></> : <Button text='Log Out' onClick={logOut} />}
				</div>
			)}
		</header>
	);
};

export default Header;
