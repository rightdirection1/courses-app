import React, { FC, useEffect, useMemo, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	getCoursesLoadingSelector,
	getCoursesSelector,
} from 'src/store/course/selectors';
import { fetchCourses } from 'src/store/course/courseSlice';
import './Courses.css';

const Courses: FC = () => {
	const [searchedValue, setSearchedValue] = useState('');
	const navigate = useNavigate();

	const loading = useSelector(getCoursesLoadingSelector);
	const coursesData = useSelector(getCoursesSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCourses());
	}, []);

	const courses = useMemo(() => {
		const searchTerm = searchedValue.trim();
		if (searchTerm.length === 0) {
			return coursesData;
		}

		return coursesData.filter((course) =>
			course.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [coursesData, searchedValue]);

	if (loading) {
		return <div className='container'>Loading...</div>;
	}

	return (
		<>
			<div className='container'>
				<SearchBar onChange={(value) => setSearchedValue(value)} />
				<Button
					text='Add new course'
					onClick={() => navigate('/courses/add')}
				/>
			</div>
			{courses.length === 0 && <p>No courses found.</p>}
			{courses.map((course) => (
				<CourseCard key={course.id} course={course} />
			))}
		</>
	);
};

export default Courses;
