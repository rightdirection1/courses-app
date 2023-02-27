import './App.css';
import { useState, useEffect } from 'react';
import { mockedCoursesList } from './constants/mockedCoursesList';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import {
	BrowserRouter,
	Routes,
	Route,
	useParams,
	useNavigate,
} from 'react-router-dom';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ProtectedLayout from './components/Layout/ProtectedLayout';
import PublicLayout from './components/Layout/PublicLayout';

interface RoutesProps {
	children?: React.ReactNode;
	location?: Partial<Location> | string;
}

function App() {
	//const navigate = useNavigate();
	// useEffect(() => {
	// 	const token = localStorage.getItem('token');
	// 	if (token) {
	// 		navigate('courses');
	// 	}
	// }, []);
	console.log(location);
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route element={<ProtectedLayout />}>
						<Route
							index
							path='/courses'
							element={<Courses coursesData={mockedCoursesList} />}
						></Route>
						<Route path='/courses/add' element={<CreateCourse />}></Route>
						<Route path='/courses/:courseId' element={<CourseInfo />}></Route>
					</Route>
					<Route element={<PublicLayout />}>
						<Route path='/register' element={<Registration />}></Route>
						<Route path='/login' element={<Login />}></Route>
					</Route>

					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
