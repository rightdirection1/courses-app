export const convertDurationToHrsMins = (duration: number) => {
	let hour: any = Math.floor(duration / 60);
	let minutes: any = duration % 60;
	hour = hour < 10 ? '0' + hour : hour;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	return hour + ':' + minutes + ' hours';
};
