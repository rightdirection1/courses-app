import React, { ChangeEvent, FC, useState } from 'react';
import AuthorItem from '../AuthorItem/AuthorItem';
import Input from '../Input/Input';
import { mockedAuthorsList } from 'src/constants/mockedAuthorsList';
import Button from '../Button/Button';
import './CreateCourse.css';
import { v4 as uuidv4 } from 'uuid';
import { convertDurationToHrsMins } from 'src/utiles/durationConverter';
import { mockedCoursesList } from 'src/constants/mockedCoursesList';

interface FormProps {
	onCreate: () => void;
}

const CreateCourse: FC<FormProps> = ({ onCreate }) => {
	const [duration, setDuration] = useState(0);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [author, setAuthor] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [authors, setAuthors] = useState([...mockedAuthorsList]);

	const createCourse = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (title.length <= 1 || description.length <= 1) {
			alert('Text length should be at least 2 characters');
			return;
		}

		if (duration <= 0) {
			alert('duration should be more than 0 minutes');
			return;
		}

		const authorIds = courseAuthors.map((author) => author.id);
		const currentDate = new Date().toString();

		const newCourse = {
			id: uuidv4(),
			title: title,
			description: description,
			creationDate: currentDate,
			duration: duration,
			authors: authorIds,
		};

		mockedCoursesList.push(newCourse);
		onCreate();
	};

	const addAuthor = (id: string) => {
		const authorToAdd = authors.find((author) => author.id === id);
		if (!authorToAdd) {
			return;
		}

		setAuthors(authors.filter((author) => author.id !== id));
		setCourseAuthors([...courseAuthors, authorToAdd]);
	};

	const deleteAuthor = (authorId: string) => {
		setAuthors((items) => [
			...items,
			...courseAuthors.filter((author) => author.id == authorId),
		]);

		setCourseAuthors(courseAuthors.filter((author) => author.id !== authorId));
	};

	const createAuthor = () => {
		if (typeof author !== 'string' || author.trim() === '') {
			return;
		}

		const authorToAdd = {
			id: uuidv4().toString(),
			name: author,
		};

		setAuthors(() => [...authors, authorToAdd]);
		setAuthor('');
		mockedAuthorsList.push(authorToAdd);
	};

	return (
		<form onSubmit={createCourse}>
			<div className='create-course'>
				<Input
					labelText='Title'
					placeholderText='Title...'
					type='text'
					value={title}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setTitle(e.currentTarget.value);
					}}
				/>
				<label htmlFor='descrpition'>Description:</label>
				<textarea
					id='description'
					name='description'
					value={description}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
						setDescription(e.currentTarget.value);
					}}
				></textarea>
				<button type='submit'>Create Course </button>
			</div>
			<div className='create-author'>
				<h1>Add author</h1>
				<Input
					labelText='Author'
					placeholderText='Create Author...'
					type='text'
					value={author}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setAuthor(e.currentTarget.value);
					}}
				/>
				<Button text='Create Author' onClick={createAuthor} />
			</div>
			<div className='all-authors'>
				<div className='authors'>
					<h2>Authors</h2>
					{authors.length === 0 && (
						<p className='empty-list'>Author list is empty</p>
					)}
					{authors.map((author) => (
						<AuthorItem
							key={author.id}
							name={author.name}
							buttonText='Add author'
							onClick={() => addAuthor(author.id)}
						/>
					))}
				</div>
				<div className='courses-author'>
					<h2>Course authors</h2>
					{courseAuthors.length === 0 && (
						<p className='empty-list'>No course authors added</p>
					)}
					{courseAuthors.map((author) => (
						<AuthorItem
							key={author.id}
							name={author.name}
							buttonText='Delete author'
							onClick={() => deleteAuthor(author.id)}
						/>
					))}
				</div>
			</div>
			<div className='duration'>
				<h1>Duration</h1>
				<Input
					labelText='Duration'
					placeholderText='Duration...'
					type='number'
					value={`${duration}`}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setDuration(+e.currentTarget.value);
					}}
				/>
				<div>Duration: {convertDurationToHrsMins(duration)}</div>
			</div>
		</form>
	);
};

export default CreateCourse;
