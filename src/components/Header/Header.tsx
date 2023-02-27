import { FC } from 'react';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Header.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	getTokenSelector,
	getUserLoggingOutSelector,
	getUserSelector,
} from 'src/store/user/selectors';
import { userLogout } from 'src/store/user/userSlice';

const Header: FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const dispatch = useDispatch();
	const token = useSelector(getTokenSelector);
	const user = useSelector(getUserSelector);
	const loggingOut = useSelector(getUserLoggingOutSelector);

	const logOut = () => {
		if (loggingOut) return;

		dispatch(userLogout(token)).then(() => {
			navigate('/login');
		});
	};

	return (
		<header className='header'>
			<Logo />
			{location.pathname !== '/register' && location.pathname !== '/login' && (
				<div className='auth'>
					{user?.name && <p>{user?.name}</p>}
					<Button text='Log Out' disabled={loggingOut} onClick={logOut} />
				</div>
			)}
		</header>
	);
};

export default Header;
