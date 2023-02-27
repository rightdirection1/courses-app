import { createSlice } from '@reduxjs/toolkit';
import { getRequest, postRequest } from 'src/services/api';

const slice = createSlice({
	name: 'course',
	initialState: {} as any,
	reducers: {
		loadCourses(state) {
			state.loading = true;
		},
		coursesLoaded(state: any, action) {
			state.courses = action.payload;
			state.loading = false;
		},
		addingCourse(state) {
			state.adding = true;
		},
		courseAdded(state: any, action) {
			state.courses = action.payload;
			state.adding = false;
		},
	},
});

export const fetchCourses: any = () => async (dispatch: any) => {
	dispatch(loadCourses());

	try {
		let resp: any = await getRequest('/courses/all');
		resp = await resp.json();

		dispatch(coursesLoaded(resp.result));
	} catch (e) {
		console.error(e);
	}
};

export const addCourse: any =
	(data: any, token: string) => async (dispatch: any) => {
		dispatch(loadCourses());

		try {
			let resp: any = await postRequest('/courses/add', data, token);
			resp = await resp.json();

			dispatch(courseAdded(resp.result));
		} catch (e) {
			console.error(e);
		}
	};

export const name = slice.name;
export const { loadCourses, coursesLoaded, addingCourse, courseAdded } =
	slice.actions;
export default slice.reducer;
