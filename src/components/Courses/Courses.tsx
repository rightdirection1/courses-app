import React, { FC } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import './Courses.css';

interface CoursesProps {
	coursesData: any[];
	onClick: (e: React.SyntheticEvent) => void;
}

const Courses: FC<CoursesProps> = ({ coursesData, onClick }: CoursesProps) => {
	const addNewCourse = () => {
		console.log('Add new course');
	};

	return (
		<>
			<div className='container'>
				<SearchBar />
				<Button text='Add new course' onClick={onClick} />
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
