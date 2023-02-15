import './App.css';
import { useState } from 'react';
//import { mockedAuthorsList } from './constants/mockedAuthorsList';
import { mockedCoursesList } from './constants/mockedCoursesList';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<Header />
			{showForm ? (
				<CreateCourse onCreate={() => setShowForm(false)} />
			) : (
				<Courses
					onClick={() => setShowForm(true)}
					coursesData={mockedCoursesList}
				/>
			)}
		</>
	);
}

export default App;
