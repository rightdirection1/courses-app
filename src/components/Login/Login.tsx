import { FC, useState, ChangeEvent } from 'react';
import Button from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'src/store/user/userSlice';
import { getUserLoggingInSelector } from 'src/store/user/selectors';

// interface LoginProps {
// 	name: string;
// 	password: string;
// }
/*
Login should have functionality that sends request to API for getting token.
See /login endpoint in API Swagger.
Use form tag.
You should use Input and Button components.
Request should be sent by submit event. Use onSubmit props for form.
Response contains value result, it's user's token. You should save it to the localStorage.
After successful login, user is redirected to the Courses page by route
*/
const Login: FC = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const loading = useSelector(getUserLoggingInSelector);

	const LogIn = () => {
		if (loading) return;

		dispatch(
			userLogin({
				email: name,
				password,
			})
		).then(() => {
			navigate('/courses');
		});
	};

	return (
		<>
			<h1>Log In</h1>
			<form onSubmit={() => console.log('Submit')}>
				<Input
					labelText='Name'
					type='text'
					placeholderText='Enter Name...'
					value={name}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setName(e.currentTarget.value)
					}
				/>
				<Input
					labelText='Password'
					type='password'
					placeholderText='Enter Password...'
					value={password}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPassword(e.currentTarget.value)
					}
				/>
				<div>
					You don't have an account You can <Link to='/register'>Register</Link>
				</div>
				<Button text='Log In' disabled={loading} onClick={LogIn} />
			</form>
		</>
	);
};

export default Login;
