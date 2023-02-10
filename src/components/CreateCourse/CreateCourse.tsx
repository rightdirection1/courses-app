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
	chlidren?: React.ReactNode | React.ReactNode[];
}

const CreateCourse: FC<FormProps> = () => {
	const [duration, setDuration] = useState(0);
	const [author, setAuthor] = useState('');
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const onSubmit = () => {
		console.log('Submitted');
	};

	const createCourse = () => {
		console.log('create Course');
	};

	const addAuthor = (id: string) => {
		/*when user clicks on this button the corresponding author disappears from the Authors list and shows in Course authors.
		 New author should be added to the initial author's list;*/
		const authorIndex = authors.findIndex((author) => author.id === id);
		let poppedAuthor: any = {};

		if (authorIndex > -1) {
			poppedAuthor = authors.splice(authorIndex, 1);
		}
		const result: any = [];
		result.push(poppedAuthor);

		setCourseAuthors((item) => [...item, ...result]);
		console.log(courseAuthors);
	};

	const deleteAuthor = (authorId: string) => {
		/* Delete author - 
		when user clicks on this button the corresponding author disappears from the Course authors list and shows in Authors;*/

		console.log('Delete author');
	};

	const createAuthor = () => {
		setAuthors([
			...authors,
			{
				id: uuidv4().toString(),
				name: author,
			},
		]);

		setAuthor('');
	};
	console.log(courseAuthors);
	return (
		<>
			<form onSubmit={onSubmit}>
				<>
					<div className='create-course'>
						<Input
							labelText='Title'
							placeholderText='Title...'
							onChange={() => {
								console.log(2);
							}}
						/>
						<label htmlFor='descrpition'>Description:</label>
						<textarea id='description' name='description'></textarea>
						<Button text='Create course' onClick={createCourse} />
					</div>
					<div className='create-author'>
						<h1>Add author</h1>
						<Input
							labelText='Author'
							placeholderText='Create Author...'
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setAuthor(e.currentTarget.value);
							}}
						/>
						<Button text='Create Author' onClick={createAuthor} />
					</div>
					<div className='duration'>
						<h1>Duration</h1>
						<Input
							labelText='Duration'
							placeholderText='Duration...'
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								if (+e.currentTarget.value > 0) {
									setDuration(+e.currentTarget.value);
								} else {
									alert('The value should be greate than 0!');
								}
							}}
						/>
						<div>Duration: {convertDurationToHrsMins(duration)}</div>
					</div>
					<div className='authors'>
						<h1>Authors</h1>
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
						<h1>Course authors</h1>
						{/* {courseAuthors.length === 0 ? <p> No courses authors</p> : <></>} */}
						{courseAuthors[0]?.map((author) => {
							return (
								<AuthorItem
									key={author.id}
									name={author.name}
									buttonText='Delete author'
									onClick={() => deleteAuthor(author.id)}
								/>
							);
						})}
					</div>
				</>
			</form>
		</>
	);
};

export default CreateCourse;
