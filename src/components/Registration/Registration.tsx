import { FC, useState, useEffect, ChangeEvent } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Login from 'src/components/Login/Login';
import { useNavigate, Link } from 'react-router-dom';
import { register } from 'src/services/api';

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

	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	const createUser = async (e) => {
		e.preventDefault();
		if (loading) {
			return;
		}

		setLoading(true);

		try {
			const newUser = {
				name,
				password,
				email,
			};

			const response = await register(newUser);

			const result = await response.json();
			//Temporary check is not exactly the purpose
			console.log(result.errors);
			if (result.errors !== undefined) {
				setErrorMessage('Error in fields');
			}

			if (result.successful === true && result.errors === undefined) {
				navigate('/login', { replace: true });
			}

			setError(null);
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

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
				<button type='submit' disabled={loading} onClick={() => createUser}>
					Register
				</button>
				<div>
					You have an account You can <Link to='/login'>Log In</Link>
				</div>
				<div>{errorMessage}</div>
				{!!error && <div>Api error</div>}
			</form>
		</>
	);
};

export default Registration;
