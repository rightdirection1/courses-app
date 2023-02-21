import { FC, useState, ChangeEvent } from 'react';
import Button from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';
import { useNavigate } from 'react-router-dom';

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
	const url = 'http://localhost:4000/login';
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const LogIn = async () => {
		let response: any = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({ email: name, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		response = await response.json();
		if (response.successful !== true) {
			return;
		}
		const userToken = response.result;
		localStorage.setItem('token', userToken);
		localStorage.setItem('user', JSON.stringify(response.user));

		//console.log(user);
		navigate('/courses');
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
				<Button text='Log In' onClick={LogIn} />
			</form>
		</>
	);
};

export default Login;
