const API_DOMAIN = 'http://localhost:4000';

const postRequest = async (path: string, data: { [key: string]: any }) => {
	const response = await fetch(API_DOMAIN + path, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response;
};

const getRequest = async (path: string, data: { [key: string]: any }) => {
	const response = await fetch(API_DOMAIN + path, {
		method: 'GET',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return response;
};

export const login = async (email: string, password: string) => {
	return await postRequest('/login', {
		email,
		password,
	});
};

export const register = async (data: {
	name: string;
	email: string;
	password: string;
}) => {
	return await postRequest('/register', data);
};
