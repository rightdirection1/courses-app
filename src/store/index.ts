import { configureStore } from '@reduxjs/toolkit';
import userReducer, { name as userName } from './user/userSlice';
import courseReducer, { name as courseName } from './course/courseSlice';

export const store = configureStore({
	reducer: {
		[userName]: userReducer,
		[courseName]: courseReducer,
	},
});
