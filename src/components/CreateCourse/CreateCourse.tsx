import React, { ChangeEvent, FC, useState } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import Input from '../Input/Input';
import { mockedAuthorsList } from 'src/constants/mockedAuthorsList';
import Button from '../Button/Button';
import './CreateCourse.css';
import { v4 as uuidv4 } from 'uuid';
import { convertDurationToHrsMins } from 'src/utiles/durationConverter';
import { mockedCoursesList } from 'src/constants/mockedCoursesList';
import Courses from '../Courses/Courses';

interface FormProps {
	chlidren?: React.ReactNode | React.ReactNode[];
}

const CreateCourse: FC<FormProps> = () => {
	const [duration, setDuration] = useState(0);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [author, setAuthor] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);
	const [isCreatedCourse, setCreatedCourse] = useState(false);

	const createCourse = (e: any) => {
		e.preventDefault();
		const authorIds = courseAuthors.map((author) => author.id);
		const currentDate = new Date().toString();

		if (title.length <= 1 || description.length <= 1) {
			alert('Text length should be at least 2 characters');
			return;
		}

		if (duration < 0) {
			alert('duration should be more than 0 minutes');
			return;
		}

		const newCourse = {
			id: uuidv4(),
			title: title,
			description: description,
			creationDate: currentDate,
			duration: duration,
			authors: authorIds,
		};

		const tempCourses: any = [];
		tempCourses.push(newCourse);
		setCourses([...courses, ...tempCourses]);
		setCreatedCourse(true);

		e.target.reset();
	};

	const addAuthor = (id: string) => {
		/*when user clicks on this button the corresponding author disappears from the Authors list and shows in Course authors.
		 New author should be added to the initial author's list;*/

		const authorIndex = authors.findIndex((author) => author.id === id);
		let poppedAuthor: any = {};

		if (authorIndex > -1) {
			poppedAuthor = authors.find((_, ix: number) => ix === authorIndex);
		}
		authors.splice(authorIndex, 1);

		const result: any = [];
		result.push(poppedAuthor);

		setCourseAuthors((item) => [...item, ...result]);
		console.log(result);
		console.log(courseAuthors);
	};

	const deleteAuthor = (authorId: string) => {
		setAuthors((items) => [
			...items,
			...courseAuthors.filter((author) => author.id == authorId),
		]);

		setCourseAuthors(courseAuthors.filter((author) => author.id !== authorId));
	};

	const createAuthor = () => {
		const newAuthor = {
			id: uuidv4().toString(),
			name: author,
		};
		const result = [];
		result.push(newAuthor);
		if (author.length === 0) {
			return;
		}

		setAuthors(() => [...authors, ...result]);
		setAuthor('');
	};
	return (
		<>
			{isCreatedCourse ? (
				<Courses onClick={() => console.log(2)} coursesData={courses} />
			) : (
				<form onSubmit={createCourse}>
					<>
						<div className='create-course'>
							<Input
								labelText='Title'
								placeholderText='Title...'
								type='text'
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setTitle(e.currentTarget.value);
								}}
							/>
							<label htmlFor='descrpition'>Description:</label>
							<textarea
								id='description'
								onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
									setDescription(e.currentTarget.value);
								}}
								name='description'
								required
							></textarea>
							<button type='submit'>Create Course </button>
						</div>
						<div className='create-author'>
							<h1>Add author</h1>
							<Input
								labelText='Author'
								placeholderText='Create Author...'
								type='text'
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setAuthor(e.currentTarget.value);
								}}
							/>
							<Button text='Create Author' onClick={createAuthor} />
						</div>
						<div className='all-authors'>
							<div className='authors'>
								<h2>Authors</h2>
								{authors.map((author) => {
									return (
										<AuthorItem
											key={author.id}
											name={author.name}
											buttonText='Add author'
											onClick={() => addAuthor(author.id)}
										/>
									);
								})}
							</div>
							<div className='courses-author'>
								<h2>Course authors</h2>
								{/* {courseAuthors.length === 0 ? <p> No courses authors</p> : <></>} */}
								{courseAuthors.length !== 0 ? (
									courseAuthors.map((author) => {
										return (
											<AuthorItem
												key={author.id}
												name={author.name}
												buttonText='Delete author'
												onClick={() => deleteAuthor(author.id)}
											/>
										);
									})
								) : (
									<p className='empty-list'>Author list is empty</p>
								)}
							</div>
						</div>
						<div className='duration'>
							<h1>Duration</h1>
							<Input
								labelText='Duration'
								placeholderText='Duration...'
								type='number'
								onChange={(e: ChangeEvent<HTMLInputElement>) => {
									setDuration(+e.currentTarget.value);
								}}
							/>
							<div>Duration: {convertDurationToHrsMins(duration)}</div>
						</div>
					</>
				</form>
			)}
		</>
	);
};

export default CreateCourse;
