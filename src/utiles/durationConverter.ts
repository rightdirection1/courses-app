import { dateTimeFormat } from './utils';

export const convertDurationToHrsMins = (duration: number) => {
	const hour: number = Math.floor(duration / 60);
	const minutes: number = duration % 60;

	return `${dateTimeFormat(hour)}.${dateTimeFormat(minutes)} hours`;
};
