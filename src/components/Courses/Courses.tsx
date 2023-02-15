import React, { FC, useMemo, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import { CourseData } from '../CourseCard/CourseCard.types';
import './Courses.css';

interface CoursesProps {
	coursesData: CourseData[];
	onClick: (e: React.SyntheticEvent) => void;
}

const Courses: FC<CoursesProps> = ({ coursesData, onClick }: CoursesProps) => {
	const [searchedValue, setSearchedValue] = useState('');

	const courses = useMemo(() => {
		const searchTerm = searchedValue.trim();
		if (searchTerm.length === 0) {
			return coursesData;
		}

		return coursesData.filter((course) =>
			course.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [coursesData, searchedValue]);

	return (
		<>
			<div className='container'>
				<SearchBar onChange={(value) => setSearchedValue(value)} />
				<Button text='Add new course' onClick={onClick} />
			</div>
			{courses.length === 0 && <p>No courses found.</p>}
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</>
	);
};

export default Courses;
