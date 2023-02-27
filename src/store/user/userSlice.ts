import { createSlice } from '@reduxjs/toolkit';
import { deleteRequest, postRequest } from 'src/services/api';

const slice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		loggingIn(state: any) {
			state.loggingIn = true;
		},
		login(state: any, action) {
			state.token = action.payload.token;
			state.user = action.payload.user;
			state.loggingIn = false;
		},
		loggingOut(state: any) {
			state.loggingOut = true;
		},
		logout(state: any) {
			state.token = null;
			state.user = null;
			state.loggingOut = false;
		},
	},
});

export const userLogin: any =
	(data: { email; password }) => async (dispatch: any) => {
		dispatch(loggingIn());

		try {
			const response: any = await (await postRequest('/login', data)).json();
			if (response.successful !== true) {
				return;
			}
			const userToken = response.result;

			localStorage.setItem('token', userToken);
			localStorage.setItem('user', JSON.stringify(response.user));

			dispatch(
				login({
					user: response.user,
					token: response.result,
				})
			);
		} catch (e) {
			console.error(e);
		}
	};

export const userLogout: any = (token: string) => async (dispatch: any) => {
	dispatch(loggingOut());

	try {
		const response = await deleteRequest({
			path: '/logout',
			token,
		});
		if (![200, 201].includes(response.status)) {
			return;
		}

		localStorage.removeItem('token');
		localStorage.removeItem('user');

		dispatch(logout());
	} catch (e) {
		console.error(e);
	}
};

export const name = slice.name;
export const { loggingIn, login, loggingOut, logout } = slice.actions;
export default slice.reducer;
