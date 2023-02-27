import './App.css';
import { useState, useEffect } from 'react';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import ProtectedLayout from './components/Layout/ProtectedLayout';
import PublicLayout from './components/Layout/PublicLayout';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { login } from './store/user/userSlice';
import { parseJSON } from './utiles/utils';

function Main() {
	const [loading, setLoading] = useState(true);

	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token');
		const user = localStorage.getItem('user');

		dispatch(login({ user: parseJSON(user), token }));
		setLoading(false);
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route element={<ProtectedLayout />}>
					<Route index path='/courses' element={<Courses />}></Route>
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
	);
}

function App() {
	console.log(location);

	return (
		<Provider store={store}>
			<Main />
		</Provider>
	);
}

export default App;
