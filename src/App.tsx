import './App.css';
//import { mockedAuthorsList } from './constants/mockedAuthorsList';
import { mockedCoursesList } from './constants/mockedCoursesList';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	return (
		<>
			<Header />
			<Courses coursesData={mockedCoursesList} />
			<CreateCourse />
		</>
	);
}

export default App;
