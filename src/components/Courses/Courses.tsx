import React, { FC, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import './Courses.css';

interface CoursesProps {
	coursesData: any[];
	onClick: (e: React.SyntheticEvent) => void;
}

const Courses: FC<CoursesProps> = ({ coursesData, onClick }: CoursesProps) => {
	const [searchedValue, setSearchedValue] = useState('');

	return (
		<>
			<div className='container'>
				<SearchBar onChange={(value) => setSearchedValue(value)} />
				<Button text='Add new course' onClick={onClick} />
			</div>
			{searchedValue.length > 0
				? coursesData
						.filter((course) =>
							course.title.toLowerCase().includes(searchedValue.toLowerCase())
						)
						.map((course) => (
							<CourseCard
								key={course.id}
								title={course.title}
								duration={course.duration}
								creationDate={course.creationDate}
								description={course.description}
								authors={course.authors}
							/>
						))
				: coursesData.map((course) => (
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
