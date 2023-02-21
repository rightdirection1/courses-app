import { FC, useEffect } from 'react';
import Button from '../Button/Button';
import { useParams, Link, useNavigate } from 'react-router-dom';

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

	const getCourseInfo = async () => {
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

	const backToCourses = () => {
		navigate('/courses');
	};

	return (
		<>
			<Button text='Back to courses' onClick={backToCourses} />
			<h1>{/*{title}*/}</h1>
			<div className='description'>{/*{descriotion} */}</div>
			<div className='info'>
				<p>
					<span>ID:</span>
				</p>
				<p>
					<span>Duration: </span>
				</p>
				<p>
					<span>Created: </span>
					{/* {creationDate} */}
				</p>
				<p>
					<span>Authors: </span>
					{/* {listAuthors} */}
				</p>
			</div>
		</>
	);
};

export default CourseInfo;
