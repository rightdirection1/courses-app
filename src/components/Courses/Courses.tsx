import React, { FC } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import './Courses.css';

interface CoursesProps {
	coursesData: any[];
}

const Courses: FC<CoursesProps> = ({ coursesData }: CoursesProps) => {
	const addNewCourse = () => {
		console.log('Add new course');
	};

	return (
		<>
			<div className='container'>
				<SearchBar />
				<Button text='Add new course' onClick={addNewCourse} />
			</div>
			{coursesData.map((course) => (
				<CourseCard
					key={course.id}
					title={course.title}
					duration={course.duration}
					creationDate={course.creationDate}
					description={course.description}
					authors={course.authors}
				/>
			))}
		</>
	);
};

export default Courses;
