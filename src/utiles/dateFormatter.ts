export const dateFormatter = (inputDate: string) => {
	//let date = new Date();
	//if (inputDate) {
	const date = new Date(inputDate);
	//}
	console.log('date ' + inputDate);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate() + 1;

	return `${day < 10 ? '0' + day : day}.${
		month < 10 ? '0' + month : month
	}.${year}`;
};
