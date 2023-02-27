import { useState } from 'react';

export const useApiRequest = () => {
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const postRequest = async (url: string, data: { [key: string]: any }) => {
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			setError(null);

			return response.json();
		} catch (e) {
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	return { error, loading, postRequest };
};
