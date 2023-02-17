import './App.css';
import { useState } from 'react';
import { mockedCoursesList } from './constants/mockedCoursesList';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login';

interface RoutesProps {
	children?: React.ReactNode;
	location?: Partial<Location> | string;
}

function App() {
	const [showForm, setShowForm] = useState(false);
	return (
		<>
			{/* <Header /> */}
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />}></Route>
					<Route path='/register' element={<Registration />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/courses/add' element={<CreateCourse />}></Route>
					<Route
						path='/courses'
						element={
							<Courses
								onClick={() => setShowForm(true)}
								coursesData={mockedCoursesList}
							/>
						}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
