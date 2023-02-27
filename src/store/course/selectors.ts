export const getCoursesLoadingSelector = (state: any) =>
	state.course.loading ?? true;
export const getCoursesSelector = (state: any) => state.course.courses;
