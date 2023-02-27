const API_DOMAIN = 'http://localhost:4000';

export const postRequest = async (
	path: string,
	data: { [key: string]: any },
	token?: string
) => {
	return await request({
		method: 'POST',
		path,
		data,
		token,
	});
};

export const deleteRequest = async ({
	path,
	data,
	token,
}: {
	path: string;
	data?: { [key: string]: any };
	token?: string;
}) => {
	return await request({
		method: 'DELETE',
		path,
		data,
		token,
	});
};

const request = async ({
	path,
	data,
	token,
	method,
}: {
	path: string;
	method: string;
	data?: { [key: string]: any };
	token?: string;
}) => {
	const options: any = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
	};
	if (token) {
		options.headers.Authorization = token;
	}
	if (data) {
		options.body = JSON.stringify(data);
	}
	const response = await fetch(API_DOMAIN + path, options);

	return response;
};

export const getRequest = async (path: string) => {
	const response = await fetch(API_DOMAIN + path, {
		method: 'GET',
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
