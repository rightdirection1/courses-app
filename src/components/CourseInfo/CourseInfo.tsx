import { FC } from 'react';
import Button from '../Button/Button';
import { useParams, Link } from 'react-router-dom';

interface CourseInfoProps {
	id: string;
	title: string;
	descriotion: string;
	duration: number;
	listAuthors: any;
	creationDate: string;
}

const CourseInfo: FC<CourseInfoProps> = ({
	id,
	title,
	descriotion,
	duration,
	listAuthors,
	creationDate,
}) => {
	return (
		<>
			<Button
				text='Back to courses'
				onClick={() => console.log('Back to courses')}
			/>
			<h1>{title}</h1>
			<div className='description'>{descriotion}</div>
			<div className='info'>
				<p>
					<span>ID:</span> {id}
				</p>
				<p>
					<span>Duration: </span>
					{duration}
				</p>
				<p>
					<span>Created: </span>
					{creationDate}
				</p>
				<p>
					<span>Authors: </span>
					{listAuthors}
				</p>
			</div>
		</>
	);
};

export default CourseInfo;
