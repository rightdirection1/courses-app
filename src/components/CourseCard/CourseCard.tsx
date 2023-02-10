import { FC, useState } from 'react';
import Button from '../Button/Button';
import { mockedAuthorsList } from 'src/constants/mockedAuthorsList';
import './CourseCard.css';
import { convertDurationToHrsMins } from 'src/utiles/durationConverter';

interface CourseCardProps {
	title: string;
	duration: number;
	creationDate: string;
	description: string;
	authors: string[];
}

const CourseCard: FC<CourseCardProps> = ({
	title,
	duration,
	creationDate,
	description,
	authors,
}) => {
	//const [courseAuthors, setCourseAuthors] = useState([]);

	const showCourse = () => {
		console.log('Show Course');
	};

	const displayAuthors = (authorIds: string[]) => {
		const result: string[] = [];

		for (let i = 0; i < authorIds.length; i++) {
			for (let j = 0; j < mockedAuthorsList.length; j++) {
				if (authorIds[i] === mockedAuthorsList[j].id) {
					result.push(mockedAuthorsList[i].name);
				}
			}
		}
		//setCourseAuthors(result);
		return result.join(', ');
	};

	return (
		<>
			<div className='course-card'>
				<div className='left-part'>
					<p>{title}</p>
					<p>{description}</p>
				</div>
				<div className='right-part'>
					<p>Duration {convertDurationToHrsMins(duration)}</p>
					<p>Created {creationDate}</p>
					<p>{displayAuthors(authors)}</p>
					<Button text='Show course' onClick={showCourse} />
				</div>
			</div>
		</>
	);
};

export default CourseCard;
