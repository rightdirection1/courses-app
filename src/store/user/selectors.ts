export const getUserSelector = (state: any) => state.user.user;
export const getTokenSelector = (state: any) => state.user.token;
export const getUserLoggingInSelector = (state: any): boolean =>
	state.user.loggingIn ?? false;
export const getUserLoggingOutSelector = (state: any): boolean =>
	state.user.loggingOut ?? false;
