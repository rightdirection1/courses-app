import { FC, useState } from 'react';
import Button from '../Button/Button';
import { mockedAuthorsList } from 'src/constants/mockedAuthorsList';
import './CourseCard.css';
import { convertDurationToHrsMins } from 'src/utiles/durationConverter';
import { dateFormatter } from 'src/utiles/dateFormatter';

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
	const [authorsList, setAuthorList] = useState(mockedAuthorsList);
	const showCourse = () => {
		console.log('Show Course');
	};

	const displayAuthors = (authorIds: string[]) => {
		const result: string[] = [];
		for (let i = 0; i < authorIds.length; i++) {
			for (let j = 0; j < authorsList.length; j++) {
				console.log(authorIds[i]);
				console.log(authorsList[j].id);
				if (authorIds[i] === authorsList[j].id) {
					result.push(authorsList[j].name);
				}
			}
		}
		return result.join(', ');
	};

	return (
		<>
			<div className='course-card'>
				<div className='left-part'>
					<p>{title}</p>
					<p className='description'>{description}</p>
				</div>
				<div className='right-part'>
					<p>Duration {convertDurationToHrsMins(duration)}</p>
					<p>Created {dateFormatter(creationDate)}</p>
					<p className='course-authors'>{displayAuthors(authors)}</p>
					<Button text='Show course' onClick={showCourse} />
				</div>
			</div>
		</>
	);
};

export default CourseCard;
