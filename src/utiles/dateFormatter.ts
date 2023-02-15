import { dateTimeFormat } from './utils';

export const dateFormatter = (inputDate: string) => {
	const date = new Date(inputDate);
	console.log('date ' + inputDate);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate() + 1;

	return `${dateTimeFormat(day)}.${dateTimeFormat(month)}.${year}`;
};
