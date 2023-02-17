import { FC, useState } from 'react';
import Button from 'src/components/Button/Button';
import Input from 'src/components/Input/Input';

// interface LoginProps {
// 	name: string;
// 	password: string;
// }

const Login: FC = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const LogIn = () => {
		console.log('Log In');
	};

	return (
		<>
			<h1>Log In</h1>
			<form onSubmit={() => console.log('Submit')}>
				<Input
					labelText='Name'
					type='text'
					placeholderText='Enter Name...'
					onChange={() => console.log('Name')}
				/>
				<Input
					labelText='Password'
					type='text'
					placeholderText='Enter Password...'
					onChange={() => console.log('Password')}
				/>
				<Button text='Log In' onClick={() => Login} />
			</form>
		</>
	);
};

export default Login;
