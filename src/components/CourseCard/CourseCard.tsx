import { AnyARecord } from 'dns';
import React, { FC } from 'react';
import Button from '../Button/Button';

interface CourseCardProps {
	title: string;
	duration: number;
	creationDate: string;
	description: string;
}

const CourseCard: FC<CourseCardProps> = ({
	title,
	duration,
	creationDate,
	description,
}) => {
	const showCourse = () => {
		console.log('Show Course');
	};

	const convertDurationToHrsMins: any = (duration: number) => {
		let hour: any = Math.floor(duration / 60);
		let minutes: any = duration % 60;
		hour = hour < 10 ? '0' + hour : hour;
		minutes = minutes < 10 ? '0' + minutes : minutes;
		return hour + ':' + minutes + 'hours';
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
					<p>Authors</p>
				</div>
			</div>
			<Button text='Show course' onClick={showCourse} />
		</>
	);
};

export default CourseCard;
