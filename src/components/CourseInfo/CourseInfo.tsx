import { FC, useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockedCoursesList } from 'src/constants/mockedCoursesList';

// interface CourseInfoProps {
// 	id: any;
// 	title: string;
// 	descriotion: string;
// 	duration: number;
// 	listAuthors: any;
// 	creationDate: string;
// }

const CourseInfo: FC = () => {
	const navigate = useNavigate();
	const params = useParams();
	const [currentCourse, setCurrentCourse] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const getCourseInfo = async () => {
		const foundCourse = mockedCoursesList.find(
			({ id }) => id === params.courseId
		);

		setCurrentCourse(foundCourse);
		setLoading(false);
		// console.log(params.courseId);
		// const response = await fetch(
		// 	`http://localhost:4000/courses/${params.courseId}`,
		// 	{
		// 		method: 'GET',
		// 		//body: JSON.stringify({ id: courseId }),
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 	}
		// );
		// const result = await response.json();
		// return result;
	};

	useEffect(() => {
		console.log(getCourseInfo());
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	const backToCourses = () => {
		navigate('/courses');
	};

	return (
		<>
			<Button text='Back to courses' onClick={backToCourses} />
			<h1>{currentCourse.title}</h1>
			<div className='description'>{/*{descriotion} */}</div>
			<div className='info'>
				<p>
					<span>ID: {currentCourse.id}</span>
				</p>
				<p>
					<span>Duration: {currentCourse.duration}</span>
				</p>
				<p>
					<span>Created: </span>
					{currentCourse.creationDate}
				</p>
				<p>
					<span>Authors: </span>
					{currentCourse.listAuthors}
				</p>
			</div>
		</>
	);
};

export default CourseInfo;
