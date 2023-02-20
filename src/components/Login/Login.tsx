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
	const url = 'https://api.github.com/login';
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const LogIn = async () => {
		// const response = await fetch(url);
		// const user = await response.json();
		// setUsers(user);
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
					type='text'
					placeholderText='Enter Password...'
					value={password}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPassword(e.currentTarget.value)
					}
				/>
				<Button text='Log In' onClick={() => Login} />
			</form>
		</>
	);
};

export default Login;
