export const dateTimeFormat = (num: number) => (num < 10 ? '0' + num : num);

export const parseJSON = (json: string) => {
	try {
		return JSON.parse(json);
	} catch (e) {
		return null;
	}
};
