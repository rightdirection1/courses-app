import { FC } from 'react';
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

	const getCourseInfo = () => {
		console.log('');
	};

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
