import { FC, useState, useEffect, ChangeEvent } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Login from 'src/components/Login/Login';
import { useNavigate, Link } from 'react-router-dom';

// interface RegistrationProps {
// 	name: string;
// 	email: string;
// 	password: string;
// }

const Registration: FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const createUser = async () => {
		const newUser = {
			name,
			password,
			email,
		};

		const response = await fetch('http://localhost:4000/register', {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const result = await response.json();
		console.log(result);
		navigate('/login', { replace: true });
		return result;
	};

	// useEffect(() => {
	// 	createUser();
	// }, []);

	return (
		<>
			<form onSubmit={createUser}>
				<Input
					labelText='Name'
					placeholderText='Enter name'
					type='text'
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setName(e.currentTarget.value);
					}}
				/>
				<Input
					labelText='Email'
					placeholderText='Enter email'
					type='text'
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setEmail(e.currentTarget.value);
					}}
				/>
				<Input
					labelText='Password'
					placeholderText='Enter password'
					type='password'
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setPassword(e.currentTarget.value);
					}}
				/>
				<button type='submit' onClick={() => createUser}>
					Register
				</button>
				<div>
					You have an account You can <Link to='/login'>Log In</Link>
				</div>
			</form>
		</>
	);
};

export default Registration;
