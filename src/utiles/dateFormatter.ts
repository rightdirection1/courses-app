export const dateFormatter = (inputDate: string) => {
	const date = new Date(inputDate);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate() + 1;

	return `${day < 9 ? '0' + day : day}.${
		month < 9 ? '0' + month : month
	}.${year}`;
};
