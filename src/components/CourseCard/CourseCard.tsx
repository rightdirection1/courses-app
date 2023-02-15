import { FC } from 'react';
import Button from '../Button/Button';
import { mockedAuthorsList } from 'src/constants/mockedAuthorsList';
import './CourseCard.css';
import { convertDurationToHrsMins } from 'src/utiles/durationConverter';
import { dateFormatter } from 'src/utiles/dateFormatter';
import { CourseData } from './CourseCard.types';

interface CourseCardProps {
	course: CourseData;
}

const CourseCard: FC<CourseCardProps> = ({
	course: { title, description, authors, duration, creationDate },
}) => {
	const showCourse = () => {
		console.log('Show Course');
	};

	const displayAuthors = (authorIds: string[]) => {
		return authorIds
			.map(
				(authorId) =>
					mockedAuthorsList.find((author) => author.id === authorId)?.name
			)
			.filter(Boolean)
			.join(', ');
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
